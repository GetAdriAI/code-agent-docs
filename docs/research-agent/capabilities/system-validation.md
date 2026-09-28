---
sidebar_position: 6
---

# System Validation

SAP Research Agent validates its recommendations against your connected SAP systems by querying the knowledge graph. Multiple SAP systems can be connected with Adri, irrespective of version (ECC, S/4HANA, etc.).

## How It Works

The agent writes ChromaSQL queries—a SQL-inspired domain-specific language created by Adri AI—to search the vector database containing your systems' objects. This ensures that suggested tables, function modules, transactions, and other objects actually exist in your environment.

## What Gets Validated

The agent validates against all SAP object types in the knowledge graph, including data dictionary objects, ABAP repository objects, classes, enhancements, and more. See [Available SAP Standard Objects](objects.md) for the complete list.

In our demo sandbox, the knowledge graph contains:

| System | Objects in Knowledge Graph |
|--------|---------------------------|
| ECC 6.0 EHP 7 | ~18M+ standard & custom objects |
| S/4HANA 2023 | ~27M+ standard & custom objects |

These numbers demonstrate large-scale knowledge creation and retrieval, and represent the minimum ballpark for the number of objects typically included in a knowledge graph.

## Why It Matters

Without system validation, AI recommendations often reference:
- Objects from different SAP versions
- Components not installed in your system
- Deprecated or renamed objects

System validation eliminates these false positives by confirming object availability before including them in recommendations.

## Related

- [Search the Knowledge Graph Directly](../use-cases/chromasql-search) - Query the knowledge graph yourself using ChromaSQL
- [Available SAP Standard Objects](objects.md) - List of object types in the knowledge graph