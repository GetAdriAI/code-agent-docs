---
tags: [genai]
authors: [dc]
date: 2025-11-26
---

# How does Claude's newest model perform in SAP ABAP development?

Claude Opus 4.5 was released yesterday and is claimed to be "the best model in the world for coding," so I was curious how it performs in ABAP development.

So I asked both Opus 4.5 (the newest model) and Sonnet 4.5 (the previous model by Anthropic) to create an ALV report for sales order analysis using traditional ABAP. See the complete prompt in the attached document.

My first impressions:

<!-- truncate -->

1. Table selection: Both models hallucinated incorrect tables on their first attempt. Opus 4.5 self-corrected after one prompt; Sonnet 4.5 needed two.

2. Syntax errors: Both models produced syntax errors initially. Opus 4.5 fixed them after one prompt; Sonnet 4.5 took five attempts.

3. Scope discipline: Opus 4.5 produced only what was requested. Sonnet 4.5 added unrequested features and documentation, increasing output length and review time.

Overall:

-> Opus 4.5 reached an error-free solution in 3 iterations; Sonnet 4.5 took 7.
-> Opus 4.5's leaner output made its first attempt ~50% faster to generate.

This was a simple, quick test. I'm planning to try more complex scenarios next. Stay tuned.
