---
title: Sign In to Adri AI
sidebar_position: 3
description: Authenticate the VS Code extension with Adri AI using the browser-based OAuth flow.
---

# Sign In to Adri AI

Signing in links the VS Code extension to your Adri AI account and project so it can list SAP systems, install the MCP server, and access shared resources.

> In every screenshot, the red box shows where to focus.

## 1. Start sign-in from the SAP ADT Explorer

Open the **SAP ADT Explorer** view in the Activity Bar. Under **Object Tree**, click the **Sign In** icon next to *Sign in to see SAP systems*.

![Click Sign In in the SAP ADT Explorer](/img/vs-code-extension/9.png)

## 2. Allow VS Code to open the browser

VS Code prompts you to open the Adri AI authorization URL in your default browser. Click **Open**.

![Allow VS Code to open the Adri AI authorization URL](/img/vs-code-extension/10.png)

## 3. Authorize the extension

In the browser, review the requested permissions and click **Allow**.

![Allow vs-adri-foundry to access your Adri AI account](/img/vs-code-extension/11.png)

## 4. Select a project

Pick the Adri AI project this VS Code workspace should use, then click **Continue**. Permissions are scoped to the selected project.

![Select an Adri AI project](/img/vs-code-extension/12.png)

## 5. Return to VS Code

After successful authorization the browser shows a *Success!* page and asks to open VS Code. Click **Open Visual Studio Code**.

![Click Open Visual Studio Code on the Success page](/img/vs-code-extension/13.png)

VS Code asks to allow the **Adri Foundry for VS Code** extension to open the URI. Click **Open**.

![Allow the extension to open the callback URI](/img/vs-code-extension/14.png)

## 6. Confirm you are signed in

The Object Tree now lists the SAP systems available to your project, and a status bar message shows **Signed in to Adri successfully**.

![SAP systems listed in the Object Tree](/img/vs-code-extension/15.png)

You can now [connect to a system](./connect-to-a-system.md).
