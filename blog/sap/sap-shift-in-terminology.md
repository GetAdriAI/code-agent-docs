---
title: "SAP's Shift in Terminology: From Custom Development to Extensibility"
description: "A practical mapping of ECC-era SAP terminology to S/4HANA Clean Core terminology."
tags: [sap]
authors: [ss]
date: 2026-07-04
---

SAP terminology has shifted meaningfully from ECC to S/4HANA.

In ECC, most consultants spoke in terms of configuration, custom development, enhancements, and modifications. In S/4HANA, especially under Clean Core, SAP uses a different organizing idea: extensibility.

<!-- truncate -->

This is not just a vocabulary change. It reflects a change in SAP's philosophy: keep the core stable, upgrade-safe, and extended through supported mechanisms.

## SAP ECC Terminology (SAP ERP / ECC 6.0)

This is the terminology most SAP consultants use.

| Term | Definition |
| :--- | :--- |
| **Configuration (Customizing)** | Adapting SAP standard behavior by maintaining configuration data (IMG/SPRO) without writing code or changing SAP standard objects. |
| **Custom Development** | Customer-developed ABAP repository objects that implement business requirements not covered by standard SAP functionality. |
| **Enhancement** | Adding customer-specific behavior at SAP-defined enhancement points without modifying SAP standard objects. Examples include BAdIs, customer exits, user exits, Business Transaction Events (BTEs), and enhancement spots. |
| **Modification** | Directly changing SAP-delivered repository objects such as programs, classes, function modules, or dictionary objects. |

## ECC Relationship

```text
Customer-specific adaptation
|
+-- Configuration (Customizing)
|
+-- Custom Development
|   +-- Z programs
|   +-- Z reports
|   +-- Z classes
|   +-- Z tables
|   +-- Interfaces
|   +-- Forms
|   +-- Enhancements
|       +-- BAdIs
|       +-- Customer Exits
|       +-- User Exits
|       +-- BTEs
|
+-- Modification
```

## SAP S/4HANA Clean Core Terminology

SAP deliberately changed the vocabulary to emphasize upgrade-safe extensions.

Notice that **Custom Development** disappears as the primary organizing concept. SAP instead talks about **Extensibility**.

| Term | Definition |
| :--- | :--- |
| **Configuration** | Adapting SAP standard functionality through business configuration without changing SAP source code. |
| **Key User Extensibility** | Business-user extensions created using in-app tools, such as custom fields, UI adaptations, custom business logic, and forms. |
| **Developer Extensibility** | Extensions implemented by developers using released APIs, extension points, and ABAP Cloud. |
| **Side-by-Side Extensibility** | Extensions implemented outside the SAP S/4HANA system, typically on SAP Business Technology Platform, using APIs and events. |
| **Modification** | Direct changes to SAP-delivered objects. Strongly discouraged under the Clean Core strategy. |

## S/4HANA Relationship

```text
Customer-specific adaptation
|
+-- Configuration
|
+-- Extensibility
|   +-- Key User Extensibility
|   +-- Developer Extensibility
|   +-- Side-by-Side Extensibility
|
+-- Modification
```

## Mapping Between ECC and S/4HANA

| ECC terminology | S/4HANA terminology | Relationship |
| :--- | :--- | :--- |
| Configuration (Customizing) | Configuration | Equivalent |
| Custom Development | Developer Extensibility | Similar intent, but Developer Extensibility is narrower because it requires SAP-supported extension mechanisms and released APIs. |
| Enhancements | Developer Extensibility | BAdIs and other supported enhancement implementations fit naturally here. |
| Z Programs | Developer Extensibility, only if compliant with ABAP Cloud and released APIs. Otherwise, legacy custom development. | Not a one-to-one mapping. |
| Customer Exits | Developer Extensibility (legacy) | Many remain supported for compatibility but are legacy techniques. |
| Modifications | Modifications | Equivalent |

## The Biggest Conceptual Shift

The change is not just terminology. It reflects a change in SAP's philosophy:

- ECC asks: "How do I customize SAP?"
- S/4HANA asks: "How do I extend SAP while keeping a clean core?"

That is why "custom development" is no longer the umbrella term in SAP's modern documentation. The umbrella term is **Extensibility**, with **Key User Extensibility**, **Developer Extensibility**, and **Side-by-Side Extensibility** as its primary categories.

## SAP References

### Core Extensibility Documentation

- [SAP Help Portal: Developer Extensibility (SAP S/4HANA Cloud Public Edition)](https://help.sap.com/docs/SAP_S4HANA_CLOUD/32da8359c8ee4e8b8e8c5e15cacba5aa/c9cf3615cc5f4f71ae29c39d08848a96.html)
- [SAP Help Portal: Understanding Available Technology](https://help.sap.com/docs/btp/btp-developers-guide/understanding-available-technology)
- [SAP Help Portal: Enabling Standard Behavior Extensions](https://help.sap.com/docs/abap-cloud/abap-rap/enabling-standard-behavior-extensions)
- [SAP Help Portal: About Namespaces](https://help.sap.com/docs/SAP_S4HANA_CLOUD/6aa39f1ac05441e5a23f484f31e477e7/5a0693aa21b9428d846db3a284262802.html)

### Clean Core

- [SAP Help Portal: Extensibility (SAP Cloud ALM)](https://help.sap.com/docs/cloud-alm/applicationhelp/extensibility)
- [SAP Help Portal: Clean Core](https://help.sap.com/docs/build-process-automation/sap-build-process-automation/clean-core)

### Key User Extensibility

- [SAP Help Portal: ATC Checks for Key User Extensibility Objects](https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/4753b6c425214774be2699827b7b5cd8.html)

### ABAP Cloud and Classic ABAP

- [SAP Help Portal: ABAP Resource Center](https://help.sap.com/docs/abap-cross-product/abap-resource-overview/abap-content-overview)

The ABAP Resource Center includes whitepapers and videos such as:

1. Extend SAP S/4HANA in the cloud and on premise with ABAP-based extensions
2. Classic ABAP to ABAP Cloud
3. ABAP Cloud for Classic ABAP Developers

These are some of the most useful SAP references for understanding the transition from the ECC-era terminology "Custom Development" to the S/4HANA Clean Core terminology "Developer Extensibility", "Key User Extensibility", and "Side-by-Side Extensibility".

### SAP Learning and SAP Community

- [SAP Learning](https://learning.sap.com/)
- [SAP Community](https://community.sap.com/)
