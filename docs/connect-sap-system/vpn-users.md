---
title: VPN Users
sidebar_position: 2
---

import ConnectToAConnectionComponent from '@site/src/components/ConnectToAConnectionComponent.mdx';
import ConfigureAdriRelayComponent from '@site/src/components/ConfigureAdriRelayComponent.mdx';
import Link from '@docusaurus/Link';
import {ADRI_URLS} from '@site/src/constants/urls';

- Create your SAP connection first: <Link to="/connect-sap-system/connect-your-sap-system">Connect Your SAP System</Link>
- Need help finding the **Project Settings** app? See <Link to="/project-management/open-a-project">Open a Project</Link>.
- Already using Adri Relay and upgrading? See <Link to="/connect-sap-system/upgrade-adri-relay-vpn-users">Upgrade Adri Relay (VPN Users)</Link>.
- Need one relay app for multiple Adri projects? See <Link to="/connect-sap-system/configure-relay-more-than-one-project-vpn-users">Configure Relay for More Than One Project (VPN Users)</Link>.

## Install Adri Relay on your laptop

Use this section if your SAP systems are only reachable through VPN.
**Adri Relay** is a small desktop app that securely connects Adri AI to your VPN-only SAP systems.

> In every screenshot, the red box shows exactly where to focus.

1. Open <a href={ADRI_URLS.web}>getadri.ai</a> and click **Downloads** in the top navigation.

![Open Downloads from the Adri AI website](/img/vpn-users/1.png)

2. On the **Download Adri Relay** page, choose your OS and click **Download**.

![Choose your OS and download Adri Relay](/img/vpn-users/2.png)

3. Unzip the downloaded file and start the Adri Relay app.
4. On macOS, if the app is blocked, run this command in Terminal:

```sh
xattr -dr com.apple.quarantine "/Applications/Adri Relay.app"
```

![Run this command on macOS if needed](/img/vpn-users/3.png)

## Configure Adri Relay

<ConfigureAdriRelayComponent imageBasePath="/img/vpn-users" startNumber={4} />

<ConnectToAConnectionComponent />
