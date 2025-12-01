---
sidebar_position: 1
---

# Introduction

AI agent for pre-implementation research that suggests solutions after verifying against your unique system configuration.

This means:

- **Accurate configuration assessments**: Configuration checks reflect your installed components and active settings.
- **Contextual specs creation**: Generated documentation references your custom objects, existing enhancements, and naming conventions.
- **Relevant results**: Searches return objects that exist in your system, not theoretical possibilities.

:::tip
Check out the [free and open version](https://research.getadri.ai) where the results are validated against the 18 million standard objects in ECC 6.0 EHP 7.
:::

## Connected systems

If you are on Adri AI's Enterprise Plan, you can connect SAP Research Agent to your SAP environment to enable system-aware recommendations.

You can also check out the [free and open version](https://research.getadri.ai) where the results are validated against the 18 million standard objects in ECC 6.0 EHP 7. Support for S/4 HANA 2023 is coming soon.

### Installed Components

You can view the installed components in the attached ERP system.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/installed.png" alt="Installed Components in ECC 6.0 EHP 7 system" />
  <figcaption>Installed Components in ECC 6.0 EHP 7 system</figcaption>
</figure>

You may search the components in the attached system using the SAP Research Agent or by writing SQL-like queries (using ChromaSQL). More on ChromaSQL [here](search-index.mdx).

## Key Use Cases

### 1. Check Configuration Options

Find standard SAP capabilities that will satisfy your requirement, thus avoiding unnecessary custom code development

```bash title="Sample prompt from a question asked in SAP Community"
I want to implement the requirement shared below in the SAP ECC 6.0 EHP 7 system. Does the implementation require the creation of custom objects?

- My goal is to minimize custom development as much as possible by using standard objects, wherever possible.
- Do not use the objects in the $TMP package

## Requirement

`Update Positive Pay File with BofA to include Vendor name to prevent check fraud`
```

### 2. Write Functional and Technical Specification Documents

Create comprehensive functional and technical specifications for configuration changes and custom code.

```bash title="Sample prompt"
Create a functional specification for my Change Request. Fill in the template shared below as applicable. If a heading or subheading is not relevant for this Change Request, drop it from your output.

Do not include requirement IDs, codes, or reference numbers.

## Change Request

SAP-to-JPMorgan Chase Payment Automation

The current SAP payment process to JPMorgan Chase requires extensive manual intervention including

- manual execution of F110 payment runs,
- physical printing and signing of payment approval documents,
- manual generation and transmission of payment files via Z-code,
- manual download and processing of bank statements and receipts, and
- manual reconciliation of payment statuses in SAP.

This results in:

- processing delays of several hours to days per payment batch,
- high error rates in manual file generation and data entry,
- limited visibility into real-time payment status,
- compliance risks due to incomplete audit trails, and
- significant resource inefficiency with the Finance team spending 15-20 hours per week on repetitive manual tasks that could be automated.

## Template

1. Executive Summary
   1.1 Business Context
   1.2 Objectives
   1.3 Scope

2. Current State Analysis
   2.1 As-Is Process Flow
   2.2 Pain Points & Quantified Impacts
   2.3 Current System Landscape [if complex integrations]

3. Future State Solution
   3.1 Solution Overview
   3.2 To-Be Process Flow
   3.3 Key Changes Summary

4. Functional Requirements
   4.1 Process Requirements (by business process)
   4.2 Data Requirements (Master Data, Transaction Data, Configuration)
   4.3 Business Rules & Validation Logic

5. Integration & Interface Requirements
   5.1 Integration Architecture
   5.2 Interface Specifications (per system)
   5.3 Data Mapping

6. User Experience Requirements
   6.1 User Interfaces (Screens/Forms/Dashboards)
   6.2 Reports & Analytics
   6.3 Workflow & Approvals

7. Non-Functional Requirements
   7.1 Performance & Scalability
   7.2 Security & Access Control
   7.3 Compliance & Audit
   7.4 Usability & Accessibility

```

### 3. Find SAP Objects

Instantly locate relevant objects from your ERP system. Search across programs, function modules, tables, data elements, and more with results filtered to your system's active components.

```bash title="Sample prompt from a question asked in SAP Community"
I created an internal IHC bank statement using transaction F9N7 (Single Run).

When I attempted to post this statement using transaction FEBP, the posting did not execute. FEBP is the transaction we normally use to post internal IHC bank statements created via F9N1 (Mass Run).

Which transaction should I use to post bank statements created with F9N7 (Single Run)?
```

## How does SAP Research Agent work?

When you ask Adri AI's Research Agent to perform any kind of research, you'll notice that it does one or all of the following activities:

- Searching data in the attached system (say, ECC 6.0 EHP 7)
- Searching web

In order to search data in the attached system, the agent writes SQL-like queries. To be specific, these queries are written in ChromaSQL, a SQL-inspired domain specific language to query ChromaDB vector database. ChromaSQL has been created by the team at Adri AI.

You may search the components in the attached system by creating or writing your own ChromaSQL queries. Learn more [here](search-index.mdx).
