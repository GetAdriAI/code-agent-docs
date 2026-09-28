import { useState } from "react";

const COLORS = {
  bg: "#ffffff",
  text: "#1e293b",
  textMuted: "#64748b",
  textDim: "#94a3b8",
  cardBorder: "#cbd5e1",
  vpcFill: "#eff6ff",
  vpcBorder: "#93c5fd",
  vpcLabel: "#2563eb",
  sapFill: "#fce7f3",
  sapBorder: "#f9a8d4",
  sapLabel: "#be185d",
  sapInnerFill: "#ede9fe",
  sapInnerBorder: "#c4b5fd",
  llmFill: "#fff7ed",
  llmBorder: "#fdba74",
  llmLabel: "#c2410c",
  blue: "#3b82f6",
  purple: "#8b5cf6",
  rose: "#e11d48",
  cyan: "#0891b2",
  amber: "#d97706",
  green: "#059669",
  fuchsia: "#c026d3",
  indigo: "#6366f1",
  slate: "#475569",
};

const nodes = [
  {
    id: "server",
    label: "Adri AI Server",
    label2: null,
    sublabel: "AUTH · CHROMASQL · WEB SEARCH",
    desc: "Orchestration, authentication, authorization, and web search. Contains ChromaSQL as an internal query engine module. The only component requiring outbound internet access (for web search).",
    x: 10, y: 18,
    accent: COLORS.slate, zone: "vpc", icon: "\uD83D\uDD10",
  },
  {
    id: "builder",
    label: "Adri AI Knowledge",
    label2: "Graph Builder",
    sublabel: "NO INTERNET REQUIRED",
    desc: "Builds and maintains the knowledge graph. Receives ABAP objects from the Connector, calls LLM Embedding Service via VPC endpoint (PrivateLink), and distributes results across Vector DB, Postgres, and S3. Does not require internet access.",
    x: 10, y: 40,
    accent: COLORS.blue, zone: "vpc", icon: "\u26A1",
  },
  {
    id: "llm",
    label: "LLM Embedding Service",
    label2: null,
    sublabel: "VPC ENDPOINT · PRIVATELINK",
    desc: "Managed cloud embedding API accessed via VPC endpoint. Traffic stays on the cloud provider\u2019s internal network backbone \u2014 no internet gateway or NAT required. Supports AWS Bedrock, Azure OpenAI, GCP Vertex AI.",
    x: 32, y: 92,
    accent: COLORS.amber, zone: "llm", icon: "\uD83E\uDDE0",
  },
  {
    id: "vectordb",
    label: "Vector Database",
    label2: null,
    sublabel: "8,096 BYTES LIMIT",
    desc: "Stores vector embeddings (8,096 byte limit per record) for semantic similarity search.",
    x: 10, y: 58,
    accent: COLORS.purple, zone: "vpc", icon: "\u25C8",
  },
  {
    id: "postgres",
    label: "Postgres Database",
    label2: null,
    sublabel: "1 MB LIMIT \u00B7 KEYWORDS",
    desc: "Stores keywords, dependencies, and documents (1 MB limit). Also stores dependency graph between custom objects.",
    x: 30, y: 58,
    accent: COLORS.rose, zone: "vpc", icon: "\uD83D\uDC18",
  },
  {
    id: "s3",
    label: "S3 Object Storage",
    label2: null,
    sublabel: "LARGE FILES \u00B7 ABAP CODE",
    desc: "Stores large files like ABAP objects with 10,000+ lines of code. Overcomes DB size limits.",
    x: 50, y: 58,
    accent: COLORS.cyan, zone: "vpc", icon: "\u2601",
  },
  {
    id: "sapgw",
    label: "SAP Gateway",
    label2: null,
    sublabel: "ADT APIs \u00B7 ABAP SOURCE",
    desc: "Enterprise SAP system. Exposes ABAP objects via ADT (ABAP Development Tools) APIs provided by SAP. Resides in a highly restricted subnet.",
    x: 81, y: 28,
    accent: COLORS.fuchsia, zone: "sap", icon: "\u25C6",
  },
  {
    id: "connector",
    label: "Adri AI Connector",
    label2: null,
    sublabel: "CLIENT \u00B7 OUTBOUND ONLY \u00B7 JAVA",
    desc: "Client. Runs inside the SAP restricted subnet. Communicates with SAP via ADT APIs. Outbound-only traffic. Authenticates to server via mTLS (24-hour certs, ECDSA P-256) + JWT. Requires Java runtime (Amazon Corretto or OpenJDK).",
    x: 81, y: 55,
    accent: COLORS.green, zone: "sap", icon: "\uD83D\uDD17",
  },
];

