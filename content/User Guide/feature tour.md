---
title: Feature Tour
---
## Vertical Tabs

This plugin displays open tabs in a vertical list for easier navigation. By default, Vertical Tabs will [[name wrapping|wrap tab titles]] so you can see the full file name. You can also choose to [[name trimming|trim names]] in the [[settings]].

You can [[manual sorting|manually sort tabs]] by [[drag and drop|dragging and dropping]] them, or enable [[automatic sorting]] (<img src="/Attachments/lucide-arrow-up-narrow-wide.svg" data-type="icon" />) to order tabs by name, pinned state, or recent activity. Vertical Tabs will [[sync ui|keep the UI in sync]], ensuring that the order of horizontal and vertical tabs remains consistent.

Starting from Obsidian 1.8, you can [[tab preview|preview a tab]] by hovering over it while holding the <kbd>Ctrl</kbd> (Windows) or <kbd>Command</kbd> (MacOS) key. The same feature is available in Vertical Tabs.

To quickly create a new tab, hover your mouse near the end of a group, and a [[new tab]] button will appear.

## Stay organized

In Vertical Tabs, you can organize tabs into [[tab group|tab groups]]. Behind the scenes, a tab group is essentially a workspace split in Obsidian. This ensures that your workspace layout remains consistent when installing, uninstalling, or reloading Vertical Tabs. It also guarantees that your workspace structure is automatically preserved after restarting Obsidian.

[[tab group|Tab groups]] (or workspace splits) are organized topologically in Obsidian, meaning that [[drag and drop|dragging and dropping]] groups to rearrange them will *not* affect the overall layout.

To make full use of [[tab group|tab groups]], you can click the edit button (<img src="/Attachments/lucide-pencil.svg" data-type="icon" />) to [[renaming a group|rename them]]. However, don’t waste time searching for the *perfect* name or category for your tabs!

The golden rule is to “**keep it simple**.” You can group your tabs based on projects, responsibility scopes (e.g., personal, work), categories (e.g., tabs to review, reference tabs), status (e.g., to-do tabs, completed tabs), or purpose (e.g., reading, research). If no clear structure emerges, keep all your tabs in a single group. Don’t overcomplicate it—if the number of groups is small, renaming them isn’t necessary as long as you can find what you need. Avoid trying to replicate your folder structure.

For each [[tab group]], you can switch between different [[group views]]: [[default view]] displays only one tab at a time; [[continuous view]] allows you to edit multiple tabs as a continuous document; [[column view]] displays tabs side by side; and [[Mission Control view]] previews all tabs at once, making it easy to find what you need.

## Stay focused

I’ve designed Vertical Tabs to help you stay focused. When you open too many tabs, your [[horizontal tabs]] become too narrow to read. In the [[settings]], you can configure Obsidian to [[show active tabs only]] (<img src="/Attachments/lucide-app-window.svg" data-type="icon" />), maximizing the width of the active tab.

If you have more than two or three groups, your workspace can become cluttered. [[zen mode|Zen Mode]] (<img src="/Attachments/lucide-focus.svg" data-type="icon" />) helps you focus by hiding all other tabs and groups, leaving only the note you’re working on. You can also click the eye icon (<img src="/Attachments/lucide-eye.svg" data-type="icon" />) to [[hide groups|hide specific groups]].

If your vertical list grows too long, click the folding button (<img src="/Attachments/lucide-fold-vertical.svg" data-type="icon" />) to [[collapse groups]]. When you need to locate the active note, click the target icon (<img src="/Attachments/lucide-crosshair.svg" data-type="icon" />) to [[reveal active tab|reveal it]]. You can also [[hide sidebar tabs]] (<img src="/Attachments/lucide-panel-left.svg" data-type="icon" />) to keep the Vertical Tabs interface clean and distraction-free.

## Easily navigate

By default, Obsidian allows you to zoom in or out on the entire UI using <kbd>Ctrl</kbd> + <kbd>+/-</kbd> (Windows) or <kbd>Command</kbd> + <kbd>+/-</kbd> (macOS). If you need finer control—allowing each tab to have a different zoom level without affecting other parts of the UI—you can enable [[per-tab zooming]] in the [[settings]]. This is particularly useful when working with notes that contain wide tables or images, especially on smaller laptop screens.

