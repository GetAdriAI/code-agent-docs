# SAP Object Relationships

## Hierarchical Relationships

```
Domain
  └── DataElement (references Domain for technical properties)
        └── Field (uses DataElement for definition)
              └── Table / View (contains Fields)
                    └── ViewField (Field within a View)

Package
  └── All repository objects (grouped for transport)

Program
  ├── Screen (UI layer of program)
  ├── Variant (saved selection screen values)
  └── Doc (documentation)

Function (Function Module)
  └── ParameterSignature (interface definition)

ClassSignature
  └── MethodSignature
        └── ParameterSignature
```

## Cross-Object Relationships

| Object           | Related To               | Relationship                                                  |
| :--------------- | :----------------------- | :------------------------------------------------------------ |
| **TCode**        | Program, Screen          | TCode launches a Program/Screen                               |
| **SearchHelp**   | DataElement, Table       | SearchHelp attached to DataElement; uses Table as data source |
| **View**         | Table                    | View combines/selects from one or more Tables                 |
| **Enhancement**  | Program, Function, Class | Enhancement extends standard objects                          |
| **Modification** | Program, Function        | Direct change to standard code                                |
| **MenuPath**     | TCode                    | Navigation path leads to TCode                                |
| **TableType**    | Table, Structure         | Defines internal table based on line type                     |

---

## Visual Relationship Map

```
┌─────────────────────────────────────────────────────────────────┐
│                         PACKAGE                                  │
│  (contains all objects for transport organization)               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐    references    ┌─────────────┐                  │
│  │  DOMAIN  │ ───────────────► │ DATAELEMENT │                  │
│  └──────────┘                  └──────┬──────┘                  │
│       │                               │                          │
│       │ defines                       │ used by                  │
│       │ data type                     │                          │
│       ▼                               ▼                          │
│  ┌──────────┐                  ┌─────────────┐                  │
│  │  FIELD   │ ◄─────────────── │    TABLE    │                  │
│  └──────────┘    contains      └──────┬──────┘                  │
│                                       │                          │
│                                       │ combined in               │
│                                       ▼                          │
│                                ┌─────────────┐                  │
│                                │    VIEW     │                  │
│                                └──────┬──────┘                  │
│                                       │                          │
│                                       │ contains                 │
│                                       ▼                          │
│                                ┌─────────────┐                  │
│                                │  VIEWFIELD  │                  │
│                                └─────────────┘                  │
│                                                                  │
│  ┌─────────────┐    attached to    ┌─────────────┐              │
│  │ SEARCHHELP  │ ◄──────────────── │ DATAELEMENT │              │
│  └─────────────┘                   └─────────────┘              │
│         │                                                        │
│         │ uses data from                                         │
│         ▼                                                        │
│  ┌─────────────┐                                                │
│  │    TABLE    │                                                │
│  └─────────────┘                                                │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐     launches      ┌─────────────┐                 │
│  │  TCODE   │ ────────────────► │   PROGRAM   │                 │
│  └──────────┘                   └──────┬──────┘                 │
│       ▲                                │                         │
│       │                    ┌───────────┼───────────┐             │
│       │                    │           │           │             │
│  ┌──────────┐              ▼           ▼           ▼             │
│  │ MENUPATH │        ┌────────┐  ┌─────────┐  ┌────────┐        │
│  └──────────┘        │ SCREEN │  │ VARIANT │  │  DOC   │        │
│                      └────────┘  └─────────┘  └────────┘        │
│                                                                  │
│  ┌─────────────┐    calls/uses    ┌─────────────┐               │
│  │   PROGRAM   │ ────────────────►│  FUNCTION   │               │
│  └─────────────┘                  └──────┬──────┘               │
│                                          │                       │
│                                          │ has                   │
│                                          ▼                       │
│                                   ┌─────────────────┐            │
│                                   │ PARAMETERSIG    │            │
│                                   └─────────────────┘            │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────┐                                             │
│  │ CLASSSIGNATURE │                                             │
│  └───────┬────────┘                                             │
│          │ contains                                              │
│          ▼                                                       │
│  ┌────────────────┐                                             │
│  │ METHODSIGNATURE│                                             │
│  └───────┬────────┘                                             │
│          │ has                                                   │
│          ▼                                                       │
│  ┌────────────────┐                                             │
│  │ PARAMETERSIG   │                                             │
│  └────────────────┘                                             │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐     extends      ┌─────────────────────────┐   │
│  │ ENHANCEMENT │ ────────────────►│ PROGRAM / FUNCTION /    │   │
│  └─────────────┘                  │ CLASSSIGNATURE          │   │
│                                   └─────────────────────────┘   │
│                                                                  │
│  ┌─────────────┐     modifies     ┌─────────────────────────┐   │
│  │ MODIFICATION│ ────────────────►│ PROGRAM / FUNCTION      │   │
│  └─────────────┘                  └─────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Summary of Key Relationships

1. **Domain → DataElement → Field → Table** - Core data definition chain
2. **Table → View → ViewField** - Data aggregation layer
3. **DataElement ↔ SearchHelp** - User input assistance
4. **TCode → Program → Screen** - Application execution chain
5. **Program ↔ Variant** - Saved runtime parameters
6. **Function/Method → ParameterSignature** - Interface contracts
7. **Class → Method → Parameter** - OO component hierarchy
8. **Enhancement/Modification → Standard Objects** - Customization layer
9. **Package → All Objects** - Transport and organization container
10. **MenuPath → TCode** - User navigation
