---
title: Connect IBM Bob
sidebar_position: 6
description: Connect Adri MCP Server in IBM Bob using token authentication.
---

import {ADRI_URLS} from '@site/src/constants/urls';
import CodeBlock from '@theme/CodeBlock';
import AuthenticateUsingTokenComponent from '@site/src/components/AuthenticateUsingTokenComponent.mdx';

## Connect Adri MCP Server in IBM Bob

IBM Bob supports token-based authentication.
First create a token, then add Adri MCP Server in Bob settings.

<AuthenticateUsingTokenComponent />

## IBM Bob specific setup

### 1. Open Bob settings

1. Open IBM Bob in VS Code.
2. Click the **Settings** icon.

![Open IBM Bob settings](/img/adri-mcp-server/connect-ibm-bob/5.png)

### 2. Open MCP settings

1. In settings, click **MCP**.

![Go to MCP settings in IBM Bob](/img/adri-mcp-server/connect-ibm-bob/6.png)

2. Make sure **Use MCP servers** is enabled.
3. Under **Global MCPs**, click **Open**.

![Open Global MCP settings](/img/adri-mcp-server/connect-ibm-bob/7.png)

### 3. Add Adri MCP config

Paste this in Bob's `mcp_settings.json` and replace `<your_access_token>` with the token you copied earlier.
Then save the file (`Cmd+S` on macOS or `Ctrl+S` on Windows/Linux).

<CodeBlock language="json">{`{
  "mcpServers": {
    "adri-ai": {
      "type": "streamable-http",
      "url": "${ADRI_URLS.mcpServer}",
      "headers": {
        "Authorization": "Bearer <your_access_token>"
      },
      "alwaysAllow": [
        "systems_list_available",
        "sessions_open"
      ]
    }
  }
}`}</CodeBlock>

![Paste Adri MCP config in mcp_settings.json](/img/adri-mcp-server/connect-ibm-bob/8.png)

### 4. Confirm MCP server is available

Return to MCP settings and confirm `adri-ai` appears in the server list.

![Verify adri-ai appears in MCP server list](/img/adri-mcp-server/connect-ibm-bob/9.png)

### 5. Enable MCP in your chat

In the chat panel, keep both controls ON (blue):
- The left switch.
- The **MCP** button.

Important:
- In this screenshot there are two red boxes.
- Both highlighted controls must be blue.

![Ensure both switch and MCP button are blue](/img/adri-mcp-server/connect-ibm-bob/10.png)

### 6. Run first prompt in IBM Bob

Ask: `List all SAP systems using "adri-ai" MCP.`

![Ask IBM Bob to list SAP systems](/img/adri-mcp-server/connect-ibm-bob/11.png)

### 7. Verify response

Confirm IBM Bob returns SAP systems from Adri MCP Server.

![Verify SAP systems response from Adri MCP in IBM Bob](/img/adri-mcp-server/connect-ibm-bob/12.png)

### 8. Continue with your task

Now you can ask your SAP development request in IBM Bob.

![Run your next SAP request in IBM Bob](/img/adri-mcp-server/connect-ibm-bob/13.png)