const connections = [
  { from: "server", to: "builder", label: "Orchestration" },
  { from: "builder", to: "llm", label: "Via VPC endpoint (PrivateLink)" },
  { from: "builder", to: "vectordb", label: "Store vectors" },
  { from: "builder", to: "postgres", label: "Store docs" },
  { from: "builder", to: "s3", label: "Store large files" },
  { from: "server", to: "vectordb", label: "ChromaSQL queries" },
  { from: "server", to: "postgres", label: "ChromaSQL queries" },
  { from: "server", to: "s3", label: "ChromaSQL queries" },
  { from: "connector", to: "sapgw", label: "Reads ABAP objects (ADT API)" },
  { from: "connector", to: "builder", label: "Outbound push (mTLS + JWT)" },
];

const zoneDefs = [
  { id: "vpc", label: "CUSTOMER VPC", sublabel: "Only Adri AI Server requires internet (web search)",
    x: 1, y: 3, w: 61, h: 74, fill: COLORS.vpcFill, border: COLORS.vpcBorder, labelColor: COLORS.vpcLabel },
  { id: "sap", label: "SAP RESTRICTED SUBNET", sublabel: "No inbound ports \u00B7 Outbound only",
    x: 66, y: 3, w: 33, h: 74, fill: COLORS.sapFill, border: COLORS.sapBorder, labelColor: COLORS.sapLabel },
  { id: "llm", label: "MANAGED LLM SERVICE", sublabel: "Via VPC endpoint (PrivateLink) \u00B7 No internet traversal",
    x: 1, y: 82, w: 61, h: 16, fill: COLORS.llmFill, border: COLORS.llmBorder, labelColor: COLORS.llmLabel },
];

function getNodeCenter(n, W, H) {
  return { cx: (n.x / 100) * W, cy: (n.y / 100) * H };
}

function getEdgePath(f, t, W, H) {
  const a = getNodeCenter(f, W, H);
  const b = getNodeCenter(t, W, H);
  const dx = b.cx - a.cx, dy = b.cy - a.cy;
  const d = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = dx / d, ny = dy / d;
  const sx = a.cx + nx * 58, sy = a.cy + ny * 28;
  const ex = b.cx - nx * 58, ey = b.cy - ny * 28;
  const mx = (sx + ex) / 2, my = (sy + ey) / 2;
  const px = -(ey - sy) * 0.07, py = (ex - sx) * 0.07;
  return {
    path: `M ${sx} ${sy} Q ${mx + px} ${my + py} ${ex} ${ey}`,
    lx: mx + px * 0.5, ly: my + py * 0.5,
  };
}

