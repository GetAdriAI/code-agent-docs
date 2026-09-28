---
title: AI Providers Overview
sidebar_position: 1
description: Bring your own LLM provider to Adri — connect Anthropic, OpenAI, Google, Azure, and more, then pick a model per conversation.
---

import {EXTERNAL_URLS} from '@site/src/constants/urls';

## What are AI Providers?

By default, every conversation in Adri runs on **Adri AI** — the Adri-managed model. You do not have to configure anything.

If you want conversations to run on **your own** LLM account instead, add an **AI Provider**. A provider holds the connection to an LLM backend: its type, base URL, encrypted API key, and the models it offers.

Once a provider is added:

- Providers are **shared across the project** — every project member can pick them.
- Each conversation picks a provider and one of its models from the **model picker** in the chat composer.
- The picker is available in the **Adri web app** and in the **Adri AI Foundry VS Code extension**.

## Supported provider types

| Provider type | Status | Where to get an API key |
| --- | --- | --- |
| Anthropic (Claude) | **Available** | <a href={EXTERNAL_URLS.anthropicApiKeys}>Anthropic Console → API keys</a> |
| OpenAI (GPT) | **Available** | <a href={EXTERNAL_URLS.openaiApiKeys}>OpenAI Platform → API keys</a> |
| Google (Gemini) | Coming soon | — |
| Azure OpenAI | Coming soon | — |
| OpenAI-compatible | Coming soon | — |
| AWS Bedrock | Coming soon | — |
| LiteLLM proxy | Coming soon | — |

:::note
Today you can connect **Anthropic (Claude)** and **OpenAI (GPT)**. The remaining types are on the roadmap — this page will be updated as they become available.
:::

## How the default "Adri AI" entry works

The model picker always shows **Adri AI** as the first entry:

- **Adri AI** = "use the project default". The conversation inherits the project's default provider and model. If you never added a provider, this is the Adri-managed model.
- Picking a specific model pins **this conversation** to that provider and model.
- Switching takes effect on the conversation's **next message** — earlier messages are never rewritten.

## Where do the model lists come from?

You never type model names by hand. For each provider, Adri lists the available models automatically from a built-in catalog plus live discovery against your endpoint. Each model appears with a friendly label (for example `Claude Sonnet 4.5`).

## Security

- API keys are stored **encrypted** and are **write-only** — after saving, a key is never shown again, not even to you. Adri only reports whether a key is configured.
- Conversations that use a provider call the model **with your key** — usage is billed to your provider account.

## Set it up

1. [Add a provider](./add-a-provider.md) — connect your LLM account (5 minutes).
2. [Manage providers](./manage-providers.md) — set a default, rotate keys, remove providers.
3. [Switch models in web chat](./switch-models-web.md) — pick a model per conversation.
4. [Switch models in VS Code](./switch-models-vs-code.md) — the same picker inside the extension.
5. [FAQs & troubleshooting](./provider-faqs.md) — quick answers when something looks off.
