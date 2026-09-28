---
title: Clean Core Assessment
sidebar_position: 3
description: Run Clean Core Assessment in Adri AI, classify objects into A/B/C levels, and continue to fit-to-X planning.
---

import Link from '@docusaurus/Link';

## Why this use case matters

Adri AI provides a detailed Clean Core framework to classify ABAP objects into:

- **Level A**
- **Level B**
- **Level C**

This helps teams quickly understand migration risk and prioritization.

## Flexible by design (architect notes)

Enterprise architects may interpret clean-core rules differently.
So Adri AI allows you to add your own notes directly in the prompt before assessment.

You can include guidance like:

```text
Use our enterprise rule: wrapper classes around standard APIs can be treated as Level B if no direct not-released table dependency exists.
```

The assessment will still follow Adri's framework, but it will consider your additional notes while explaining classification.

## Step-by-step in Claude Code

> In these screenshots, the red box shows user action and the blue box shows important information to note.

1. Type `/adri` and select `/adri-ai:clean_core_assess (MCP)`.

![Select clean_core_assess prompt](/img/use-cases/clean-core-assessment/1.png)

2. Adri loads the Clean Core Migration Framework resource and asks for object details.

![Framework loaded and input requirements shown](/img/use-cases/clean-core-assessment/2.png)

3. Ask for assessment with object + system details.
You can include your architect notes in the same request.

Example:

```text
Do Clean Core Assessment for zcl_enabler_cds_rap in system Dedicated [Admin].
Also consider this note: classes used only for repository export are acceptable as Level B unless they directly depend on not-released SAP tables.
```

![Submit clean core assessment request](/img/use-cases/clean-core-assessment/3.png)

4. Review execution details while Adri gathers source, dependencies, ATC findings, and related signals.

![Execution and tool trace for assessment](/img/use-cases/clean-core-assessment/4.png)

5. Review the detailed assessment output.

![Assessment output: object profile and dependency analysis](/img/use-cases/clean-core-assessment/5.png)

![Assessment output: ATC findings and overall classification](/img/use-cases/clean-core-assessment/6.png)

## Continue to planning (fit-to-X selection)

After assessment, run the planning prompt:

1. Type `/adri` and select `/adri-ai:clean_core_plan (MCP)`.

![Select clean_core_plan prompt](/img/use-cases/clean-core-assessment/7.png)

2. Choose your migration intent (fit-to-X strategy), for example:

- `clean-core-first`
- `extension-first`
- `contract-safe`
- `side-by-side-first`
- `fastest-safe-fit`

The planning output depends on this choice, so pick the intent that matches your architecture direction.

![Choose fit-to-X intent for planning](/img/use-cases/clean-core-assessment/8.png)

## Related setup

1. [Setup (Claude Code)](../adri-mcp-server/setup-in-claude-code.md)
2. [MCP Capabilities](../adri-mcp-server/mcp-capabilities.md)
