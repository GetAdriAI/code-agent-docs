---
title: "The Return of Simple Prompting in SAP"
description: "Why SAP teams are moving beyond prompt engineering toward context instrumentation."
tags: [genai]
authors: [ss]
date: 2026-04-19
---

For the past few years, AI adoption in enterprises has been driven by one idea: write better prompts.
In SAP environments, that phase is ending. We are entering a new paradigm: context instrumentation, where systems are designed so agents can build context and take action autonomously.

<!-- truncate -->

And interestingly, users are returning to simple prompting.

## The evolution

### 1. Simple prompting

At the beginning, users asked things like:

- "Write an ABAP report"
- "Explain this dump"

Results were inconsistent because the model had no awareness of:

- your SAP system
- your configurations
- your custom logic

### 2. Prompt engineering

Teams improved how they asked: better structure, clearer constraints, and examples.
This helped, but only up to a limit.

The model still lacked real context.

### 3. Context engineering

Teams then started injecting:

- documentation
- schemas
- business rules

Now the model had context, but it was usually:

- static
- manually curated
- incomplete

### 4. Context instrumentation

Instead of feeding all context manually, we enable the agent to build context itself.

In SAP, this means the agent can:

- read and write ABAP
- query tables
- analyze runtime logs and dumps
- trace execution paths
- generate artifacts (for example forms)
- execute controlled changes

## What this looks like

### Example: invoice failure

Traditional approach:

- use ST22 for dump analysis
- jump into SE80
- trace logic manually

With an agent, a user can ask:

> "Why did this invoice fail to post?"

The agent can then retrieve logs, trace execution, inspect dependencies, map to the billing process, and explain root cause.

## The hard problem: meaning

SAP systems are complex: custom Z programs, implicit logic, and configuration-driven behavior.
So the real challenge is not only "Can the agent act?" but also "Can the agent act correctly?"

## Our breakthrough: code-to-process mapping

A key layer is mapping every code artifact and configuration to a business process.

When the agent encounters code, it:

1. reads the source
2. analyzes dependencies
3. traverses execution paths
4. maps to business processes such as Order-to-Cash, Procure-to-Pay, and Record-to-Report
5. generates living documentation

## What this unlocks

When a user asks "Why did this invoice fail?", the agent can reason with process context, system logic, and expected behavior.

This is no longer basic debugging. This is business-aware reasoning.

## The new roles

- Enterprise Architect: designs the capability surface
- Agent: builds context and executes
- SAP system: becomes instrumented
- User: returns to simple prompting

## Final thought

The shift is clear:

Prompt Engineering -> Context Engineering -> Context Instrumentation.

The core question is no longer "How do we write better prompts?"
It becomes:

> How do we make SAP systems understandable and operable by agents?
