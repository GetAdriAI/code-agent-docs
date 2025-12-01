---
sidebar_position: 1
---

# LLM v. Agent

As ABAP developers, we're hearing a lot about AI these days. Let me break down two key concepts:

An LLM (Large Language Model) is like a really smart function module that only returns text. You pass it a prompt, it processes the input, and gives you back a response. That's it. Think of it as FM_GENERATE_TEXT – stateless, predictable, one-way.

An Agent is like giving that LLM a whole ABAP program with authorization to call BAPIs, read tables, and execute transactions.

It can:
→ Plan multi-step tasks
→ Use tools (APIs, databases, calculators)
→ Make decisions based on results
→ Iterate until the job is done

For example,

- GPT-5 is the LLM – the base model that generates text.
- ChatGPT (the product you interact with) is the agent – it uses GPT-5 but adds tools like web search, code execution, and file handling.

If you ask an LLM "What's in SAP table MARA?", it'll give you a general description based on its training.

If you ask an Agent the same question, it could actually connect to your system, query the table, analyze the data, and show you the actual records and data from your MARA table.
