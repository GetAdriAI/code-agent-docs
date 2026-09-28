---
sidebar_position: 1
---

# Find SAP Objects

Use SAP Research Agent to locate relevant objects from your ERP system using natural language. Search across programs, function modules, tables, data elements, and more with results filtered to your system's active components.

## How It Works

1. Describe what you're looking for in plain language
2. The agent interprets your request and searches the knowledge graph of your SAP system
3. Results are validated against your system's installed components
4. The agent provides context on how the objects relate to your requirement

## Example Prompts

- "Find tables related to vendor consignment stock"
- "What function modules handle sales order pricing?"
- "Show me BAdIs for modifying purchase order output"
- "Which programs process inbound IDocs for material master?"

## What You'll Receive

- Relevant object names with descriptions
- Object relationships (e.g., tables and their key fields, function modules and their parameters)
- Usage context and recommendations
- Links to related objects you might also need

## Agent Search vs. ChromaSQL

| Approach                          | Best For                                                             |
| --------------------------------- | -------------------------------------------------------------------- |
| **Agent Search** (this page)      | Exploratory searches, understanding context, getting recommendations |
| **[ChromaSQL](chromasql-search)** | Precise queries, bulk searches, filtering by specific metadata       |

Use the agent when you're unsure what you're looking for. Use ChromaSQL when you know exactly what filters and patterns to apply.
