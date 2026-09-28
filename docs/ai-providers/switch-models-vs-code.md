---
title: Switch Models in VS Code
sidebar_position: 5
description: Use the model picker in the Adri AI Foundry VS Code extension chat.
---

## Pick a model for a conversation (VS Code)

The same per-conversation model picker is built into the chat of the **Adri AI Foundry** VS Code extension.

> In every screenshot, the red box shows exactly where to focus.

:::note
Providers can only be **added and managed in the web app** (Settings → Project Settings → Providers). The extension lists your project's providers and lets you switch — see [Add a provider](./add-a-provider.md) if the list is empty.
:::

### 1. Find the model picker

Open the Adri chat in VS Code. In the composer's control row there is a small pill with a CPU icon. By default it reads **Adri AI**.

![The Adri AI model pill in the VS Code chat composer](/img/ai-providers/model-picker-vscode/adri-ai-model-pill-vscode.jpg)

### 2. Open the picker

Click the pill. The menu header tells you the scope:

- **Model for this conversation** — an open conversation; picking applies immediately.
- **Model for this new chat** — a brand-new chat; your pick is applied as soon as you send the first message.

The list shows **Adri AI** (the project default) first, then one row per provider. The project's default provider is tagged **Default**.

![Level 1 of the picker: Adri AI plus the provider list](/img/ai-providers/model-picker-vscode/model-picker-providers-vscode.jpg)

:::note
If the menu says *"No providers yet. Add them in the web app."*, follow [Add a provider](./add-a-provider.md) in the web app first — the extension picks it up automatically.
:::

### 3. Drill into a provider and pick a model

1. Click a provider row. The menu switches to that provider's model list (click the provider name at the top to go back).
2. Click the model you want. A check mark confirms the selection.

![Level 2 of the picker: the provider's model list](/img/ai-providers/model-picker-vscode/provider-model-list-vscode.jpg)

The pill now shows the model's name.

![The pill showing the picked model](/img/ai-providers/model-picker-vscode/picked-model-pill-vscode.jpg)

### 4. What the switch means

Identical to the web app:

- Applies to **this conversation only**, from the **next message** on.
- History is never rewritten.
- Picking **Adri AI** returns the conversation to the project default.

## If the picker opens by itself

When a message fails because the conversation's provider was removed, the extension opens the picker automatically so you can re-pick. The removed provider is gone from the list — choose a new model (or **Adri AI**) and resend.

![The picker after a provider was removed — it no longer appears in the list](/img/ai-providers/model-picker-vscode/provider-removed-picker-vscode.jpg)

## Next steps

- [Manage providers](./manage-providers.md)
- [FAQs & troubleshooting](./provider-faqs.md)
