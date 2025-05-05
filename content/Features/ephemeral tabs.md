---
title: Ephemeral Tabs
---
## What are ephemeral tabs?

Ephemeral tabs are a powerful feature in Vertical Tabs that allow you to quickly browse through multiple notes without cluttering your workspace with too many tabs. They're designed for efficient exploration and work similarly to VSCode.

Ephemeral tabs are visually distinct — they appear with *italicized titles* in your tab list, making them easy to identify at a glance.

## How ephemeral tabs work

At its core, ephemeral tabs implement a dynamic navigation modifier that helps maintain a clean workspace. For enthusiastic users, you may refer to the guide of [[advanced tab navigation]] for details on the implementation.

When you open a new note while an ephemeral tab is active, the new content replaces the ephemeral tab's content instead of creating a new tab. This behavior is consistent regardless of how you open the note — whether by clicking a link, using the file browser, or through a plugin. 

Previous content that gets replaced isn't lost — it's automatically added to the ephemeral tab's history, allowing you to navigate back if needed. Each tab group can have at most one ephemeral tab at any time, which helps maintain a balanced workspace layout.

Non-ephemeral tabs function similarly to pinned tabs. Their content won't be replaced when clicking links — instead, clicking a link in a non-ephemeral tab opens a new ephemeral tab in the same tab group. This makes non-ephemeral tabs ideal for notes you're actively working on or reference frequently. They essentially protect your working context by ensuring their content won't be replaced when you open new material.

Ephemeral tabs, in contrast, embrace change. Their content will be replaced whenever you open any new note, making them perfect for exploration when you're not sure which note contains the information you need. This dynamic nature helps maintain a clean workspace by reducing tab clutter while still allowing you to browse extensively through your knowledge base.

## Making tabs non-ephemeral

You can convert an ephemeral tab to a non-ephemeral tab in several ways:

- **Double-click** to open new note in the file browser;
- **Double-click** the tab header;
- Open a note from the **Quick Switcher**;
- **Drag** the tab to reorder it;
- **Pin** the tab;
- Execute the command "**Set all tabs non-ephemeral**";
- "**Close other tabs**" through the context menu.

## Benefits and use cases

Ephemeral tabs provide an ideal balance between efficient exploration and workspace organization. They excel in several scenarios:

When researching a topic across multiple notes, ephemeral tabs let you quickly review content without creating a tab for each visited note. This is particularly useful when following trails of linked references or searching for specific information scattered throughout your knowledge base.

For users who frequently navigate between reference materials, ephemeral tabs maintain context by keeping permanent resources open in non-ephemeral tabs while using a single ephemeral tab for temporary exploration. When you discover valuable information during browsing, simply double-click to convert the ephemeral tab to a non-ephemeral tab, preserving that content while continuing your research.

By combining ephemeral tabs with other Vertical Tabs features like Tab Deduplication, you can create a highly efficient note navigation system tailored to your workflow, maintaining focus while minimizing distractions from excessive open tabs. For more advanced tab navigation options, explore the [[advanced tab navigation]] guide to further customize your workflow.
