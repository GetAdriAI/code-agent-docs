---
title: Setup (Codex)
sidebar_position: 3
description: Connect Adri MCP Server in Codex CLI, complete OAuth login, and run your first prompt.
---

import {ADRI_URLS, EXTERNAL_URLS} from '@site/src/constants/urls';
import CodeBlock from '@theme/CodeBlock';

## Connect Adri MCP Server in Codex

Use this guide to connect Adri MCP Server in Codex, then use it directly inside VS Code.
For advanced SAP-side capabilities (parametrized execution and better large-table pagination), also complete [Setup Enabler Framework](./setup-enabler-framework.md).

If you prefer Claude Code screenshots, use [Setup (Claude Code)](./setup-in-claude-code.md).

> In every screenshot, the red box shows where to focus.

## Pre-requisites

1. Complete the one-time tool install guide:
[Install VS Code and Agent Tools](./install-tools-for-mcp.md)
2. Log in to Adri AI: <a href={ADRI_URLS.login}>https://www.getadri.ai/login</a>
3. Install the Codex VS Code extension from OpenAI docs: <a href={EXTERNAL_URLS.codexIdeDocs}>https://developers.openai.com/codex/ide</a>
4. Optional direct marketplace page: <a href={EXTERNAL_URLS.codexVsCodeMarketplace}>Visual Studio Code Marketplace</a>

## 1. Setup Adri MCP Server in terminal (CLI)

Run these commands in your project terminal:

<CodeBlock language="bash">{`npm install -g @openai/codex
codex login
codex mcp add sap_development_mcp_by_adri_ai --url ${ADRI_URLS.mcpServer}
codex mcp login sap_development_mcp_by_adri_ai
codex mcp list
codex mcp get sap_development_mcp_by_adri_ai`}</CodeBlock>

What this does:
- Installs Codex CLI.
- Signs you in.
- Adds Adri MCP Server.
- Opens OAuth login for Adri project access.
- Confirms the server is connected and enabled.

![Complete Codex CLI MCP setup in terminal](/img/adri-mcp-server/setup-codex/1.png)

Official references:
- <a href={EXTERNAL_URLS.codexCliDocs}>Codex CLI docs</a>
- <a href={EXTERNAL_URLS.codexQuickstart}>Codex Quickstart</a>

## 2. Open Codex in VS Code and use Adri MCP Server

1. Open the VS Code Command Palette.
2. Search for `Codex: Open Codex Sidebar`.

![Search for Codex command in the VS Code command palette](/img/adri-mcp-server/setup-codex/2.png)

3. Select **Codex: Open Codex Sidebar**.

![Select Codex Open Sidebar command](/img/adri-mcp-server/setup-codex/3.png)

4. Confirm the Codex panel opens on the right side.

![Codex panel opened in the right sidebar](/img/adri-mcp-server/setup-codex/4.png)

5. Ask Codex: `List all SAP systems`.

![Enter first prompt in Codex sidebar](/img/adri-mcp-server/setup-codex/5.png)

6. Verify Codex returns your SAP systems from Adri MCP Server.

![Verify Codex response from Adri MCP tools](/img/adri-mcp-server/setup-codex/6.png)

## Troubleshooting

### Browser did not open automatically

Copy the URL printed by `codex mcp login ...` and open it manually in any browser.

### OAuth callback issues (port or remote/devbox environments)

Configure callback settings in `~/.codex/config.toml`:

<CodeBlock language="toml">{`mcp_oauth_callback_port = 55743
mcp_oauth_callback_url = "http://127.0.0.1:55743/callback"`}</CodeBlock>

Then retry:

<CodeBlock language="bash">{`codex mcp login sap_development_mcp_by_adri_ai`}</CodeBlock>

### Re-authenticate from a clean state

Remove stored OAuth credentials, then log in again:

<CodeBlock language="bash">{`codex mcp logout sap_development_mcp_by_adri_ai
codex mcp login sap_development_mcp_by_adri_ai`}</CodeBlock>

### Still failing

Validate the MCP endpoint and metadata:

<CodeBlock language="bash">{`curl -i ${ADRI_URLS.mcpServer}
curl https://mcp-server.getadri.ai/.well-known/oauth-protected-resource`}</CodeBlock>
