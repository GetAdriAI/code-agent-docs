---
sidebar_position: 4
---

# Fit-to-standard

"Fit-to-standard" is arguably the most frustrating part of any S/4HANA migration.

It's tedious research work. It requires deep knowledge of both systems. And it's the foundation for everything else: custom code decisions, process changes, testing scope.

The real question isn't just "what code do we move?"

It's: "What's the equivalent of what we do in ECC today... in S/4HANA?"

- Does S/4HANA support partial goods receipt the way we configured it?
- What's the equivalent of each field in X table in S/4HANA?
- Can we do this natively, or do we need custom dev?

## How to run it in SAP Research Agent?

You can search across two SAP systems in a single chat. That's 45+ million ABAP objects at your fingertips.

This can be accomplished in two ways:

### 1. Slash Commands

Use the `/migrate` command to instantly configure your session for migration research. This command:

- Loads pre-built prompt templates optimized for migration use cases
- Auto-selects both ECC 6.0 and S/4HANA 2023 connected SAP systems
- Enables instant search across 45M+ SAP standard objects

Simply type `/migrate` followed by your question to get started.

Learn more about [Slash Commands](../capabilities/slash-commands.md).

### 2. Manual System Selection

Alternatively, you can manually select multiple connected SAP systems to include in your session:

1. Open the system selector in SAP Research Agent
2. Select both **ECC 6.0 EHP 7** (~18M+ objects in demo sandbox) and **S/4HANA 2023** (~27M+ objects in demo sandbox)
3. Run your queries across both systems simultaneously

This approach gives you flexibility to choose specific connected SAP systems based on your migration scenario.

Learn more about [Selecting Multiple Connected SAP Systems](../capabilities/multi-collection.md).

## Example Queries

Once configured, you can ask questions like:

- "What is the S/4HANA equivalent of table VBAK?"
- "Compare the fields in MARA between ECC and S/4HANA"
- "Is BAPI_SALESORDER_CREATEFROMDAT2 deprecated in S/4HANA? What's the replacement?"
- "How do I configure partial goods receipt in S/4HANA?"

SAP Research Agent will search both systems and provide comparative analysis to guide your fit-to-standard decisions.
