---
tags: [chromasql]
authors: [dc]
date: 2025-11-10
---

# ChromaSQL Early Preview

Excited to share an early preview of ChromaSQL, a new SQL-like language that helps ABAP developers access SAP’s tribal knowledge in a few seconds instead of wading through SE11/SE84 and stacks of notes. 🎉

<!-- truncate -->

Say a business user asks you to tighten credit limit checks at order entry. Instead of manually digging through your SAP system chasing BAdIs, tables, and all the related artifacts one by one, you just type what you’re after: “credit limit check enhancement.”

```chromasql
SELECT id, distance, metadata.object_type
FROM sap_artifacts
USING EMBEDDING (TEXT 'credit limit check enhancement')
TOPK 5;
```

That one query runs a vector search across your SAP knowledge base and hands back the top five hits with similarity scores. You learn about:

- BAdI implementations like ZSD_CREDIT_CHECK,
- Tables (VBAK, KNKK) you need to regression test,
- CDS views with related logic,
- Even past transports you might have forgotten.

Now you can decide:

- which enhancements to review,
- what downstream integrations (credit exposure reports, for example) could break, and
- exactly what to drop into your change spec or automated checks.

Result: Less time wasted digging through SE11/SE84, fewer missed dependencies, and a clearer rollout plan for every change request.

We’re putting the final polish on the release right now.
