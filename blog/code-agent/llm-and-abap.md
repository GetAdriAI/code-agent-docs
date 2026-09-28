---
tags: [code-agent]
authors: [dc, ss]
date: 2025-12-30
---

# LLMs Don't Hallucinate ABAP. They Overgeneralize It.

We spent months studying the patterns in mistakes LLMs make while writing ABAP code. While many teams frame the risks in terms of "hallucination", we've learned that hallucination is **not** the core issue in ABAP.

The real problems stem from **how LLMs generalize programming patterns** and how **ABAP fundamentally differs from mainstream programming languages**.

<figure>
  <img src="/img/how-llms-fail-in-abap.png" alt="How LLMs fail in ABAP" />
  <figcaption style={{textAlign: "center", fontStyle: "italic"}}>How LLMs fail in ABAP</figcaption>
</figure>

This blog breaks down:

<!-- truncate -->

- the structural mismatches between ABAP and the broader coding corpus models are trained on
- the systematic mistakes that appear again and again
- why these are _not bugs_, but consequences of model training behavior
- what ABAP teams should do in practice

## The Core Thesis

LLMs don't primarily fail in ABAP because they hallucinate. They fail because they default to mainstream programming patterns.

When an LLM generates code, it produces what it's seen most often in training. That's overwhelmingly Python, JavaScript, Java, and standard SQL. So when asked to write ABAP, the model reaches for familiar patterns:

- dynamic string handling instead of fixed-length CHAR types
- T-SQL or ANSI SQL syntax instead of OpenSQL
- invented function names that follow common naming conventions

The problem isn't that LLMs lack ABAP training data. It's that they've seen far more of everything else.

When patterns conflict, the majority wins and that is why these are not random errors. They're the most probable outputs given what the model has seen, and they just happen to be wrong for ABAP.

## The Three Failure Patterns

### 1. Type System Misunderstanding

ABAP enforces strong, static typing with meaningful distinctions between:

- `CHAR` (fixed length)
- `STRING` (variable length)
- domain-bound DDIC types (e.g., `KUNNR`, `MATNR`)

But LLMs routinely assume behavior from dynamic string languages, leading to:

- implicit conversions that don't exist
- padding inconsistencies
- boolean improvisations instead of `abap_bool`
- generic `string` usage where DDIC types are required

### 2. OpenSQL ≠ Standard SQL

OpenSQL is database-independent, SAP-portable, and syntactically constrained.

And yet, LLMs frequently output:

- `TOP 10` instead of `UP TO 10 ROWS`
- `ORDER BY total_sales DESC` instead of `DESCENDING`
- ANSI or vendor-style date expressions
- unsupported analytic functions

### 3. Object & Naming Resolution Errors

ABAP behaves like an ecosystem, not just a programming language.

Objects depend on:

- system repositories
- DDIC structures
- landscape-specific namespaces
- custom extensions (`Z*`, `Y*`)

LLMs detect _patterns_ in names and then invent plausible ones.

For example:

- `BAPI_GET_MATERIAL_DETAILS` instead of `BAPI_MATERIAL_GET_DETAIL`
- fabricated interface names
- function modules that "sound right", but don't exist

Unless the model has access to the actual system metadata, it **cannot** reliably resolve object identity.

## Why RAG Alone Isn't Enough

RAG (retrieval-augmented generation) helps. It can ground object names, fetch documentation, and prevent the model from inventing BAPIs that don't exist.

But RAG only fixes context gaps. It doesn't fix training-level biases.

Even with perfect retrieval, the model will still default to the mainstream patterns described above. These are baked into the model's weights, not gaps in its context window. Retrieval can tell the model _what exists_, but it can't override _how the model writes code_.

## What ABAP Teams Should Do

If you want useful AI coding support in ABAP:

- Use system-aware agents connected to SAP runtime metadata. This solves the naming resolution problem by giving the model access to what actually exists.
- Apply domain-specific fine-tuning. This shifts the model's weights toward ABAP patterns instead of mainstream defaults.
- Practice ABAP-type-aware prompting. Explicitly specify CHAR vs STRING, abap_bool, and DDIC types in your prompts.
- Validate with syntax and static analysis tools. Catch type and SQL errors before they reach production.
- Build on retrieval-first architectures. Ground object references in real documentation.

LLMs work best as assistive tools that require grounding, constraints, and verification rather than drop-in code generators.

## Final Thoughts

LLMs are optimized for mainstream programming patterns. ABAP deliberately breaks from those patterns, which is why these failures are systematic, not random.

Understanding that distinction is the first step toward building reliable ABAP-aware AI tooling.
