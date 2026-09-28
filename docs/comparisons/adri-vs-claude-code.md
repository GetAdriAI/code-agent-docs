---
sidebar_position: 2
title: Adri AI vs Claude Code
description: A detailed comparison of Adri AI and Claude Code for SAP development and analysis workflows.
---

## TL;DR

| **Area**                               | **Adri Agents (What You Get)**                                                                                                                                                                  | **Claude Code (Difference)**                                                                                                                                            |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Expertise**                          | Adri Agents leverage a proprietary knowledge base of RAP/CAP and include specialized agents like **Code Medic** that can fix complex ABAP code issues that typical models struggle with.        | Claude Code lacks access to SAP-specific proprietary knowledge (RAP/CAP) and does not offer specialized ABAP debugging agents like Code Medic.                          |
| **System-Specific Intelligence**       | Adri builds a **knowledge graph of your SAP system**, enabling deep system-aware research and highly accurate, non-hallucinated specifications tailored to your configurations and custom code. | Claude Code operates as a general-purpose system without system-specific knowledge graphs, making outputs less tailored to your SAP landscape.                          |
| **Context Retrieval**                  | Adri Process Manager Agent can autonomously read configurations, code, runtime logs, and documentation, combining this with SAP-specific knowledge for highly accurate context understanding.   | Claude Code cannot independently access or unify SAP configurations, logs, and documentation into a single contextual workflow.                                         |
| **Control (Development Capabilities)** | Adri Code Agent can perform everything a developer can do in Eclipse ADT, including debugging, breakpoints, and real-time log reading via feed reader.                                          | Claude Code with open-source MCP servers provides limited development control and does not support advanced ADT capabilities like real-time debugging or log streaming. |
| **Process Management**                 | Built-in process management allows you to document workflows, create change requests, and automatically keep documentation updated through agent activity—no manual effort required.            | Claude Code does not include integrated process management, hence your process documentation quickly becomes outdated and requires manual effort to maintain.           |
| **Deployment**                         | Adri Agents are deployed within the customer’s cloud, ensuring control, security, and alignment with enterprise environments.                                                                   | Claude Code deployment is not tailored to customer-specific cloud environments in the same integrated way.                                                              |


## Detailed Breakdown

The differences come down to six areas.

### Domain Expertise

Adri Agents are purpose-built for SAP. They leverage a proprietary knowledge base around RAP and CAP, and include specialized agents like **Code Medic** that can fix complex ABAP issues that general-purpose models typically struggle with.

Claude Code is a general-purpose coding assistant. It does not have access to SAP-specific proprietary knowledge or specialized ABAP repair capabilities.

![Adri Code Agent interface showing built-in developer workflows and multiple SAP system connections](/img/code-agent-developer-workflows.png)
*Adri Code Agent ships with pre-built SAP developer workflows and knowledge of common development patterns*

### System-Specific Intelligence

Adri builds a **knowledge graph of your SAP system**, mapping your configurations, custom code, and object dependencies. This allows generated specs and code to be grounded in your actual environment rather than generic assumptions.

Claude Code does not build a system-specific knowledge graph. It relies on whatever context is provided manually, so it has no built-in awareness of your SAP landscape.

![Adri Research Agent showing the knowledge graph selector with connected SAP systems including S/4 HANA 2023 and ECC 6.0 EHP 7](/img/research-agent-knowledge-graph.png)
*Adri Research Agent with system-specific knowledge graphs for each connected SAP system*

### Context Retrieval

Adri Agents autonomously read configurations, code, runtime logs, and documentation, combining all of that with SAP-specific knowledge. A complete, accurate picture is assembled before anything is generated.

Claude Code requires you to manually gather and provide that context. It does not have native access to SAP configurations, logs, or system metadata.

![Adri Process Manager showing IMG Activities with 84,192 configuration rows extracted from a connected SAP system](/img/process-manager-img-activities.png)
*Adri Process Manager autonomously reading IMG configuration activities from a connected SAP system*

### Development Capabilities

Adri Code Agent provides full **Eclipse ADT-level control**—debugging, breakpoints, and real-time runtime log access. It interacts with the system the way a developer would, not just generating code but actively working within the development environment.

Claude Code is limited to what is exposed through external tooling like MCP servers, which do not provide deep ADT-level capabilities like real-time debugging or direct log interaction.

![Adri Code Agent showing the New ABAP Repository Object dialog with full object type coverage and multiple SAP system connections](/img/code-agent-abap-objects-multi-system.png)
*Adri Code Agent with full ABAP object type coverage for feature parity with Eclipse ADT, connected to multiple SAP systems simultaneously*

### Process Management

Adri includes **end-to-end process management** out of the box. Workflows, change requests, and process documentation stay automatically in sync with agent activities—no manual effort required to keep documentation current.

Claude Code relies on separate tools for coding, documentation, and workflow management. There is no integrated process layer connecting them, so documentation must be maintained manually.

![Adri Process Manager showing business processes mapped to T-codes, configurations, and change requests](/img/process-manager-processes.png)
*Adri Process Manager automatically mapping business processes to their T-codes, configurations, and code portfolio*

### Deployment

Adri Agents run in the customer’s cloud, giving enterprises full control over data, security, and compliance.

Claude Code deployment is not tailored to customer-specific cloud environments in the same integrated way.

## Summary

Claude Code is a powerful general-purpose coding assistant. Adri is a **SAP-native, system-aware AI platform** that understands your environment, executes end-to-end workflows, and keeps everything—from code to documentation—continuously in sync.
