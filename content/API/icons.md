---
title: Icon Rendering
---
## Overview

> [!VERSION]
> **Available since:** API v1.3.0, Vertical Tabs v0.26.3

Other plugins can draw custom icons into the tab and group icon slots in the Vertical Tabs sidebar by listening to workspace events. Unlike using [[customization#Setting tab icon|setTabIcon]], you are not restricted to Obsidian-registered icon IDs. You can inject emoji, images, custom SVG, or any other DOM content you like.

There is no direct `VerticalTabsAPI` method for this functionality. Instead, you should register listeners using `this.registerEvent(this.app.workspace.on(...))`. Keep in mind that if Vertical Tabs is not installed or not enabled, these events will not be fired.

## Why not use `setTabIcon`?

When you call `setTabIcon`, the chosen Lucide or Obsidian icon name is saved on the **tab** itself. The icon will remain on the tab even if the opened note changes.

In contrast, some plugins (such as [Iconize](https://github.com/FlorianWoelki/obsidian-iconize) and [Iconic](https://github.com/gfxholo/iconic)) associate icons with the **note** and use sets of **externally managed SVGs**. If the file displayed in a leaf changes, the icon should update accordingly. Workspace render events are triggered on each tab refresh, including when the note changes, and provide the current leaf so your code can check and display the latest file’s icon.

## Rendering tab icons

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:render-tab-icon", (leaf, iconEl, tabEl) => {
    const path = leaf.getViewState().state?.file as string | undefined;
    if (!path) return;

    iconEl.empty();
    iconEl.createSpan({ text: "⭐" });
  })
);
this.app.workspace.trigger("vertical-tabs:request-icon-refresh");
```

The event handler receives:

- `leaf`: the `WorkspaceLeaf` associated with the tab
- `iconEl`: the element that displays the icon (`HTMLElement`)
- `tabEl`: the sidebar row containing the tab (`HTMLElement`)

Triggering `request-icon-refresh` is necessary when your plugin loads after Vertical Tabs is already running, so that already-displayed tabs get their icons painted. If Vertical Tabs is not present, triggering this event has no effect.

## Deferred tabs

[Obsidian 1.7.2](https://obsidian.md/changelog/2024-09-19-desktop-v1.7.2/) introduced [deferred views](https://docs.obsidian.md/plugins/guides/defer-views): background tabs keep their layout state, but the full view is not created until the tab becomes visible. That reduces startup time and memory use when many notes are open.

A deferred leaf uses a placeholder view (`DeferredView`) instead of the real view type (`MarkdownView`, `FileView`, and so on). Check `leaf.isDeferred` (available since Obsidian v1.7.2) to see whether a tab is still deferred.

Because the file view has not been constructed yet, `leaf.view.file` is empty. If your handler relies on that property, the icon will stay missing until the user activates the tab and Obsidian loads the view. Read the file path from the leaf's persisted view state instead. It is available even while the tab is deferred:

```typescript
const path = leaf.getViewState().state?.file as string | undefined;
```

Do not call `leaf.loadIfDeferred()` from a render handler just to reach `leaf.view.file`. That would load every background tab on each refresh and cancel the performance benefit of deferred views.

## Rendering group icons

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:render-group-icon", (group, iconEl, groupEl) => {
    iconEl.empty();
    iconEl.createSpan({ text: "📁" });
  })
);
this.app.workspace.trigger("vertical-tabs:request-icon-refresh");
```

The event handler receives:

- `group`: the `WorkspaceParent` representing the group
- `iconEl`: the icon container element (`HTMLElement`)
- `groupEl`: the sidebar row for the group (`HTMLElement`)

## Requesting a refresh

If your icon data changes (for example when a pack is loaded, a rule is updated, or the user changes an icon), instruct Vertical Tabs to re-run all registered icon handlers:

```typescript
this.app.workspace.trigger("vertical-tabs:request-icon-refresh");
```

This call will update every visible tab and group icon slot.

## When events are triggered

Vertical Tabs first paints its default icon, then triggers the relevant render event for plugins to modify the icon slot.

Events will **not** be triggered in the following situations:

- The user has set a Vertical Tabs custom icon (through `setTabIcon`, `setGroupIcon`, or the "Change icon" UI)
- The Alt+hover drag handle is visible
- A favicon is displayed for a webview

Listeners are called in registration order. If multiple listeners make changes, the last one to modify the icon will determine the result shown. These events affect only the Vertical Tabs sidebar (vertical tabs), not native Obsidian tab headers (horizontal tabs).

## Tips

- Modify `iconEl` and its children to render your icon. You can also use `tabEl` or `groupEl` if you need to access the entire row.
- It is best to clear `iconEl` using `iconEl.empty()` before adding your content.
- Keep event handlers synchronous and lightweight, because they run for every visible tab during a refresh.
- If you load icons asynchronously, check that `iconEl.isConnected` is still true and that the `leaf` continues to display the same file before updating the icon.
- Using `this.registerEvent` will automatically detach your event listener when your plugin is unloaded. Do not call a refresh from your `onunload()` method, because listeners are still registered at that point, doing so would cause your icons to be re-applied again.
- Only combine these render handlers with [[events#Metadata changes|metadata events]] if you are also using `setTabIcon`. Render handlers themselves do not write to Vertical Tabs metadata.
