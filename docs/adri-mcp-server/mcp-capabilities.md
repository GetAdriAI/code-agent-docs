---
title: MCP Capabilities
sidebar_position: 6
description: Current feature availability in Adri MCP Server.
---

## MCP Capabilities

The Adri MCP Server is live.
For SAP development work, it can do pretty much everything an ABAP developer does in Eclipse ADT.
You can use it from any MCP-compatible coding agent, including Codex, Cline, and Claude Code.

Current status:

| Capability Area | Status | Notes |
| --- | --- | --- |
| ADT API Capabilities | Available | Covers pretty much everything a developer does in Eclipse ADT. |
| Configuration Reading | Available | Can read all configuration. |
| Enabler Framework | Available | Enables parametrized ABAP execution and better pagination controls for large table reads. |
| Knowledge Base Access | Unavailable | Not available in MCP yet. |
| Specialized ABAP Bug Fixing (Code Medic) | Unavailable | Not available in MCP yet. |
| Document Generation | Unavailable | Not available in MCP yet. |

## Capability Details

### ADT API Capabilities (Available)

- The Adri MCP Server covers pretty much the full day-to-day Eclipse ADT developer workflow.
- That includes creating, reading, and modifying ABAP repository objects, running checks, executing ABAP applications, and handling object locking and transport operations.

### Configuration Reading (Available)

- The Adri MCP Server can read all SAP configuration.

### Enabler Framework (Available)

- Enabler Framework is an optional SAP-side setup that takes around 3-5 minutes.
- It is idempotent, so you can safely run setup multiple times on the same system.
- It unlocks **parametrized execution**: run ABAP logic through REST endpoints even where ADT API is limited.
- It unlocks **large table pagination controls**: handle large reads with better pagination flexibility than ADT SQL script limits allow.
- Setup guide: [Setup Enabler Framework](./setup-enabler-framework.md)

### Knowledge Base Access (Unavailable)

- **System-specific knowledge graph**: query the same vector database that powers Adri Research Agent, containing millions of standard and custom SAP objects per connected system.
- **SAP Business Accelerator Hub**: search SAP's standard API and object catalog.
- **Semantic and keyword search**: use ChromaSQL-style queries to find objects by meaning, not just exact names.
- **Multi-system queries**: search across multiple connected SAP systems (ECC, S/4HANA) in a single request.

### Specialized ABAP Bug Fixing (Unavailable)

- **Code Medic agent**: Adri's specialized agent for diagnosing and fixing complex ABAP issues, built for SAP-specific bug fixing workflows.

### Document Generation (Unavailable)

- **Functional specifications** in Word and PDF formats.
- **Technical specifications** grounded in your actual system objects and dependencies.

## Platform-Only Features

MCP as a technology has limitations. The following capabilities require the full Adri AI platform.

### Background Code Development

The Adri Code Agent can develop code autonomously in the background, including debugging, setting breakpoints, reading runtime logs, and iterating on fixes without blocking your workflow. MCP operates synchronously within a single tool call, so long-running autonomous sessions are not feasible.

### Lift and Shift at Scale

The platform can perform lift-and-shift operations across thousands of ABAP objects, coordinating cross-object dependencies and impact analysis. MCP's request-response model does not support this kind of large-scale, multi-step orchestration.

### Automatic Agent Triggers on Runtime Errors

The Adri platform can monitor runtime error logs and automatically trigger Code Medic to diagnose and fix issues as they occur. MCP servers are passive and respond only to incoming requests.

### Automatic Workflow Runs on Change Requests

When a new change request is created, the platform can automatically start workflows that update process documentation, validate configurations, and coordinate across agents. MCP does not provide this event-driven automation layer.

### Connected Agent Collaboration

On the platform, Research Agent, Code Agent, Code Medic, and Process Manager can share context continuously so output from one agent feeds the next. Through MCP, tool calls are independent and do not share long-lived workflow state by default.

### End-to-End Process Management

The platform's Process Manager maps business processes to T-codes, configurations, and code while keeping documentation synchronized as changes happen. This continuous process-sync layer is not available through MCP alone.
