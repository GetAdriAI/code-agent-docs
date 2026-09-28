---
tags: [research-agent]
authors: [dc]
date: 2025-12-14
---

# Why Finding Standard SAP Objects Is Difficult?

Consultants struggle to find standard SAP capabilities before developing custom code for several interconnected reasons:

## 1. Sheer Volume and Fragmentation

<!-- truncate -->

SAP systems contain millions of objects (e.g. ~27M+ standard & custom objects in S/4HANA alone). These are scattered across:

- Transaction codes, function modules, BAPIs
- Tables, views, and CDS views
- Business objects and APIs
- Configuration settings and enhancement points

There's no single, searchable knowledge graph that shows "here's what SAP can do out of the box."

## 2. Poor Native Search and Documentation

- **SE37/SE80 are limited**: You need to know _what_ you're looking for. If you don't know a function module exists, you can't search for it effectively
- **SAP Help Portal is generic**: Documentation describes features conceptually but doesn't surface specific technical objects
- **No semantic search**: Traditional keyword searches miss relevant objects if you don't use exact SAP terminology

## 3. Knowledge Gap Between Business Requirements and Technical Objects

When a business user says "we need to auto-calculate freight costs," consultants must translate that to:

- Is there a standard BAPI for this?
- Does pricing configuration handle it?
- Are there relevant BAdIs or user exits?
- What tables store freight data?

This translation requires deep system knowledge that junior/mid-level consultants often lack.

## 4. Time Pressure and Misaligned Incentives

- **Research is unbudgeted risk**: No time is set aside purely for research. Even if a consultant diligently searches for standards for a day and finds nothing, they're a day behind on implementation with nothing to show for it
- **Visible effort bias**: It's harder to prove the effort and complexity of your work when you propose a standard solution. Writing 10,000 lines of custom code is immediately recognizable; finding the right BAPI is not
- **Default to custom**: Many consultants default to "build custom" because it's faster than proving a standard solution exists (or doesn't) and custom code is easier to justify on timesheets

## 5. Version Complexity

ECC 6.0 vs S/4HANA have different capabilities. A consultant might not know:

- CDS views in S/4HANA could replace their custom join logic
- A new RAP business object exists for their use case
- An old BAPI has been deprecated/replaced

## Why SAP Research Agent Matters

SAP Research Agent solves the **discoverability problem**. By creating a knowledge graph of ~18M+ objects for ECC and ~27M+ objects for S/4HANA in our demo sandbox — demonstrating large-scale knowledge creation and retrieval, and giving a ballpark for the minimum number of objects typically included in a knowledge graph — it makes them semantically searchable and essentially asks consultants: "Did you check if SAP already built this?" before they write code.

:::info
Try out SAP Research Agent here: https://research.getadri.ai/
:::