export default function App({ highlightNode = null }) {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(highlightNode);
  const W = 1060, H = 680;
  const active = selected || hovered;
  const nm = {};
  nodes.forEach(n => (nm[n.id] = n));

  return (
    <div style={{
      background: COLORS.bg, minHeight: "100vh",
      fontFamily: "'IBM Plex Sans', -apple-system, sans-serif",
      color: COLORS.text, padding: "28px 20px",
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 1100, width: "100%" }}>
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 4px", color: "#0f172a" }}>
            How Adri AI deploys Knowledge Graph Infrastructure in VPC
            {highlightNode && nm[highlightNode] && (
              <span style={{ color: nm[highlightNode].accent }}> — {nm[highlightNode].label}{nm[highlightNode].label2 ? ` ${nm[highlightNode].label2}` : ""}</span>
            )}
          </h1>
        </div>

        <div style={{
          background: "#fff", borderRadius: 12,
          border: "1px solid #e2e8f0", overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}>
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
              </marker>
              <marker id="arr-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
              </marker>
            </defs>

            {/* Zone bounding boxes */}
            {zoneDefs.map(z => {
              const zx = (z.x / 100) * W, zy = (z.y / 100) * H;
              const zw = (z.w / 100) * W, zh = (z.h / 100) * H;
              return (
                <g key={z.id}>
                  <rect x={zx} y={zy} width={zw} height={zh} rx={12}
                    fill={z.fill} stroke={z.border} strokeWidth={1.5} />
                  <text x={zx + 14} y={zy + 18} fill={z.labelColor} fontSize={11}
                    fontFamily="'IBM Plex Sans', sans-serif" fontWeight={700} letterSpacing={0.8}>
                    {z.label}
                  </text>
                  <text x={zx + 14} y={zy + 32} fill={COLORS.textMuted} fontSize={9}
                    fontFamily="'IBM Plex Mono', monospace">
                    {z.sublabel}
                  </text>
                </g>
              );
            })}

            {/* Inner SAP Landscape box */}
            {(() => {
              const sx = (69 / 100) * W, sy = (14 / 100) * H;
              const sw = (27 / 100) * W, sh = (55 / 100) * H;
              return (
                <g>
                  <rect x={sx} y={sy} width={sw} height={sh} rx={10}
                    fill={COLORS.sapInnerFill} stroke={COLORS.sapInnerBorder} strokeWidth={1} />
                  <text x={sx + 10} y={sy + 16} fill="#7c3aed" fontSize={10}
                    fontFamily="'IBM Plex Sans', sans-serif" fontWeight={600} letterSpacing={0.5}>
                    SAP LANDSCAPE
                  </text>
                </g>
              );
            })()}

            {/* LLM zone is now rendered as a separate zone via zoneDefs */}

            {/* Internet badge on Server */}
            {(() => {
              const s = nodes.find(n => n.id === "server");
              const { cx, cy } = getNodeCenter(s, W, H);
              return (
                <g>
                  <rect x={cx - 55} y={cy - 44} width={110} height={18} rx={5}
                    fill="#fee2e2" stroke="#fca5a5" strokeWidth={0.8} />
                  <text x={cx} y={cy - 31.5} textAnchor="middle" fill="#dc2626"
                    fontSize={7.5} fontFamily="'IBM Plex Mono', monospace" fontWeight={600} letterSpacing={0.4}>
                    INTERNET (WEB SEARCH)
                  </text>
                </g>
              );
            })()}

            {/* Firewall divider */}
            {(() => {
              const fx = (63.5 / 100) * W;
              const fy1 = (3 / 100) * H, fy2 = (77 / 100) * H;
              const mid = (fy1 + fy2) / 2;
              return (
                <g>
                  <line x1={fx} y1={fy1} x2={fx} y2={mid - 14}
                    stroke="#e11d4866" strokeWidth={1.5} strokeDasharray="4,4" />
                  <line x1={fx} y1={mid + 14} x2={fx} y2={fy2}
                    stroke="#e11d4866" strokeWidth={1.5} strokeDasharray="4,4" />
                  <rect x={fx - 36} y={mid - 12} width={72} height={24} rx={6}
                    fill="#fff" stroke="#e11d4866" strokeWidth={1} />
                  <text x={fx} y={mid + 3} textAnchor="middle" fill="#e11d48"
                    fontSize={8.5} fontFamily="'IBM Plex Mono', monospace"
                    fontWeight={600} letterSpacing={0.8}>
                    FIREWALL
                  </text>
                </g>
              );
            })()}

            {/* Connections */}
            {connections.map((c, i) => {
              const fn = nm[c.from], tn = nm[c.to];
              const e = getEdgePath(fn, tn, W, H);
              const isA = active && (c.from === active || c.to === active);
              const isD = active && !isA;
              const lw = Math.max(c.label.length * 5.2 + 16, 80);
              return (
                <g key={i} style={{ opacity: isD ? 0.15 : 1, transition: "opacity 0.25s" }}>
                  <path d={e.path} fill="none"
                    stroke={isA ? "#2563eb" : "#94a3b8"}
                    strokeWidth={isA ? 2 : 1.2}
                    markerEnd={isA ? "url(#arr-a)" : "url(#arr)"} />
                  <rect x={e.lx - lw / 2} y={e.ly - 9} width={lw} height={18} rx={4}
                    fill="#fff" fillOpacity={0.95}
                    stroke={isA ? "#93c5fd" : "#e2e8f0"} strokeWidth={0.8} />
                  <text x={e.lx} y={e.ly + 3} textAnchor="middle"
                    fill={isA ? "#2563eb" : "#64748b"}
                    fontSize={8} fontFamily="'IBM Plex Mono', monospace"
                    fontWeight={isA ? 600 : 400}>
                    {c.label}
                  </text>
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map(node => {
              const { cx, cy } = getNodeCenter(node, W, H);
              const isA = active === node.id;
              const isD = active && active !== node.id &&
                !connections.some(c =>
                  (c.from === active && c.to === node.id) ||
                  (c.to === active && c.from === node.id));
              const hasLine2 = !!node.label2;
              const cardH = hasLine2 ? 60 : 52;

              return (
                <g key={node.id}
                  style={{ cursor: "pointer", opacity: isD ? 0.2 : 1, transition: "opacity 0.25s" }}
                  onMouseEnter={() => setHovered(node.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(selected === node.id ? null : node.id)}
                >
                  <rect x={cx - 96} y={cy - cardH / 2} width={192} height={cardH} rx={8}
                    fill="#ffffff"
                    stroke={isA ? node.accent : COLORS.cardBorder}
                    strokeWidth={isA ? 2 : 1}
                    style={{ transition: "all 0.2s" }} />
                  <rect x={cx - 96} y={cy - cardH / 2} width={4} height={cardH} rx={2}
                    fill={node.accent} />
                  <text x={cx - 72} y={cy + (hasLine2 ? 2 : 5)} textAnchor="middle" fontSize={14}>
                    {node.icon}
                  </text>

                  {hasLine2 ? (
                    <>
                      <text x={cx - 56} y={cy - 12} fill="#0f172a" fontSize={11} fontWeight={600}
                        fontFamily="'IBM Plex Sans', sans-serif">{node.label}</text>
                      <text x={cx - 56} y={cy + 2} fill="#0f172a" fontSize={11} fontWeight={600}
                        fontFamily="'IBM Plex Sans', sans-serif">{node.label2}</text>
                      <text x={cx - 56} y={cy + 17} fill={COLORS.textMuted} fontSize={7.5}
                        fontFamily="'IBM Plex Mono', monospace" letterSpacing={0.4}>
                        {node.sublabel}
                      </text>
                    </>
                  ) : (
                    <>
                      <text x={cx - 56} y={cy - 5} fill="#0f172a" fontSize={11.5} fontWeight={600}
                        fontFamily="'IBM Plex Sans', sans-serif">{node.label}</text>
                      <text x={cx - 56} y={cy + 10} fill={COLORS.textMuted} fontSize={7.5}
                        fontFamily="'IBM Plex Mono', monospace" letterSpacing={0.4}>
                        {node.sublabel}
                      </text>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detail panel */}
        <div style={{
          marginTop: 12, minHeight: 60,
          background: "#f8fafc", borderRadius: 10,
          border: `1.5px solid ${active ? nm[active]?.accent + "44" : "#e2e8f0"}`,
          padding: "12px 16px", transition: "border-color 0.2s",
        }}>
          {active ? (
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: nm[active].accent + "14",
                border: `1.5px solid ${nm[active].accent}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 15, flexShrink: 0,
              }}>
                {nm[active].icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, color: "#0f172a", marginBottom: 2 }}>
                  {nm[active].label}{nm[active].label2 ? ` ${nm[active].label2}` : ""}
                </div>
                <div style={{ fontSize: 12, color: COLORS.textMuted, lineHeight: 1.55 }}>
                  {nm[active].desc}
                </div>
                <div style={{ marginTop: 6, display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {connections.filter(c => c.from === active || c.to === active).map((c, i) => {
                    const other = c.from === active ? nm[c.to] : nm[c.from];
                    const oLabel = other.label + (other.label2 ? ` ${other.label2}` : "");
                    return (
                      <span key={i} style={{
                        fontSize: 10, fontFamily: "'IBM Plex Mono', monospace",
                        background: "#fff", padding: "2px 8px", borderRadius: 5,
                        color: COLORS.textMuted, border: "1px solid #e2e8f0",
                      }}>
                        {c.from === active ? "\u2192" : "\u2190"} {oLabel} {"\u00B7"} {c.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", color: COLORS.textDim, fontSize: 12, padding: "4px 0" }}>
              Hover or click a component to explore its connections and details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
