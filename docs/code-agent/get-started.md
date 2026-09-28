---
sidebar_position: 1
---

import CreateAProjectComponent from '@site/src/components/CreateAProjectComponent.mdx';
import SignUpAndProfileSetupComponent from '@site/src/components/SignUpAndProfileSetupComponent.mdx';
import {ADRI_URLS} from '@site/src/constants/urls';

# Adri Code Agent: Complete Onboarding Guide

This guide helps first-time users go from account creation to a successful first prompt in Adri Code Agent.

:::info Prerequisite
Code Agent requires an active subscription. This guide walks you through creating an account, buying a subscription, and writing your first prompt in Code Agent.
:::

## What You Will Complete

In this flow, you will:

1. Create an Adri account
2. Create a project
3. Activate billing
4. Open Code Agent in the correct project
5. Enable your SAP user from **Systems**
6. Run your first prompt

## Setup Flow (User Version)

<SignUpAndProfileSetupComponent />

### Step 3: Create a Project

<CreateAProjectComponent />

### Step 4: Activate Billing

1. In the left sidebar, click **Switch App**.
2. Choose **Billing**.
3. Enter billing name and billing email.
4. Open **Overview**.
5. Select a plan (recommended: **$50 plan**).
6. Complete Stripe checkout.

**Done when:** Billing shows an active subscription.

![Step 4A placeholder: Switch App to Billing](https://res.cloudinary.com/diufkmalk/image/upload/v1773585750/Screenshot_2026-03-15_at_6.16.51_PM_huswzu.png)
![Step 4B placeholder: plan selection and Stripe](https://res.cloudinary.com/diufkmalk/image/upload/v1773585809/Screenshot_2026-03-15_at_6.24.16_PM_byftdq.png)

### Step 5: Open Code Agent in the Correct Project

1. Open <a href={ADRI_URLS.code}>code.getadri.ai</a>.
2. Verify the active project name.
3. If needed, use **Project Switcher** (below **Switch App**) to switch to the project created above.

**Done when:** Active project in Code Agent matches your billed project.

![Step 5 placeholder: highlight Project Switcher](https://res.cloudinary.com/diufkmalk/image/upload/v1773586491/Screenshot_2026-03-15_at_8.24.00_PM_invhfp.png)

### Step 6: Enable Your SAP User

1. In the chat composer area, click **Systems**.
2. In the right drawer, locate the SAP user assigned to you.
3. Toggle the user **ON**.
4. Wait until the toggle turns **green**.

**Done when:** The SAP user toggle is green (active).

![Step 6A placeholder: open Systems drawer](https://res.cloudinary.com/diufkmalk/image/upload/v1773586779/Screenshot_2026-03-15_at_8.26.59_PM_vzispw.png)
![Step 6B placeholder: SAP user toggle green](https://res.cloudinary.com/diufkmalk/image/upload/v1773586776/Screenshot_2026-03-15_at_8.29.03_PM_gh92ca.png)

### Step 7: Run Your First Prompt

In chat, submit a focused prompt:

`Analyze this requirement and propose an ABAP implementation plan with impacted objects.`

**Done when:** You receive a response in the context of your selected SAP user.

![Step 7 placeholder: first prompt in chat](https://res.cloudinary.com/diufkmalk/image/upload/v1773586777/Screenshot_2026-03-15_at_8.28.17_PM_wkpfe0.png)
