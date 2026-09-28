---
title: Use Debugger to Find BAdI Automatically
sidebar_position: 4
description: Use Adri AI debugger flow to discover which BAdIs are triggered at runtime and whether implementations are active.
---

import Link from '@docusaurus/Link';

## Why this use case matters

Finding the right BAdI in SAP can be slow when done manually.
With Adri AI debugger capability, you can trace actual runtime flow and identify triggered BAdIs automatically.

This is useful when you need to know:

- which `EXIT_NAME` values are actually hit
- whether matching implementations are active
- what each discovered BAdI is responsible for

## Pre-requisites

1. Complete MCP setup in Claude Code:
<Link to="/adri-mcp-server/setup-in-claude-code">Setup (Claude Code)</Link>
2. Make sure your SAP system is connected and reachable.

> In these screenshots, the red box shows user action and the blue box shows important information to note.

## Step-by-step in Claude Code

1. Type `/adri` and select `/adri-ai:sap_debugger_guide (MCP)`.

![Select sap_debugger_guide](/img/capabilities/abap-debugger/1.png)

2. Confirm the debugger guide is loaded and read the required inputs.

![Debugger guide loaded and requesting inputs](/img/capabilities/abap-debugger/2.png)

3. Ask Adri AI to run a BAdI-focused debugger flow.

Example prompt:

```text
I want to discover which BAdIs SAP triggers during material master data processing.
Load the sap_badi_discovery_guide prompt. Then create a small class ZCL_FIND_MM_BADIS that calls standard BAPI BAPI_MATERIAL_GET_DETAIL for material number 100-100 (or any material that exists on the system).
Debug that class with a breakpoint on CL_EXITHANDLER=>GET_INSTANCE and collect every EXIT_NAME that gets triggered.
For each BAdI found, tell me what it does and whether it has an active implementation.
Do this on Dedicated [ADMIN] system.
```

![Submit BAdI discovery debugging request](/img/capabilities/abap-debugger/3.png)

4. When tool permission appears, allow debugger launch (prefer all projects).

![Allow debugger launch tool](/img/capabilities/abap-debugger/4.png)

5. Review the final runtime findings list.

![BAdI findings from debugger execution](/img/capabilities/abap-debugger/5.png)
