---
title: Advanced Tab Navigation
---
## What is tab navigation?

Tab navigation refers to the strategies that determine how and where a new note is opened within Obsidian. By default, Obsidian behaves similarly to a web browser: when you open a new note, it replaces the content of the currently active tab with the new note.

While this default behavior works for some, it can be frustrating for others. For instance, some users prefer to open notes in new tabs to keep their current context intact, while others want to avoid having the same note open in multiple tabs. Over the years, there has been a growing demand for a more customizable and intuitive tab navigation experience in Obsidian.

Vertical Tabs addresses these concerns by offering a universal, seamless, and consistent solution that integrates smoothly across the entire Obsidian ecosystem. This article delves into the design and mechanics of tab navigation strategies, providing you with the essence to tailor your tab navigation to your specific workflow.

Vertical Tabs comes equipped with [[#Preset strategies|five powerful preset strategies]], each designed to cater to different user needs. If you're looking for quick recommendations on which strategy to choose, refer to [[abc of advanced tab navigation|the ABC of advanced tab navigation]].

For those who find the presets insufficient, Vertical Tabs also allows you to create custom navigation strategies. If you're considering this route, it's essential to fully grasp the concepts discussed in this article to make the most of the customization options available.

## Navigability

At the heart of tab navigation lies the concept of *navigability*. In Obsidian, a tab functions much like a tab in a web browser, while a note (or more broadly, a *view*) is akin to a web page. Each view has a property called *navigation*. If a view’s *navigation* is set to *true*, clicking a link within that view will replace its content with the new note in the same tab.

From a user’s perspective, this is straightforward: if a view is navigable, it will be replaced when a new note is opened. Conversely, if a view’s *navigation* is *false*, Obsidian will open the new note in a separate tab. By default, all views are navigable. For a deeper dive, you can refer to [the official explanation of navigability](https://www.youtube.com/watch?v=sbncjuJDAyU&t=1078s).

> [!WARNING] Warning
> The *navigation* property is essential for certain core features, such as the built-in word counter, to function correctly. **Setting it to *false* is generally discouraged.**

It’s important to note that navigability is a property of *views*, not tabs. However, the state of a tab can influence or override the navigability of the views it contains. For example, if a tab is pinned, its view is treated as non-navigable, effectively setting its *navigation* to *false*. Vertical Tabs dynamically manipulates tab states to adjust navigability based on user preferences.

To fine-tune navigability, Vertical Tabs offers three modifiers: [[smart navigation]], [[ephemeral tabs]], and [[open in new tab]]. We’ll explore them in detail in the following.

### Modifier: Smart navigation

When you open a new note in Obsidian, the app searches for the first navigable view (referred to as the *target*) and replaces its content with the new note. However, this target might reside in a different tab group, which can disrupt your workflow and make the experience with Vertical Tabs less intuitive.

Tab groups in Vertical Tabs are designed to provide a natural context for your notes. For example, you might have one group dedicated to personal notes and another for work-related meetings. If you’re working on a personal note and click a link, Obsidian’s default behavior might replace a navigable meeting note in another group with the newly opened personal note. This unpredictability has led to frustration among users, as the location of newly opened notes can feel inconsistent.

[[smart navigation|Smart navigation]] solves this issue by marking all tabs outside the active group as non-navigable. This forces Obsidian to open the new note in a tab within the current active group, preserving the context of your workspace. With smart navigation enabled, you can maintain a clear separation between different tab groups, ensuring that your workflow remains organized and predictable.

### Modifier: Ephemeral tabs

It’s not uncommon to forget where a specific piece of information is stored in your notes. While searching can help, it becomes challenging if you can’t recall the exact keywords. A practical solution is to quickly skim through potential notes to locate the one you need. Obsidian is well-suited for this task: by default, opening a new note replaces the current view, keeping the number of open tabs manageable.

However, this approach has a downside. Once you’ve found the note you’re looking for and start working on something else, there’s a risk of accidentally replacing it with another note. If you haven’t noted its title or created a link to it, the note can easily get lost again. This can be particularly frustrating for knowledge workers who juggle multiple tasks and ideas simultaneously.

To address this, many code editors and IDEs implement a feature called [[ephemeral tabs|ephemeral tabs]]. In Vertical Tabs, an ephemeral tab is navigable, allowing you to browse through multiple notes without cluttering your workspace with too many tabs. Once you’ve found the note you need, you can double-click the tab header to make it non-ephemeral, ensuring it won’t be replaced accidentally.

Ephemeral tabs strike a balance between efficient browsing and maintaining focus, making them a valuable tool for users who frequently navigate through their notes.

### Modifier: Open in new tab

For users who prefer a streamlined workflow without the need for ephemeral tabs, Vertical Tabs offers the [[open in new tab]] modifier. This option is ideal for those who have a highly organized note system and rarely find themselves needing to search through multiple notes by skimming.

When [[open in new tab]] is enabled, all views are set to be non-navigable by default. This means that every time you open a new note, it will always open in a new tab, ensuring that your current context remains intact. This eliminates the need for double-clicking to make tabs non-ephemeral, as all tabs are inherently non-ephemeral under this setting.

This modifier is particularly useful for users who want to maintain a clear and consistent workspace without the risk of accidentally replacing notes. However, it’s important to note that [[open in new tab]] is mutually exclusive with both [[smart navigation]] and [[ephemeral tabs]], as it effectively makes all views non-navigable.

> [!NOTE] Note
> - You can enable both [[smart navigation]] and [[ephemeral tabs]].
> - [[open in new tab|Open in new tab]] and [[smart navigation]] are mutually exclusive.
> - [[open in new tab|Open in new tab]] and [[ephemeral tabs]] are mutually exclusive.

## Navigation tasks

Navigation tasks are automated processes that Vertical Tabs executes whenever your workspace updates. These tasks are designed to enhance your workflow by ensuring efficiency and consistency in how notes are opened and managed. Vertical Tabs includes two types of navigation tasks: [[tab deduplication]] and link tasks.

### Tab deduplication

When [[tab deduplication]] is enabled, Vertical Tabs checks whether the note you’re trying to open is already open in another tab. If it is, the plugin will automatically switch to the existing tab instead of opening a duplicate. This feature helps keep your workspace tidy by preventing the same note from being opened multiple times across different tabs.

Vertical Tabs offers [[tab deduplication|several customization options]] to refine the scope of deduplication. For example, you can configure it to deduplicate only within the current tab group or across all groups, depending on your preferences.

### Link tasks

Link tasks are internal processes that Vertical Tabs executes when you click a link with [[tab deduplication]] enabled. These tasks ensure that the correct section of the note, as specified by the link, is automatically scrolled into view. This is particularly useful for navigating long notes or documents, as it saves you the effort of manually searching for the relevant section. Unlike [[tab deduplication]], link tasks are non-configurable and operate in the background.

## Preset strategies

Vertical Tabs provides five preset navigation strategies other than Obsidian’s default: Obsidian+, Explorer, IDE, Notebook and Prefer new tab.

### Specifications

The following table lists the preset configurations.

| <div style="width: 150px;">Preset Mode</div> | <div style="width: 150px;">[[smart navigation\|Smart Navigation]]</div> | <div style="width: 130px;">[[ephemeral tabs\|Ephemeral Tabs]]</div> | <div style="width: 140px;">[[open in new tab\|Open in New Tab]]</div> | <div style="width: 150px;">[[tab deduplication\|Tab Deduplication]]</div> |
| -------------------------------------------: | :---------------------------------------------------------------------: | :-----------------------------------------------------------------: | :-------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
|                                     Obsidian |                                    ○                                    |                                  ○                                  |                                   ○                                   |                                     ○                                     |
|                          Obsidian+ (Default) |                                    ●                                    |                                  ○                                  |                                   ○                                   |                                     ○                                     |
|                                     Explorer |                                    ●                                    |                                  ●                                  |                                   ○                                   |                                     ○                                     |
|                                          IDE |                                    ●                                    |                                  ●                                  |                                   ○                                   |                                     ●                                     |
|                                     Notebook |                                    ○                                    |                                  ○                                  |                                   ●                                   |                                     ●                                     |
|                               Prefer new tab |                                    ○                                    |                                  ○                                  |                                   ●                                   |                                     ○                                     |

\* ● Enabled Feature ○ Not Enabled
