---
title: Authenticate using token
sidebar_position: 5
description: Use Adri personal access tokens for coding agents that do not support full OAuth login.
---

import AuthenticateUsingTokenComponent from '@site/src/components/AuthenticateUsingTokenComponent.mdx';

## Use token-based auth for MCP clients

Use this flow when your coding agent supports `Authorization: Bearer ...` but not full browser-based OAuth.

<AuthenticateUsingTokenComponent />
