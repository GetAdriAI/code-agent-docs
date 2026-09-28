---
title: Add a Provider
sidebar_position: 2
description: Step-by-step guide to connect your own LLM account (Anthropic, OpenAI, Google, Azure, and more) to an Adri project.
---

import {ADRI_URLS, EXTERNAL_URLS} from '@site/src/constants/urls';

## Add a provider to your project

Use this guide to connect your own LLM account to an Adri project. It takes about 5 minutes.

> In every screenshot, the red box shows exactly where to focus.

## Pre-requisites

- Log in to Adri AI: <a href={ADRI_URLS.login}>https://www.getadri.ai/login</a>
- An API key from your LLM provider. Get one here if you don't have it yet:
  - Anthropic: <a href={EXTERNAL_URLS.anthropicApiKeys}>Anthropic Console → API keys</a>
  - OpenAI: <a href={EXTERNAL_URLS.openaiApiKeys}>OpenAI Platform → API keys</a>

:::note
**Anthropic (Claude)** and **OpenAI (GPT)** are available today. Other provider types (Google, Azure OpenAI, and more) are coming soon — see the [overview](./providers-overview.md#supported-provider-types) for the current list.
:::

:::note
Creating the provider and adding its API key are **two separate steps**. You first save the provider, then edit it to add the key. This page walks through both.
:::

### 1. Open the Providers settings page

1. Open your project in the Adri web app.
2. In the left sidebar, scroll to the **Settings** section.
3. Expand **Project Settings**.
4. Click **Providers**.

You land on the **LLM Providers** page. If no provider exists yet, the list shows *"No providers yet. Create one to get started."*

![Open Settings → Project Settings → Providers in the sidebar](/img/ai-providers/add-provider/open-providers-settings-adri-ai.jpg)

### 2. Create the provider

1. Click **New provider** (top right).

![Click New provider](/img/ai-providers/add-provider/new-provider-button-llm-providers.jpg)

2. In the dialog, fill in:
   - **Provider type** — pick `Anthropic (Claude)` or `OpenAI (GPT)`.
   - **Name** — any name you like, e.g. `Production Anthropic`. This is what teammates see in the model picker.
   - **Enabled** — leave the switch on.

   Neither type needs a Base URL — Adri already knows the endpoint.
3. Click **Create provider**.

![Fill in provider type and name, then click Create provider](/img/ai-providers/add-provider/new-provider-dialog-anthropic-openai.jpg)

You should see the toast *Provider "your name" created* and the provider appears in the **Configured providers** list.

### 3. Add the API key

The dialog told you: *"Save the provider first, then edit it to add an API key."* Now that it is saved:

1. In the **Configured providers** list, find your provider.
2. Click **Edit**.

![Click Edit on the provider row](/img/ai-providers/add-provider/edit-provider-button.jpg)

3. Find the **API key** section — the badge reads **Not set** until a key is saved (**Configured** once one exists).
4. Paste your key into the field.
5. Click **Save key**.

![Paste the API key and click Save key](/img/ai-providers/add-provider/save-provider-api-key.jpg)

You should see the toast *"API key saved"* and the badge switches to **Configured**.

:::warning
The key is stored encrypted and **write-only** — it is never shown again, not even to you. If you lose it, just paste a new one over it later. Keep your own copy in a password manager.
:::

### 4. Test the connection

Still in the edit dialog:

1. Find the **Test connection** section.
2. Click **Test connection**.

![Click Test connection](/img/ai-providers/add-provider/test-provider-connection.jpg)

3. Wait a moment. You should see the badge turn to **OK — N model(s)** and a toast like *Connection OK — 12 model(s) available*.

If it shows **Failed**, see [FAQs & troubleshooting](./provider-faqs.md#test-connection-failed).

4. Click **Save changes** to close the dialog.

### 5. Verify the provider is ready

Back in the **Configured providers** list, check your provider's row:

- The type badge shows e.g. **Anthropic (Claude)**.
- The switch shows **enabled**.

![Provider row showing type badge and enabled switch](/img/ai-providers/add-provider/provider-enabled-type-badge.jpg)

That's it. The provider and its models now appear in the model picker of every conversation in this project.

## Next steps

- [Switch models in web chat](./switch-models-web.md)
- [Switch models in VS Code](./switch-models-vs-code.md)
- [Manage providers](./manage-providers.md) — set one as the project default
