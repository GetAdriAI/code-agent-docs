---
title: The 14-Year-Old SAP Workflow Nobody Wanted to Touch
sidebar_position: 1
description: How Adri modernized and safely tested a 14-year-old SAP purchase requisition approval workflow in less than three hours.
slug: /case-studies/modernizing-a-14-year-old-sap-workflow
---

The purchase requisition approval workflow had been running for 14 years.

It sent emails to approvers and other stakeholders. It worked. And, like many old SAP workflows, nobody had touched it in years. The developer who built it had long since left the organization.

Then came a request that sounded simple: put the purchase requisition details directly in the approval email and add a button that would take the approver straight to the requisition.

It was anything but simple.

## A Small Request With a Long History

SAP users do not compare their experience only with other ERP systems. They compare it with every polished application they use outside work. They expect useful information at a glance and a direct path to the next action.

That was the goal here. Instead of receiving a generic workflow notification, an approver should be able to review the important requisition details in the email and open the requisition with one click.

But delivering that experience meant changing a workflow that had been left alone for more than a decade. Nodes had to be removed and added. New workflow containers had to be created. Custom code and configuration had to be understood before anything could safely change.

There was another complication: SAP did not support direct navigation to the purchase requisition out of the box.

## Before Changing Anything, Adri Investigated

The Adri Agent did not begin by rewriting the workflow. It first reconstructed how the existing process worked.

It traced the custom code and configuration to answer three critical questions:

- How are approvers identified?
- Which release strategy controls the approval?
- How does the existing email delivery infrastructure work?

That investigation exposed the real shape of the problem and gave the agent enough context to design a solution that would fit the existing SAP landscape.

## The Solution Took Shape in Three Parts

The agent devised and unit-tested a three-part solution.

First, it created a class that generated a rich email containing the purchase requisition details and a direct-action button.

Second, it modified the workflow to call that class through a new node and the required workflow containers.

Third, it prepared the sandbox for safe end-to-end testing, ensuring that test runs could not accidentally send emails to real users.

The technical path was clear. The environment, however, was not ready to let the agent complete it in one uninterrupted run.

## Then the Workflow Fought Back

While implementing the change, the agent hit an authorization issue that prevented it from modifying the workflow. It diagnosed the blocker and prepared a detailed request for the BASIS team, specifying what had to change.

The agent paused. BASIS completed the required update. The agent resumed from where it had stopped and finished the remaining implementation.

Then, just before end-to-end testing, another risk surfaced: the sandbox could still deliver workflow emails to real users.

The agent stopped the test before that could happen. It asked the BASIS team to put a safety net in place, waited for confirmation, and then resumed testing in a controlled environment.

This was not a one-shot generation followed by a hopeful deployment. It was a complete delivery cycle:

1. Analyze the existing configuration and custom code.
2. Design a solution around the current SAP landscape.
3. Implement and unit-test each component.
4. Diagnose infrastructure and authorization blockers.
5. Give the BASIS team precise actions to resolve them.
6. Resume implementation and run end-to-end tests safely.
7. Deliver the transports and technical specification.

The agents completed the implementation work in less than three hours.

## The Result Went Beyond One Workflow

Approvers received a more useful email: the purchase requisition details were visible in the message, and a button took them directly to the requisition.

The organization also gained something less visible but just as valuable. Adri AI added what it had learned—including the organization's email-delivery code pattern—to its knowledge graph. The next time a similar change is requested, the agent will not have to rediscover the same landscape from scratch.

That is the larger lesson from this project. A 14-year-old SAP workflow does not have to remain frozen because its original developer is gone or because its design predates modern user expectations.

It can be understood. It can be changed safely. And it can become the foundation for faster work the next time around.
