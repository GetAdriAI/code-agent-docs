---
sidebar_position: 3
---

# Available SAP Standard Objects

When a company connects its SAP systems with Adri — any number of systems, irrespective of version (ECC, S/4HANA, etc.) — a knowledge graph is created for each, containing all the technical objects in that system. For example, the names of custom tables, the definition of the fields in them, and their dependencies. Each knowledge graph contains millions of standard and custom SAP objects and is used for [system validation](system-validation.md). Objects can be searched using the [Research Agent](../use-cases/find-sap-objects.md) or [ChromaSQL](../use-cases/chromasql-search.mdx) directly.

We also provide access to a demo sandbox connected to our ECC and S/4HANA systems. In this sandbox, the knowledge graph consists of ~18M+ standard & custom objects for ECC and ~27M+ standard & custom objects for S/4HANA — demonstrating the large-scale knowledge creation and retrieval at work, and giving a ballpark for the minimum number of objects typically included in a knowledge graph. This demo sandbox is available so that users can learn about the capabilities of Adri agents and test them.

## Object Types

The objects in the knowledge graph are organized into the following categories:

| Object Type                | Objects                                                                                                      |
| :------------------------- | :----------------------------------------------------------------------------------------------------------- |
| Data Dictionary Objects    | <ul><li>Domain</li><li>DataElement</li><li>Table</li><li>TableType</li><li>View</li><li>SearchHelp</li></ul> |
| ABAP Repository Objects    | <ul><li>Program</li><li>Function</li><li>TCode</li><li>Package</li><li>Screen</li><li>Variant</li></ul>      |
| Object-Oriented Components | <ul><li>ClassSignature</li><li>MethodSignature</li><li>ParameterSignature</li></ul>                          |
| Modification/Enhancement   | <ul><li>Enhancement</li><li>Modification</li></ul>                                                           |
| Metadata/Other             | <ul><li>Doc</li><li>MenuPath</li><li>Field</li><li>ViewField</li></ul>                                       |

Refer the following pages for further details.

- [Object definitions and examples](../../glossary/model_name.md)
- [SAP Object Relationships](../../glossary/sap_object_relationships.md)
