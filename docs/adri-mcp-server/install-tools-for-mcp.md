---
title: Install VS Code and Agent Tools
sidebar_position: 1
description: Beginner setup guide for VS Code, Claude Code, and Codex before MCP setup.
---

import {EXTERNAL_URLS} from '@site/src/constants/urls';
import CodeBlock from '@theme/CodeBlock';

## Start here (one-time setup)

If you are an ABAP developer coming from SE80/SAP GUI, this is your starting point.

Before MCP setup, you need:
- VS Code
- Claude Code CLI (for the Claude Code MCP flow)
- Claude Code VS Code extension
- Codex VS Code extension

## 1. Install VS Code

Use official Microsoft links:

- VS Code download page: <a href={EXTERNAL_URLS.vscodeDownload}>code.visualstudio.com/download</a>
- Setup overview: <a href={EXTERNAL_URLS.vscodeSetupOverview}>VS Code setup overview</a>
- Windows setup: <a href={EXTERNAL_URLS.vscodeSetupWindows}>VS Code on Windows</a>
- macOS setup: <a href={EXTERNAL_URLS.vscodeSetupMac}>VS Code on macOS</a>
- Linux setup: <a href={EXTERNAL_URLS.vscodeSetupLinux}>VS Code on Linux</a>

After install, open VS Code at least once.

## 2. Install Claude Code CLI

Use Anthropic's official quickstart:
- <a href={EXTERNAL_URLS.claudeCodeQuickstart}>Claude Code Quickstart</a>

Install command examples from the official quickstart:

<CodeBlock language="bash">{`# macOS, Linux, WSL
curl -fsSL https://claude.ai/install.sh | bash`}</CodeBlock>

<CodeBlock language="powershell">{`# Windows PowerShell
irm https://claude.ai/install.ps1 | iex`}</CodeBlock>

Then run:

<CodeBlock language="bash">{`claude`}</CodeBlock>

This starts login/authentication.

## 3. Install Claude Code VS Code extension

Use Anthropic's official VS Code guide:
- <a href={EXTERNAL_URLS.claudeCodeVsCodeDocs}>Use Claude Code in VS Code</a>

Official marketplace link:
- <a href={EXTERNAL_URLS.claudeCodeVsCodeMarketplace}>Claude Code extension (VS Code Marketplace)</a>

In VS Code:
1. Open **Extensions**.
2. Search for `Claude Code`.
3. Install the extension from Anthropic.

## 4. Install Codex VS Code extension

Use OpenAI's official IDE docs:
- <a href={EXTERNAL_URLS.codexIdeDocs}>Codex IDE extension docs</a>

Official marketplace link:
- <a href={EXTERNAL_URLS.codexVsCodeMarketplace}>Codex extension (VS Code Marketplace)</a>

In VS Code:
1. Open **Extensions**.
2. Search for `Codex`.
3. Install OpenAI's Codex extension.

## Next: MCP setup flows

After tools are installed, continue here:

1. Claude Code MCP flow: [Setup (Claude Code)](./setup-in-claude-code.md)
2. Codex MCP flow: [Setup (Codex)](./setup-in-codex.md)
