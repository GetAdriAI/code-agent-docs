---
title: Install MCP for Codex
sidebar_position: 9
description: Install the Adri MCP Server for Codex CLI from the VS Code extension in one click.
---

# Install MCP for Codex

The extension can also install the Adri MCP Server into your Codex CLI configuration. This is the one-click alternative to manual setup — see [Setup (Codex)](../adri-mcp-server/setup-in-codex.md) for the manual flow.

> In every screenshot, the red box shows where to focus.

## Pre-requisites

- The Codex CLI is installed and you are signed in.
- The Adri AI Foundry for VS Code extension is installed and you are [signed in](./sign-in-adri-ai.md).

## 1. Open Setup → AI Tools

In the **SAP ADT Explorer**, expand **Setup → AI Tools**. **Codex** is listed as **Not installed** by default.

![Codex listed as Not installed under AI Tools](/img/vs-code-extension/34.png)

## 2. Click the install icon

Hover over the **Codex** row and click the **Install** icon on the right. The extension writes the MCP server entry into your Codex configuration.

## 3. Restart Codex

When the install completes, the row updates to **Installed** and the status bar shows **Adri AI installed for Codex. Restart Codex to connect.** Restart Codex so it picks up the new MCP server.

![Codex marked Installed with a restart prompt](/img/vs-code-extension/35.png)

After restart, Codex can call Adri MCP tools. The same install row offers an **Uninstall MCP Server** action if you ever need to remove it.
