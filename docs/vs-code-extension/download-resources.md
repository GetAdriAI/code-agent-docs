---
title: Download Resources
sidebar_position: 7
description: Browse and refresh the libraries and prompts that Adri AI ships to your coding agent.
---

# Download Resources

The extension ships **Libraries** and **Prompts** as project resources that your coding agent picks up automatically. You normally do not need to download anything by hand — refreshing happens in the background — but the **Resources** tree gives you a way to inspect what is currently cached and force a refresh if needed.

> In every screenshot, the red box shows where to focus.

## 1. Open the Resources tree

In the **SAP ADT Explorer**, expand **Setup → Resources**. You will see entries for **Libraries** and **Prompts**, each with a count and a cached state (e.g. *12 prompts cached*).

![Resources section showing Libraries and Prompts](/img/vs-code-extension/26.png)

## 2. Refresh resources (optional)

Hover over **Resources** and click the **Refresh** icon. The extension contacts Adri AI and re-syncs the libraries and prompts for your project.

![Refresh the cached resources](/img/vs-code-extension/27.png)

## 3. Verify the cached output

Once refreshed, the entries are updated in place — for example, **Prompts** moves from *not synced yet* to a count of cached prompts.

![Resources refreshed with prompt and library counts](/img/vs-code-extension/28.png)

## 4. Run a command from the agent

The cached resources are immediately visible to your installed coding agent (e.g. Claude Code or Codex). Use the agent's command palette to invoke them.

![Coding agent picks up the refreshed resources](/img/vs-code-extension/29.png)

This step is optional in normal use: resources stay current automatically.
