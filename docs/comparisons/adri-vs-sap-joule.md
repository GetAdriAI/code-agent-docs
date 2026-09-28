---
sidebar_position: 1
title: Adri AI vs SAP Joule
description: A detailed comparison of Adri AI and SAP Joule for SAP development and analysis workflows.
---

## TL;DR

| **Area**                               | **Adri Agents (What You Get)**                                                                                                                                                                                                                                                                                                    | **SAP Joule (Difference)**                                                                                                                                                                          |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **System-Specific Intelligence**       | Adri creates a **knowledge graph of your SAP system**, enabling precise, configuration-aware specs tailored to your custom code and environment. From day one, it ships with a system-specific knowledge graph—for example, a system with ~20K custom objects can generate ~20M records capturing objects and their dependencies. | Joule delivers the same generic experience to all customers and does not build a system-specific knowledge graph, so it lacks deep awareness of your configurations, custom code, and dependencies. |
| **Context Retrieval & Collaboration**  | Adri Agents work as a **connected system**, where agents that read configurations, generate specs, and write code share context seamlessly—reducing errors and speeding execution.                                                                                                                                                | Joule agents operate more independently (in silos), requiring manual coordination and increasing the risk of context loss between steps.                                                            |
| **Control (Development Capabilities)** | Adri Code Agent offers full Eclipse ADT-level control, including debugging, breakpoints, and real-time runtime log access.                                                                                                                                                                                                        | Joule does not provide extensive ADT API coverage and cannot perform many advanced development tasks like real-time debugging or deep log interaction.                                              |
| **Process Management**                 | Adri includes **end-to-end process management**, where all agent activities are automatically tied to process documentation and change workflows—keeping everything continuously updated.                                                                                                                                         | Joule relies on separate tools and workflows, so process documentation is not automatically updated and requires manual effort to maintain.                                                         |
| **Deployment**                         | Adri Agents run in the customer’s cloud, ensuring enterprise-grade control, compliance, and data ownership.                                                                                                                                                                                                                       | Joule deployment is tied to SAP’s ecosystem and does not offer the same level of flexible, customer-controlled cloud deployment.                                                                    |


## Detailed Breakdown

The differences come down to five areas.

### System-Specific Intelligence

The most fundamental difference is how each tool understands your SAP system.

Adri builds a **system-specific knowledge graph** from day one. It maps your configurations, custom code, and object dependencies into a searchable structure. To put the scale in perspective—a system with around 20,000 custom objects typically produces a knowledge graph of roughly 20 million records capturing objects and their relationships.

Joule provides the same generic experience to every customer. It does not build a system-specific knowledge graph, so it lacks deep awareness of your configurations, custom code, and dependencies.

![Adri Research Agent showing the knowledge graph selector with connected SAP systems including S/4 HANA 2023 and ECC 6.0 EHP 7](/img/research-agent-knowledge-graph.png)
*Adri Research Agent with system-specific knowledge graphs for each connected SAP system*

### Context Retrieval and Collaboration

That system-specific foundation carries into how agents collaborate.

Adri Agents operate as a **connected system**. The agent that reads configurations, the one that generates functional specs, and the one that writes code all share context seamlessly. This removes manual handoffs, reduces errors, and speeds up execution.

Joule agents operate more independently. Context must be manually bridged between steps, increasing the risk of information loss.

![Adri Code Agent interface showing built-in developer workflows and multiple SAP system connections](/img/code-agent-developer-workflows.png)
*Adri Code Agent with pre-built developer workflows and simultaneous connections to multiple SAP systems*

![Adri Process Manager showing IMG Activities with 84,192 configuration rows extracted from a connected SAP system](/img/process-manager-img-activities.png)
*Adri Process Manager autonomously reading IMG configuration activities from a connected SAP system*

### Development Capabilities

From a developer perspective, Adri Code Agent provides full **Eclipse ADT-level control**—debugging, breakpoints, and real-time runtime log access. It interacts with the system the way a developer would, not just generating code but actively working within the development environment.

Joule does not yet offer that depth of ADT integration. It cannot perform many advanced development tasks like real-time debugging or deep log interaction.

![Adri Code Agent showing the New ABAP Repository Object dialog with full object type coverage and multiple SAP system connections](/img/code-agent-abap-objects-multi-system.png)
*Adri Code Agent with full ABAP object type coverage for feature parity with Eclipse ADT, connected to multiple SAP systems simultaneously*

### Process Management

Adri includes **end-to-end process management** out of the box. Workflows, change requests, and process documentation stay automatically in sync with agent activities—no manual effort required to keep documentation current.

Joule relies on separate SAP tools for development, documentation, and change management. There is no unified process layer connecting them, so documentation must be maintained manually.

![Adri Process Manager showing business processes mapped to T-codes, configurations, and change requests](/img/process-manager-processes.png)
*Adri Process Manager automatically mapping business processes to their T-codes, configurations, and code portfolio*

### Deployment

Adri Agents run in the customer’s cloud, giving enterprises full control over data, security, and compliance.

Joule deployment is tied to SAP’s cloud ecosystem and does not offer the same level of customer-controlled infrastructure.

## Summary

Joule provides a capable but generic AI layer across SAP applications. Adri provides a system-specific, deeply integrated AI platform that understands your SAP landscape, connects every step of the workflow, and keeps everything continuously in sync.