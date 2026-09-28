---
title: Work with SAP Configuration using Claude Code
sidebar_position: 2
description: Use Claude Code with Adri MCP to read and modify SAP configuration using Adri guide prompts.
---

import Link from '@docusaurus/Link';

## Same goal as Claude Chat: load the SAP configuration guide first

In both approaches, the first goal is the same: start from Adri AI's configuration guide prompt.
We intentionally begin with the guide in both Claude Chat and Claude Code before asking the task.

- Claude Chat flow:
<Link to="/use-cases/read-write-sap-configuration">Read and Write SAP Configuration</Link>
- Claude Code flow (this page):
use `/adri-ai:sap_read_configuration_guide`

This gives users the same guidance foundation before running configuration read/write tasks.

Quick links:

- [Read Configuration Steps](#read-configuration-steps)
- [Modify Configuration Steps](#modify-configuration-steps)

Legend:

- **Red box**: user action
- **Blue box**: important information to note

## Read Configuration Steps

1. In Claude Code, type `/adri` and select `/adri-ai:sap_read_configuration_guide (MCP)`.

![Select the sap_read_configuration_guide prompt in Claude Code](/img/use-cases/claude-code-configuration/1.png)

2. Confirm the SAP IMG Configuration Extraction Guide is loaded.
This confirms you are using the correct Adri guide context.

![Guide loaded confirmation in Claude Code](/img/use-cases/claude-code-configuration/2.png)

3. Ask your configuration request.

Example:

```text
Connect to Dedicated [ADMIN] system and explain all the pricing condition types we have in the system.
```

![Submit the pricing condition types request](/img/use-cases/claude-code-configuration/3.png)

4. Review tool execution details.
The flow may retry some tool calls automatically; this is normal while establishing session/query flow.

![Tool call trace and retry behavior in Claude Code](/img/use-cases/claude-code-configuration/4.png)

5. Read the structured output summary.

![Structured configuration output overview](/img/use-cases/claude-code-configuration/5.png)

6. Scroll through the detailed sections and condition groups.

![Detailed discounts and surcharges section](/img/use-cases/claude-code-configuration/6.png)

![Country and costing condition sections](/img/use-cases/claude-code-configuration/7.png)

![MM purchasing condition section](/img/use-cases/claude-code-configuration/8.png)

![Summary statistics at the end](/img/use-cases/claude-code-configuration/9.png)

## Optional for higher accuracy

Run IMG Extraction before deep configuration analysis:
<Link to="/adri-mcp-server/setup-img-extraction">Setup IMG Extraction</Link>

## Modify Configuration Steps

Adri MCP now supports applying SPRO/config changes through guided flow.

Important:
- In this walkthrough, we **revert after verification for demo purpose** so the system is restored to original values.
- In real work, you may keep the change and skip revert.

Use this exact prompt:

```text
Load the /sap_write_configuration_guide prompt first, then follow its methodology to complete this task:

Connect to the Dedicated [Admin] system. I want to update company code 1000 in table T001 — change the company name (BUTXT) to "Adri AI Corp" and the city (ORT01) to "San Francisco".

Before making any changes:
1. Look up the full structure of T001 — show me all the fields, which are keys, and what the important domain values are
2. Check the foreign key dependencies (what other tables reference T001 fields?)
3. Show me the CURRENT values for company code 1000
4. Present a clear before/after comparison of what will change vs what stays the same

Only after I confirm, apply the change using config_write. Then read back the entry to verify it worked.

After verification, revert the company name back to its original value.
```

If you do **not** want to revert, use this prompt instead:

```text
Load the /sap_write_configuration_guide prompt first, then follow its methodology to complete this task:

Connect to the Dedicated [Admin] system. I want to update company code 1000 in table T001 — change the company name (BUTXT) to "Adri AI Corp" and the city (ORT01) to "San Francisco".

Before making any changes:
1. Look up the full structure of T001 — show me all the fields, which are keys, and what the important domain values are
2. Check the foreign key dependencies (what other tables reference T001 fields?)
3. Show me the CURRENT values for company code 1000
4. Present a clear before/after comparison of what will change vs what stays the same

Only after I confirm, apply the change using config_write. Then read back the entry to verify it worked.

Do not revert automatically. Keep the updated values as the final state.
```

1. Paste and run the prompt in Claude Code.

![Submit the full write-configuration prompt](/img/use-cases/claude-code-configuration/12.png)

2. Review validation and before/after comparison, then confirm only if correct.

![Review validation and confirm with yes, proceed](/img/use-cases/claude-code-configuration/13.png)

3. Verify final state confirms apply + verification + revert round-trip.

![Final state confirmed after apply and revert](/img/use-cases/claude-code-configuration/14.png)
