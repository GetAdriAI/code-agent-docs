---
title: FAQs & Troubleshooting
sidebar_position: 6
description: Quick answers for AI provider setup, keys, model lists, and error states.
---

## Provider FAQs & troubleshooting

### I saved an API key but can't see it anymore. Is it lost?

No — this is by design. Keys are stored encrypted and **write-only**: after saving, the key is never displayed again, not even to you. Adri only shows whether a key is **Configured** or **Not set**. To rotate it, paste a new key over the old one and click **Save key**.

### Test connection failed

Check these in order:

1. **Is the key correct?** Paste it again (a stray space or truncated paste is the most common cause) and click **Save key**, then test again.
2. **Is the key active?** Open your provider's console and confirm the key is not revoked, expired, or out of credit.
3. Fix, save, and click **Test connection** again. Expect **OK — N model(s)**.

### The model picker says "No providers configured"

Your project has no enabled providers. Either none was added yet — follow [Add a provider](./add-a-provider.md) — or they are all switched **off** on the Providers settings page.

### A provider doesn't appear in the picker

- Check its switch on the Providers settings page: it must read **enabled**.
- The picker lists providers per **project** — make sure you added the provider to the same project as the conversation.

### A provider shows "No models available"

The model list comes from a built-in catalog plus live discovery against your endpoint. If it is empty:

- Add and test the **API key** first — discovery needs a working connection.
- Re-run **Test connection**: **OK — 0 model(s)** means the endpoint answered but offered no models.

### A model shows "(unavailable)"

The conversation was pinned to a provider that has since been **removed**. Nothing is lost — open the model picker and pick a new model, or **Adri AI** for the project default. In VS Code the picker opens automatically when this happens.

### Who can add or change providers?

Any member of the project can manage its providers from **Settings → Project Settings → Providers**. Providers are shared project-wide.

### Does switching models change my conversation history?

No. A switch takes effect on the conversation's **next message**. Existing messages are never re-generated or rewritten.

### What does the "Adri AI" entry actually run?

**Adri AI** means "inherit the project default": the project's default provider (the one with the **default** badge) and its default model. If your project has no providers, it is the Adri-managed model — this is how every project starts.

### Who pays for the tokens?

Conversations on your provider call the model **with your API key**, so usage is billed to your provider account (Anthropic, OpenAI, …). Conversations on **Adri AI** without a default provider configured run on Adri-managed capacity.

### Still stuck?

Contact us — [pick the channel that fits your need](../contact.md).
