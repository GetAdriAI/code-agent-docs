---
title: Create SICF/REST API
sidebar_position: 5
description: Use Adri MCP prompts to create and test a SAP SICF endpoint with your coding agent.
---

import CodeBlock from '@theme/CodeBlock';

## Why this use case matters

Many ABAP teams still create SICF endpoints manually, which is slow and error-prone.
With Adri MCP Server, you can ask your coding agent to create and test an endpoint end-to-end.

This example uses Claude Code screenshots, but the same workflow can be followed in other MCP-compatible agents.

Legend:

- **Red box**: action you should take
- **Blue box**: important information to review

## Example flow: create a SICF endpoint

1. In your coding agent chat, type `/adri` and select:
`/adri-ai:sicf_endpoint_setup (MCP)`.

![Select the SICF endpoint setup guide prompt](/img/use-cases/create-sicf-rest-api/1.png)

2. Confirm the guide is loaded.
This tells the agent the correct SAP-safe workflow to create and activate the endpoint.

![SICF setup guide loaded in chat](/img/use-cases/create-sicf-rest-api/2.png)

3. Provide your task clearly.
Example prompt:

<CodeBlock language="text">{`Tasks:
- Create an endpoint that returns difference of two numbers
- Test the endpoint by sending requests
- Use system <SAP connection name> using adri-ai MCP.`}</CodeBlock>

![Send the endpoint creation task](/img/use-cases/create-sicf-rest-api/3.png)

4. Review the final summary from the agent.
Make sure it shows:
- ABAP objects created
- endpoint path
- test request/response results

![Review created objects, endpoint path, and test results](/img/use-cases/create-sicf-rest-api/4.png)

## Outcome you should expect

At the end, you should have a working SICF endpoint plus validation results.
You can then ask the agent to extend it (for example: auth checks, input validation, POST payload handling, and structured error responses).
