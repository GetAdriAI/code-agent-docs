---
title: Configure Relay for More Than One Project (VPN Users)
sidebar_position: 4
description: Import additional project relay configurations into one Adri Relay app.
---

import Link from '@docusaurus/Link';

Use this guide when the same laptop/relay app must handle VPN SAP systems from multiple Adri projects.

Pre-requisites:
- Complete the first relay setup in <Link to="/connect-sap-system/vpn-users">VPN Users</Link>.
- For each additional project, generate and copy relay configuration from:
<Link to="/connect-sap-system/vpn-users#configure-adri-relay">Configure Adri Relay</Link> (steps to generate/copy config).

> In every screenshot, the red box shows exactly where to focus.

## Add one more project configuration

1. In Adri Relay **Settings**, under **Quick Setup**, click **Import another configuration**.

![Click Import another configuration](/img/vpn-users-multiple-projects/17.png)

2. Paste the copied relay configuration from the additional project.

![Paste the additional project relay configuration](/img/vpn-users-multiple-projects/18.png)

3. Click **Import Configuration**.

![Click Import Configuration for the additional project](/img/vpn-users-multiple-projects/19.png)

4. Open the **Dashboard** tab.
If the relay is already connected, click **Disconnect** first.

![Click Disconnect when relay is already connected](/img/vpn-users-multiple-projects/20.png)

5. Click **Connect** to reconnect and load the newly imported project configuration.

![Click Connect in Dashboard after importing the additional project](/img/vpn-users-multiple-projects/21.png)

6. Verify status returns to **Connected** and systems from all imported project configurations are available.

Repeat the same import flow for every additional project.
