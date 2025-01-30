---
title: Quick Start
---
## Install Vertical Tabs

**Step 1: Prepare your vault.** 
A vault is a folder of your notes in Obsidian. If you haven’t created your vault, please follow the official guide to [download and install Obsidian](https://help.obsidian.md/Getting+started/Download+and+install+Obsidian) and then [create a vault](https://help.obsidian.md/Getting+started/Create+a+vault). There are many great video guide online for customizing your vault. If you have multiple vaults, you have to install Vertical Tabs in each of them.

**Step 2: Install and enable Vertical Tabs.**
Please click the following install button:

<a class="vt-install-button" href="https://obsidian.md/plugins?id=vertical-tabs" target="_blank">Install in My Active Vault</a>

Your browser will ask your permission to open Obsidian, make sure to **Allow** it.

If you see the following screen, please click **Turn on community plugins** and click the install button again.
![[active_community_plugins.png|600]]
If you see the detail page of Vertical Tabs, please click **Install**.
![[install.png|600]]
After a few seconds, Vertical Tabs should be installed successfully. You need to activate it by click the **Enable** button. If you encountered issues during installation, please check your Internet connection and proxy settings. You can ask for help on the [Discussion Page](https://github.com/oxdc/obsidian-vertical-tabs/discussions).
![[enable.png|600]]

## Config Vertical Tabs

Now it’s time to check the core features and customize Vertical Tabs for your needs. Please click the **Options** button. This will open the [[Settings]] page of Vertical Tabs. 
![[options.png|600]]
### Feature: “Show active tabs only”

First, if you have many open notes and feel frustrated navigating between them using Obsidian’s native horizontal tabs, you may want to enable the [[show active tabs only]] toggle.
![[show_active_tabs_only.png|600]]
This will hide all inactive tabs in your vault, making the workspace looks more cleaner.
![[show_active_tabs_only_effects.png|620]]

### Feature: Per-tab zooming

In Obsidian, you can press <kbd>Ctrl</kbd> + <kbd>+/-</kbd> (Windows) or <kbd>Command</kbd> + <kbd>+/-</kbd> (MacOS) to zoom in/out the entire screen. In Vertical Tabs, you can enable [[per-tab zooming]] to set different zoom levels for different tabs, without affecting other parts of the UI.
![[per_tab_zooming.png|600]]
If you have enabled this feature, when you right-click a tab in Vertical Tabs, it will open up a context menu that contains the zooming options for this tab.
![[per_tab_zooming_effects.png|600]]
You can also set the hotkeys for quickly zooming in/out the current tabs. Open the **Settings** (<img src="/Attachments/lucide-settings.svg" data-type="icon" />), <num>1</num> go to the **Hotkeys** tab, <num>2</num>  search for “Vertical Tabs”, and record the hotkeys for <num>3</num> **Zoom in current tab** and <num>4</num> **Zoom out current tab**.
![[per_tab_zooming_hotkey.png|600]]

### Feature: Enhanced keyboard switcher

If you love to use keyboard to quickly switch between tabs by pressing <kbd>Ctrl</kbd> + <kbd>1-9</kbd> (Windows) or <kbd>Command</kbd> + <kbd>1-9</kbd> (MacOS), you can enable the [[enhanced keyboard tab switcher]] of Vertical Tabs.
![[enhanced_keyboard_tab_switching.png|600]]
Because Obsidian’s keyboard switcher only supports no more than 9 tabs, it becomes frustrated for power users with tons of open tabs. With the [[enhanced keyboard tab switcher]], you can press  <kbd>Ctrl</kbd> + <kbd>←/→</kbd> (Windows) or <kbd>Command</kbd> + <kbd>←/→</kbd> (MacOS) to offset the numbers and navigate to any tabs in the current active groups.

### Feature: Advanced tab navigation

Tab navigation controls the location of newly-opened tabs. By default, when you open a new note, Obsidian will replace your current note, similar to a web browser. If this is not what you want, you can [[advanced tab navigation|choose]] or [[custom strategy|design your own tab navigation strategy]] in the settings.
![[advanced_tab_navigation.png|600]]
Here’s a few rules for helping you choose the right one:

- If you are familiar with Obsidian’s design and want to stick to it, please use **Obsidian+**.
- If you love IDE-like experience, please choose **IDE**.
- If you simply don’t want to open the same note twice, please choose **Notebook**.
- If you want to always open new notes in new tabs, please use **Prefer new tab**.

> [!TIP] Tip
> When come to tab navigation, always start with something familiar and simple.

### Feature: Background mode

Some users love features like [[advanced tab navigation]], but don’t want to have a vertical list of tabs. For them, their tabs are not that much and are fairly manageable. If you are one of them, you can turn on the [[background mode|Background mode]], which will **disable** Vertical Tabs but keep some features you love.

> [!WARNING] Warning
> By enabling the [[background mode]], you will lose access to most features of Vertical Tabs — you **cannot** even see Vertical Tabs. Be sure this is intended before turning it on.

![[background_mode.png|600]]

## Explore Vertical Tabs

Vertical Tabs organize your workspace by displaying the tabs vertically and grouping them into different categories. You can drag-and-drop a tab or group to reorder them. You can also create, rename or hide a group.
![[vertical_tabs.png|600]]
If you have too many groups open on screen, [[zen mode]] will help you stay focus. Just click the focus icon (<img src="/Attachments/lucide-focus.svg" data-type="icon" />), it will hide all the groups and tabs except the one you are currently working on.
![[zen_mode.png|600]]
You can also fold (<img src="/Attachments/lucide-fold-vertical.svg" data-type="icon" />) or unfold (<img src="/Attachments/lucide-unfold-vertical.svg" data-type="icon" />) the groups in Vertical Tabs by a single click.
![[fold_groups.png|600]]
If you are lost in your workspace and cannot find the active tab in Vertical Tabs, just click the target icon (<img src="/Attachments/lucide-crosshair.svg" data-type="icon" />), it will reveal and scroll to that tab.
![[reveal_tab.png|600]]
## Conclusion

That’s all for today! 🎉 Thank you for reading, and I hope this guide helped you get started with Vertical Tabs. If you have any questions, feel free to check out the [[index|other parts of the documentation]] or [join the community discussions](https://github.com/oxdc/obsidian-vertical-tabs/discussions). Enjoy your Obsidian experience, and happy note-taking!