import {ADRI_URLS} from '@site/src/constants/urls';

# Select Multiple Connected SAP Systems

Multiple SAP systems can be connected with Adri, irrespective of version — ECC, S/4HANA, or any other SAP system. A separate knowledge graph is created for each connected system, and SAP Research Agent allows you to query multiple knowledge graphs in a single session for cross-system research and comparison.

## Demo Sandbox

The following connected SAP systems are available in the demo sandbox:

| Connected SAP System | Objects in Knowledge Graph |
| :------------------- | :------------------------- |
| ECC 6.0 EHP 7 | ~18M+ standard & custom objects |
| S/4HANA 2023  | ~27M+ standard & custom objects |

These figures demonstrate large-scale knowledge creation and retrieval, and represent the minimum ballpark for the number of objects typically included in a knowledge graph.

## Use Cases

Querying multiple connected SAP systems is particularly useful for:

- **Migration Analysis**: Compare objects between ECC and S/4HANA to identify deprecated, renamed, or new objects
- **Cross-System Validation**: Verify that standard objects or configurations exist across systems
- **Compatibility Checks**: Find equivalent functionality across different SAP versions

## How to Select Connected SAP Systems

1. Open the system selector in SAP Research Agent
2. Check the connected SAP systems you want to include in your session
3. Your queries will now search across all selected systems

:::tip
For migration scenarios, use the `/migrate` slash command which auto-selects both ECC 6.0 and S/4HANA 2023 systems. Learn more in [Slash Commands](slash-commands.md).
:::

## Enterprise Connections

If you are on Adri AI's Enterprise Plan, you can connect multiple SAP systems to Adri — regardless of version or system type. A knowledge graph is created for each connected system, enabling system-aware recommendations validated against your specific:

- Installed components
- Custom objects
- Active configurations
- Enhancement implementations

:::info
Check out the <a href={ADRI_URLS.research}>free and open version</a> to explore the demo sandbox.
:::
