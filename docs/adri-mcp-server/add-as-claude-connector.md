---
title: Connect to Claude (claude.ai)
sidebar_position: 4
description: Add Adri MCP Server as a custom connector in Claude Chat.
---

import {ADRI_URLS, EXTERNAL_URLS} from '@site/src/constants/urls';
import CodeBlock from '@theme/CodeBlock';
import InlineCodeWithCopy from '@site/src/components/InlineCodeWithCopy';

## Add Adri MCP Server in Claude Chat

Use this guide to add Adri MCP Server as a custom connector in Claude Chat and run a quick test prompt.

> In every screenshot, the red box shows exactly where to focus.

## Pre-requisite

- Log in to Adri AI: <a href={ADRI_URLS.login}>https://www.getadri.ai/login</a>
- Log in to Claude: <a href={EXTERNAL_URLS.claudeLogin}>https://claude.ai/login</a>

## MCP server URL (copy this)

<CodeBlock language="text">{ADRI_URLS.mcpServer}</CodeBlock>

### 1. Open Claude Connectors settings

1. Open <a href={EXTERNAL_URLS.claudeConnectors}>claude.ai/settings/connectors</a>.
2. Click **Add custom connector**.

![Click Add custom connector](/img/adri-mcp-server/claude-chat-connectors/1.png)

### 2. Add the connector details

1. In the connector dialog, enter a name like `SAP Development MCP by Adri AI`.
2. Paste this server URL: <InlineCodeWithCopy>{ADRI_URLS.mcpServer}</InlineCodeWithCopy>.
3. Click **Add**.

![Enter connector name and URL](/img/adri-mcp-server/claude-chat-connectors/2.png)

### 3. Configure tool permissions

1. In the connector list, find `SAP Development MCP by Adri AI`.
2. Click **Configure**.

![Click Configure for the Adri connector](/img/adri-mcp-server/claude-chat-connectors/3.png)

3. In the tool permissions dropdown, switch from **Needs approval** to **Always allow**.

![Choose Always allow](/img/adri-mcp-server/claude-chat-connectors/4.png)

4. Confirm the dropdown now shows **Always allow**.

![Verify Always allow is selected](/img/adri-mcp-server/claude-chat-connectors/5.png)

### 4. Enable the connector in chat

1. Open a new Claude chat.
2. Click the **+** button.
3. Open **Connectors**.
4. Turn on `SAP Development MCP by Adri AI`.

![Enable Adri MCP connector in Claude chat](/img/adri-mcp-server/claude-chat-connectors/6.png)

### 5. Test with a first prompt

1. Ask: `List all SAP systems`.

![Enter the first test prompt](/img/adri-mcp-server/claude-chat-connectors/7.png)

2. Verify Claude returns your SAP systems list from the connector.

![Verify SAP systems response](/img/adri-mcp-server/claude-chat-connectors/8.png)
