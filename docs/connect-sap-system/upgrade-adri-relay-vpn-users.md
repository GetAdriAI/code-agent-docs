---
title: Upgrade Adri Relay (VPN Users)
sidebar_position: 3
description: After upgrading Adri Relay, clear local configuration and set it up again.
---

import Link from '@docusaurus/Link';
import ConfigureAdriRelayComponent from '@site/src/components/ConfigureAdriRelayComponent.mdx';

Use this guide after you install a newer Adri Relay version.

- If you still need to install Adri Relay first, use <Link to="/connect-sap-system/vpn-users#install-adri-relay-on-your-laptop">Install Adri Relay on your laptop</Link>.
- If your SAP system is not connected yet, start with <Link to="/connect-sap-system/connect-your-sap-system">Connect Your SAP System</Link>.

> In every screenshot, the red box shows exactly where to focus.

## 1. Clear old relay configuration

After opening the upgraded Adri Relay app:

1. Open the **Settings** tab.
2. Click **Clear Configuration**.

![Clear old relay configuration in Adri Relay settings](/img/upgrade-adri-relay-vpn-users/23.png)

## 2. Configure relay again

This is the same flow as **Configure Adri Relay** in the VPN users guide.

<ConfigureAdriRelayComponent
  imageBasePath="/img/upgrade-adri-relay-vpn-users"
  startNumber={24}
/>