Obsidian provides navigation buttons (<img src="/Attachments/lucide-arrow-left.svg" data-type="icon" />/<img src="/Attachments/lucide-arrow-right.svg" data-type="icon" />) to move backward or forward between notes. However, Vertical Tabs extends this functionality. By right-clicking a vertical tab, you gain access to the full [[tab history]] through the context menu, allowing you to navigate, browse, bookmark, or clear the history. You can even open the tab history as a new [[tab group]].

For those who prefer keyboard navigation, Obsidian provides shortcuts: <kbd>Ctrl</kbd> + <kbd>1–8</kbd> (Windows) or <kbd>Command</kbd> + <kbd>1–8</kbd> (macOS) to jump to the first eight tabs in the current [[tab group]], and <kbd>Ctrl</kbd> + <kbd>9</kbd> (Windows) or <kbd>Command</kbd> + <kbd>9</kbd> (macOS) to jump to the last tab. However, when more than nine tabs are open, this becomes limiting, forcing users to rely on a mouse or trackpad, disrupting the navigation experience.

Vertical Tabs introduces the [[enhanced keyboard tab switcher]], adding two additional shortcuts to extend tab navigation. Pressing <kbd>Ctrl</kbd> + <kbd>→</kbd> (Windows) or <kbd>Command</kbd> + <kbd>→</kbd> (macOS) offsets the tab indices, allowing <kbd>Ctrl</kbd> + <kbd>1–8</kbd> (Windows) or <kbd>Command</kbd> + <kbd>1–8</kbd> (macOS) to access tabs 9–16. The reverse action applies with <kbd>Ctrl</kbd> + <kbd>←</kbd> (Windows) or <kbd>Command</kbd> + <kbd>←</kbd> (macOS). While adjusting indices, Vertical Tabs will automatically scroll the list to ensure the tabs in range remain visible.

## Take Control of Your Tab Management

By default, Obsidian behaves like a web browser—clicking a link or opening a new note replaces the content in the current tab, and reopening a note results in multiple duplicate tabs. While this approach has its benefits, it doesn’t feel like working with a physical notebook or a fully-featured editor like VSCode.

In Vertical Tabs, tab behavior is managed by the [[navigation strategy]], which determines how and where new tabs open. If Obsidian’s [[default strategy]] doesn’t suit your workflow, Vertical Tabs offers [[advanced tab navigation]] with [[advanced tab navigation|five presets]]. You can also [[custom strategy|create a custom navigation strategy]] to fine-tune tab behavior according to your preferences.

The [[advanced tab navigation]] system in Vertical Tabs introduces three key features: [[smart navigation]], [[ephemeral tabs]], and [[tab deduplication]].

- **Smart Navigation** ensures that newly opened tabs always appear in the same group as the tab you’re working in, keeping your workspace structured. This is recommended for all users.
- **Ephemeral Tabs** (marked with italicized titles) automatically replace themselves when you open a new note and close if you navigate away. This is useful for quickly skimming through multiple notes without cluttering your workspace with unnecessary tabs.
- **Tab Deduplication** prevents duplicate tabs by redirecting you to an already open note instead of creating a new tab.

With these features, Vertical Tabs gives you complete control over how you navigate and manage your notes. If you choose to [[custom strategy|customize your own navigation strategy]], you’ll unlock even more options. For example, you can disable [[auto close ephemeral tabs|auto-closing]] to retain all ephemeral tabs, or fine-tune tab deduplication by specifying whether to deduplicate [[deduplicate sidebar tabs|sidebar tabs]], [[deduplicate popup tabs|popup tabs]], or [[deduplicate only same-group tabs|only tabs within the same group]].

If you love the functionality of [[advanced tab navigation]] but prefer not to use a vertical tab list, you can enable the [[background mode]]. This allows you to enjoy the same streamlined navigation experience without displaying the Vertical Tabs interface, keeping your workspace clean and distraction-free.
