---
title: Read and Write SAP Configuration
sidebar_position: 1
description: Use Adri AI to read and update SAP configuration quickly with MCP tools, prompts, and IMG extraction.
---

import Link from '@docusaurus/Link';
import IMGExtractionStepsComponent from '@site/src/components/IMGExtractionStepsComponent.mdx';

## Why this use case matters

Reading and updating SAP configuration is usually slow because teams need multiple manual checks across IMG paths, tables, and documentation.

With Adri AI, this works out of the box through:

- Adri MCP tools and resources
- Prompt-based workflows in MCP-compatible agents
- Slash commands in Adri agents

In both Claude Chat and Claude Code, the first few steps aim for the same thing:
load Adri AI's SAP configuration guide first, then run your request.

- Claude Chat flow (this page): use connectors to open `sap_read_configuration_guide`
- Claude Code flow: [Work with SAP Configuration using Claude Code](./work-with-sap-configuration-using-claude-code.md)

The screenshots below show a step-by-step example in Claude (`claude.ai`).
You can follow the same idea in other MCP-compatible platforms as well.

Legend:

- **Red box**: action to take
- **Blue box**: important information to notice

## Example flow in Claude (same idea for other platforms)

1. Open connectors/tools in Claude and select the SAP configuration resource prompt.

![Select connector and SAP configuration prompt](/img/use-cases/img-extraction/1.png)

2. Ask a clear configuration query.

Example:

```text
List pricing condition types in system DEV40.
```

![Ask a configuration query with system name](/img/use-cases/img-extraction/2.png)

3. Claude starts running Adri MCP calls in the background.
Watch the tool steps to verify progress.

![Tool execution progress in Claude](/img/use-cases/img-extraction/3.png)

4. Review the returned configuration result.
Use filters/search in the result table to inspect specific entries.

![Configuration result returned in structured table view](/img/use-cases/img-extraction/4.png)

## Optional: Make it faster and more accurate: run IMG Extraction

For best results, run IMG Extraction from Project Manager.
This improves configuration read/write quality significantly.
Full setup guide:
<Link to="/adri-mcp-server/setup-img-extraction">Setup IMG Extraction</Link>

<IMGExtractionStepsComponent />

## Related setup guides

1. [Setup (Claude Code)](../adri-mcp-server/setup-in-claude-code.md)
2. [Setup (Codex)](../adri-mcp-server/setup-in-codex.md)
3. [Slash Commands in Adri Agents](../research-agent/capabilities/slash-commands.md)
