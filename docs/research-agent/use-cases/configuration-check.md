---
sidebar_position: 2
---

# Check Configuration Options

Before writing custom code, use SAP Research Agent to discover standard SAP capabilities that can satisfy your requirements.

## Why Check Configuration First?

Custom ABAP development introduces:

- Ongoing maintenance overhead
- Upgrade compatibility risks
- Testing requirements for each transport

Standard configuration, when available, avoids these costs and leverages SAP's built-in functionality.

## How It Works

1. Describe your business requirement to the SAP Research Agent
2. The agent searches for relevant configuration options, transactions, and standard settings
3. Results are validated against your connected SAP system to confirm availability
4. The agent provides implementation steps using standard T-codes and IMG paths

## Example Prompts

- "Is there a standard way to automatically block vendors with overdue invoices?"
- "Can SAP handle partial deliveries with different pricing conditions?"
- "What configuration options exist for automatic payment program tolerances?"

## What You'll Receive

- Relevant T-codes and configuration paths
- IMG (Implementation Guide) navigation steps
- Prerequisites and dependencies
- Limitations of the standard approach (if any)
