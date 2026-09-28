# Frequently Asked Questions about Deployment in customer VPC

Here are the questions we typically get from security leaders when they are evaluating Adri AI for deployment in their VPC.

## SAP System Protection

### 1. Does any Adri AI component require inbound network access into our SAP subnet?

No. The SAP restricted subnet has no inbound ports open to any external network. The Adri AI Connector runs inside the SAP subnet and initiates all connections outbound. No external system — including the Knowledge Graph Builder — can initiate a connection into the SAP subnet. ([Section 1.2](deployment-architecture-vpc#12-sap-restricted-subnet-no-inbound-ports), [Section 2.3](deployment-architecture-vpc#23-adri-ai-connector))

### 2. If the entire Customer VPC is compromised, can an attacker reach our SAP system?

No. The firewall between the VPC and the SAP subnet blocks all inbound traffic into the SAP subnet. Even if the Knowledge Graph Builder, all three databases, and the ChromaSQL Engine were compromised, an attacker could not initiate a connection into the SAP subnet to reach SAP Gateway. ([Section 5.1](deployment-architecture-vpc#51-firewall-between-vpc-and-sap-subnet))

### 3. How does the Connector communicate with the Knowledge Graph Builder without opening inbound ports on the SAP subnet?

The Connector is a client, not a server. It initiates an outbound Secure WebSocket connection to the Knowledge Graph Builder using mutual TLS (mTLS) for transport identity and short-lived JWTs for session authorization. Because the Connector initiates all connections outbound, the SAP subnet's "no inbound ports" policy is preserved. ([Section 2.3](deployment-architecture-vpc#23-adri-ai-connector))

### 4. What network boundaries does our ABAP source code cross, and over what protocols?

ABAP source code crosses two boundaries. First, from the SAP subnet to the Customer VPC via Secure WebSocket over mTLS (24-hour client certs, ECDSA P-256) with JWT session auth. Second, from the VPC to the LLM Embedding Service via HTTPS over PrivateLink — this traffic never traverses the public internet. The content sent to the LLM provider is determined by the customer-configured content scope. ([Section 3.3](deployment-architecture-vpc#33-what-crosses-network-boundaries))

---

## Data Sent to LLM Providers

### 5. What ABAP content is sent to the LLM embedding service?

The Knowledge Graph Builder applies a customer-configured content scope before sending any ABAP content for embedding. Three levels are available: full source (complete ABAP source code), signatures and documentation only (method bodies and inline business logic stripped), or local embedding only (no ABAP content sent to the managed LLM service). ([Section 2.5](deployment-architecture-vpc#25-llm-embedding-service))

### 6. Can we control what gets sent — can we strip source code and send only signatures?

Yes. The "signatures and documentation only" content scope sends only method/function signatures, class interfaces, object documentation, and dependency metadata. Method bodies, function implementations, and inline business logic are stripped before sending. The Basis team or security team selects the level during setup, and it can be changed at any time. ([Section 2.5](deployment-architecture-vpc#25-llm-embedding-service))

### 7. Can we avoid sending any data to a third-party LLM provider entirely?

Yes. The "local embedding only" content scope deploys a local embedding model inside the customer's VPC. No ABAP content is sent to the managed LLM service. This eliminates all third-party data transfer at the cost of requiring additional infrastructure. ([Section 2.5](deployment-architecture-vpc#25-llm-embedding-service))

### 8. Can we set different content scope policies for production versus development SAP systems?

Yes. The content scope is customer-configurable and can be set per SAP system, allowing different policies for production versus development landscapes. ([Section 5.2](deployment-architecture-vpc#52-llm-access-via-vpc-endpoints-private-network))

### 9. What data handling guarantees do the LLM providers offer — is our data used for model training?

All supported providers operate under enterprise data processing agreements. AWS Bedrock, Azure OpenAI, and GCP Vertex AI each guarantee that customer data sent for inference is not used for model training, is not accessible to the model provider, is not shared with third parties, and is encrypted in transit and at rest. ([Section 2.5](deployment-architecture-vpc#25-llm-embedding-service))

### 10. Does embedding traffic to the LLM provider traverse the public internet?

No. Embedding API calls are routed through VPC endpoints (AWS PrivateLink, Azure Private Link, or GCP Private Service Connect). Traffic travels over the cloud provider's internal network backbone. No internet gateway, NAT device, or public IP address is required for embedding calls. ([Section 1.3](deployment-architecture-vpc#13-llm-embedding-service-managed-cloud-service-via-private-endpoint), [Section 5.2](deployment-architecture-vpc#52-llm-access-via-vpc-endpoints-private-network))

---

## Connector Security & Credential Handling

### 11. What happens if a Connector is compromised — how quickly can we revoke its access?

Three revocation mechanisms are available: immediate termination of the active WebSocket connection (milliseconds), passive expiry (the renewal request is rejected), and explicit admin revocation via Web UI or API. Key pairs are rotated on every renewal, limiting the window of exposure for a compromised key to at most 24 hours. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

### 12. Where are SAP credentials stored on the Connector host — are they written to disk?

Credentials are held in memory only. The Connector never writes credentials to disk, does not expose them in command-line arguments or environment variables. ([Section 5.4](deployment-architecture-vpc#54-connector-isolation))

### 13. How does the Connector clean up credentials when it shuts down?

The Connector zeroes credential memory on process exit using the `zeroize` crate. ([Section 5.4](deployment-architecture-vpc#54-connector-isolation))

### 14. What limits the blast radius of a compromised Connector?

The Connector holds credentials in memory only, zeroes them on exit, does not expose them in CLI arguments or environment variables, should have network-level egress rules restricting outbound traffic to only the Knowledge Graph Builder's address, and executes only the ADT operations authorized by the server's session scope. ([Section 5.4](deployment-architecture-vpc#54-connector-isolation))

### 15. Can egress rules be applied to restrict the Connector's outbound traffic?

Yes. Network-level egress rules should restrict the Connector's outbound traffic to only the Knowledge Graph Builder's address. ([Section 5.4](deployment-architecture-vpc#54-connector-isolation))

---

## Authentication Protocol

### 16. How does the Connector authenticate to the Knowledge Graph Builder?

The Connector uses a two-layer protocol. Layer 1 is mutual TLS (mTLS) — the Connector presents a client certificate validated against the Adri AI Intermediate CA, using ECDSA P-256 keys valid for 24 hours. Layer 2 is a short-lived JWT carrying session-scoped authorization claims. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

### 17. Why do you use both mTLS and JWT — why isn't one sufficient?

mTLS proves cryptographic identity at the transport layer — it is hard to forge and cannot be replayed. The JWT carries the server's current policy decisions and can be refreshed without renegotiating TLS. If a customer's plan or permissions change mid-session, the next JWT refresh picks up the new policy immediately. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

### 18. How long are Connector certificates valid, and what happens when they expire?

Certificates are valid for 24 hours and are automatically renewed before expiry with a fresh key pair on each renewal. The 24-hour validity eliminates the need for real-time CRL distribution. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

### 19. How is a new Connector registered and trusted for the first time?

Customer connectors are registered using a one-time registration token generated by a customer admin in the Adri AI Web UI. The token is bound to the customer's organization, expires in 15 minutes, and is consumed on first use. During registration, the Connector generates a key pair locally (the private key never leaves the machine), sends a CSR to the server, and receives a signed certificate. No secrets are transmitted — only the CSR and the opaque registration token. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

---

## Certificate Authority & Trust Model

### 20. Who operates the Certificate Authority that signs Connector certificates?

Adri AI operates a two-tier CA: an offline, HSM-backed Root CA and an online Intermediate CA (AWS Private CA in production) that signs connector certificates. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

### 21. What happens if the Intermediate CA is compromised?

The Intermediate CA can be rotated without changing the root embedded in connector binaries. The Root CA's public key is embedded in every connector binary at build time, so trust in the root is unaffected by an Intermediate CA compromise. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

### 22. How is the Root CA protected, and where is its public key stored?

The Root CA is offline and HSM-backed. It is disabled after signing the Intermediate to minimize cost and attack surface. Its public key is embedded in every connector binary at build time. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

### 23. How are customer connectors distinguished from Adri AI's internal connectors?

The certificate's `OU` field encodes the deployment class — `customer` or `internal`. Customer connectors register via one-time tokens from the Web UI and receive certificates with `OU=customer`. Internal connectors register automatically using IAM-role-based bootstrap tokens from AWS STS and receive certificates with `OU=internal`. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

### 24. Can a customer connector use an authorization strategy intended for internal connectors?

No. The server enforces a hardcoded policy based on the certificate's deployment class. Customer connectors can use Customer-Managed Secrets, Passwordless SSO, and Technical User strategies. Internal connectors can only use Dev Sandbox and Adri-Managed Secrets. This policy cannot be overridden — only further restricted per organization. ([Section 5.5](deployment-architecture-vpc#55-connector-to-server-authentication-mtls--jwt))

---

## Network Architecture & VPC Deployment

### 25. What components get deployed inside our VPC, and which ones live outside it?

Inside the Customer VPC: Adri AI Server, Knowledge Graph Builder, Vector Database, Postgres Database, S3-like Object Storage, and the LLM Embedding Service (accessed via VPC endpoint). Inside the SAP Restricted Subnet: SAP Gateway and the Adri AI Connector. The LLM Embedding Service itself is a managed cloud service, but it is accessed via VPC endpoints so traffic stays on the cloud provider's internal network. ([Section 1.1](deployment-architecture-vpc#11-customer-vpc), [Section 1.2](deployment-architecture-vpc#12-sap-restricted-subnet-no-inbound-ports))

### 26. Which components require outbound internet access, and for what purpose?

Only the Adri AI Server requires outbound internet access, specifically for web search functionality. All other components operate entirely within private networks. ([Section 5.3](deployment-architecture-vpc#53-internet-access-adri-ai-server-only))

### 27. Where is our knowledge graph data stored — does any of it leave the VPC?

All knowledge graph data is stored within the Customer VPC across three tiers: the Vector Database (embeddings), Postgres (source code, dependencies, metadata), and S3 (oversized objects). The only data that leaves the VPC is the content sent to the LLM provider for embedding — and the customer controls the scope of that content. ([Section 1.1](deployment-architecture-vpc#11-customer-vpc), [Section 2.2](deployment-architecture-vpc#22-adri-ai-knowledge-graph-builder))

---

## Storage Architecture

### 28. Why are there three separate storage tiers instead of one database?

Each tier handles its optimal data size range. The Vector Database (< 8,096 bytes) is optimized for similarity search. Postgres (< 1 MB) handles full-text search, relational queries, and keyword matching. S3 (unlimited) stores oversized ABAP objects without truncation or performance degradation. ([Section 4](deployment-architecture-vpc#4-storage-tier-selection))

### 29. What happens to ABAP objects that are too large for the vector database or Postgres?

Objects exceeding 1 MB are stored in S3 Object Storage. The vector database and Postgres store references (S3 keys) to these objects, so the query engine can still locate them and fetch content on demand. ([Section 2.8](deployment-architecture-vpc#28-s3-like-object-storage))

---

## Query Path & Access Control

### 30. How do developers authenticate when querying the knowledge graph?

The Adri AI Server authenticates developers via the customer's IdP and enforces authorization policies before serving results. ([Section 2.1](deployment-architecture-vpc#21-adri-ai-server))

### 31. Is ChromaSQL a separate network service, or is it embedded inside the Adri AI Server?

ChromaSQL is embedded within the Adri AI Server as an internal query engine module. It is not a separate network service. All queries against the Vector Database and Postgres are issued by ChromaSQL inside the server process, after authentication and authorization. ([Section 2.1](deployment-architecture-vpc#21-adri-ai-server))

### 32. What consumers can query the knowledge graph — AI chat, IDE plugins, API clients?

Yes — the Adri AI Server serves results to AI chat, IDE plugins, and API clients. ([Section 2.1](deployment-architecture-vpc#21-adri-ai-server))

---

## Connector System Requirements

### 33. What does the Connector install on the host machine in the SAP subnet?

The Adri AI Connector installs a Java runtime and its dependencies on the host machine. ([Section 1.2](deployment-architecture-vpc#12-sap-restricted-subnet-no-inbound-ports))

### 34. Which Java runtime does it use, and can we control that?

It downloads Amazon Corretto or OpenJDK, depending on what the customer's environment permits. ([Section 1.2](deployment-architecture-vpc#12-sap-restricted-subnet-no-inbound-ports))

---

## LLM Provider Choice

### 35. Are we locked into a specific LLM provider, or can we choose based on our existing cloud contracts?

No vendor lock-in. The Knowledge Graph Builder abstracts the embedding API behind a provider-agnostic interface. Customers choose based on existing cloud relationships, pricing, and compliance posture. ([Section 2.5](deployment-architecture-vpc#25-llm-embedding-service))

### 36. Which LLM providers are supported, and how is private connectivity established for each?

AWS Bedrock (Claude, Titan) via `com.amazonaws.<region>.bedrock-runtime` VPC endpoint, Azure OpenAI (GPT-4) via Azure Private Link, and GCP Vertex AI (Gemini) via Private Service Connect. ([Section 1.3](deployment-architecture-vpc#13-llm-embedding-service-managed-cloud-service-via-private-endpoint))
