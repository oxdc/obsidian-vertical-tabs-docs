---
title: Menus
---
## Overview

The API allows you to add custom menu items to tab and group context menus. You can also manipulate existing menu sections by removing or reordering them.

You can customize menus using two approaches:  
- If you have a `VerticalTabsAPI` instance, use `api.onTabMenu`, `api.onTabsMenu`, or `api.onGroupMenu` to register your handlers.
- If you don’t have access to the API instance, listen for the corresponding workspace events (e.g., `vertical-tabs:on-tab-menu`).

Use only one method per handler to avoid duplicate registrations.

## Tab menu customization

Register a callback to add custom items to tab context menus:

```typescript
const ref = api.onTabMenu((menu, leaf) => {
  menu.addItem((item) => {
    item
      .setTitle("Custom Action")
      .setIcon("star")
      .setSection("my-plugin")
      .onClick(() => {
        console.log("Action for tab:", leaf.id);
      });
  });
});
```

The callback receives:
- `menu` - The Menu instance being built
- `leaf` - The WorkspaceLeaf the menu is for

**Unregistering callbacks:**

The callback returns a `MenuEventRef` that can be used to unregister:

```typescript
// Register callback
const ref = api.onTabMenu((menu, leaf) => {
  // Add menu items
});

// Later: unregister callback
ref.unload();
```

Always unregister menu callbacks when your plugin unloads:

```typescript
export default class MyPlugin extends Plugin {
  private tabMenuRef?: MenuEventRef;

  async onload() {
    const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
    if (vtPlugin?.api) {
      this.tabMenuRef = vtPlugin.api.onTabMenu((menu, leaf) => {
        // Add custom items
      });
    }
  }

  async onunload() {
    this.tabMenuRef?.unload();
  }
}
```

## Multi-tab menu customization

> [!VERSION]
> **Available since:** API v1.4.0, Vertical Tabs v0.26.4

When multiple tabs are selected, right-clicking on any of them will open a dedicated multi-select menu, rather than the standard single-tab menu. In this context, the `onTabMenu` callback will *not* be invoked. Instead, you should use the `onTabsMenu` API to customize the multi-tab context menu.

```typescript
const ref = api.onTabsMenu((menu, leaves) => {
  menu.addItem((item) => {
    item
      .setTitle(`Custom action for ${leaves.length} tabs`)
      .setIcon("star")
      .setSection("my-plugin")
      .onClick(() => {
        console.log("Action for tabs:", leaves.map((leaf) => leaf.id));
      });
  });
});
```

The callback receives:
- `menu` — The `Menu` instance being built
- `leaves` — An array of `WorkspaceLeaf` objects representing the selected tabs

Unregister this callback just like `onTabMenu` by calling `ref.unload()`.

## Group menu customization

Group menu customization works identically to tab menus:

```typescript
const ref = api.onGroupMenu((menu, group) => {
  menu.addItem((item) => {
    item
      .setTitle("Custom Group Action")
      .setIcon("folder")
      .setSection("my-plugin")
      .onClick(() => {
        console.log("Action for group:", group.id);
      });
  });
});

// Later: unregister
ref.unload();
```

## Workspace events

> [!VERSION]
> **Available since:** API v1.4.0, Vertical Tabs v0.26.4

You can also respond to menu events using Obsidian's standard event system with `app.workspace.on(...)` instead of the callback API. These events are emitted immediately after Vertical Tabs adds its built-in items. Note that callback listeners run first (in the order they were registered), followed by workspace event listeners (also in registration order).

> [!WARNING]
> Do **not** register both a callback (such as `api.onTabMenu`) and the corresponding workspace event handler for the same action, or your handler will run twice.

These events are only available when Vertical Tabs is installed and enabled.

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:on-tab-menu", (menu, leaf) => {
    menu.addItem((item) => {
      item
        .setTitle("Custom Action")
        .setIcon("star")
        .setSection("my-plugin");
    });
  })
);

this.registerEvent(
  this.app.workspace.on("vertical-tabs:on-tabs-menu", (menu, leaves) => {
    menu.addItem((item) => {
      item
        .setTitle(`Custom action for ${leaves.length} tabs`)
        .setSection("my-plugin");
    });
  })
);

this.registerEvent(
  this.app.workspace.on("vertical-tabs:on-group-menu", (menu, group) => {
    menu.addItem((item) => {
      item
        .setTitle("Custom Group Action")
        .setIcon("folder")
        .setSection("my-plugin");
    });
  })
);
```

Event payloads mirror the callback API: `(menu, leaf)` for tab menus, `(menu, leaves)` for multi-tab menus, and `(menu, group)` for group menus.

## Menu sections

Menu items are organized into sections. Use `setSection()` to group your items:

```typescript
api.onTabMenu((menu, leaf) => {
  menu.addItem((item) => {
    item
      .setTitle("Action 1")
      .setSection("my-plugin");
  });
  
  menu.addItem((item) => {
    item
      .setTitle("Action 2")
      .setSection("my-plugin");
  });
});
```

Items in the same section will be grouped together visually.

## Manipulating existing sections

### Removing sections

Remove all menu items in a section:

```typescript
api.onTabMenu((menu, leaf) => {
  // Remove a section by name
  api.removeMenuSection(menu, "unwanted-section");
  
  // Add your own items
  menu.addItem((item) => {
    item.setTitle("My Action");
  });
});
```

### Reordering sections

Move a section to a new position in the menu:

```typescript
api.onTabMenu((menu, leaf) => {
  // Place "my-section" after "another-section"
  api.placeSectionAfter(menu, "my-section", "another-section");
  
  // Place section at the front (pass undefined for after)
  api.placeSectionAfter(menu, "my-section", undefined);
});
```

If the target section is not found, the operation does nothing.

### Replacing built-in customization menu

Replace Vertical Tabs' built-in customization menu items with your own:

```typescript
api.onTabMenu((menu, leaf) => {
  // 1. Create your custom menu items with a section name
  menu.addItem((item) => {
    item
      .setTitle("Set Custom Icon")
      .setIcon("star")
      .setSection("my-customization")
      .onClick(async () => {
        await api.setTabIcon(leaf.id, "star", "my-plugin");
      });
  });
  
  menu.addItem((item) => {
    item
      .setTitle("Set Custom Color")
      .setIcon("palette")
      .setSection("my-customization")
      .onClick(async () => {
        await api.setTabColor(leaf.id, "#ff0000", "my-plugin");
      });
  });
  
  // 2. Place your section after "customization"
  api.placeSectionAfter(menu, "my-customization", "customization");
  
  // 3. Remove the built-in "customization" section
  api.removeMenuSection(menu, "customization");
});
```

This pattern works for both tab and group menus. The same approach applies to `onGroupMenu()` callbacks.

## Identifying Vertical Tabs menus

> [!VERSION]
> **Available since:** API v1.0.1, Vertical Tabs v0.21.0

Use `isVTMenu()` to check whether a menu was created by Vertical Tabs. This is intended for plugins that monkey-patch `Menu.showAtPosition` to intercept all menus. It lets you identify which menus originated from Vertical Tabs:

```typescript
const original = Menu.prototype.showAtPosition;
Menu.prototype.showAtPosition = function (position) {
  if (api.isVTMenu(this)) {
    // This menu was created by Vertical Tabs
  }
  return original.call(this, position);
};
```

When `isVTMenu()` returns `true`, the menu's `VTMenuAttribute` property identifies which specific menu was opened:

| `VTMenuAttribute`         | Description                                  |
| ------------------------- | -------------------------------------------- |
| `"vt-tab-menu"`           | Tab context menu                             |
| `"vt-multi-select-menu"`  | Multi-select tab context menu                |
| `"vt-group-menu"`         | Group context menu                           |
| `"vt-sort-menu"`          | Sort menu in the navigation header           |
| `"vt-tab-switcher-menu"`  | Tab switcher menu                            |
| `"vt-status-bar-menu"`    | Zen mode status bar menu                     |
| `"vt-nav-history-menu"`   | Navigation history menu (back/forward)       |

```typescript
const original = Menu.prototype.showAtPosition;
Menu.prototype.showAtPosition = function (position) {
  if (api.isVTMenu(this)) {
    const attr = this.VTMenuAttribute;
    if (attr === "vt-tab-menu") {
      // Tab context menu
    } else if (attr === "vt-group-menu") {
      // Group context menu
    }
  }
  return original.call(this, position);
};
```

## Identifying built-in menu actions

> [!VERSION]
> **Available since:** API v1.4.0, Vertical Tabs v0.26.4

Built-in items on Vertical Tabs context menus set `MenuItem.VTMenuAction` to a stable identifier. Separators, items added by other plugins, and items copied from Obsidian's pane menu do not have this property.

```typescript
api.onTabMenu((menu, leaf) => {
  menu.items = menu.items.filter((item) => item.VTMenuAction !== "set-icon");
});
```

### Tab menu (`vt-tab-menu`)

| `VTMenuAction` | Description |
| -------------- | ----------- |
| `"bookmark"` | Bookmark |
| `"bookmark-and-close"` | Bookmark and close |
| `"default-view"` | Default group view |
| `"continuous-view"` | Continuous group view |
| `"column-view"` | Column group view |
| `"mission-control-view"` | Mission control group view |
| `"close"` | Close |
| `"close-others"` | Close others |
| `"close-tabs-to-top"` | Close tabs to the top |
| `"close-tabs-to-bottom"` | Close tabs to the bottom |
| `"close-all"` | Close all |
| `"pin"` | Pin or unpin |
| `"rename"` | Rename |
| `"set-color"` | Change color |
| `"set-icon"` | Change icon |
| `"move-to-new-window"` | Move to new window |
| `"split-right"` | Split right |
| `"split-down"` | Split down |
| `"open-in-new-window"` | Open in new window |
| `"move-tab"` | Move this tab to... |
| `"new-group"` | Move to a new group |
| `"new-group-with-name"` | Move to a new group with name... |
| `"copy-as-internal-link"` | Copy as internal link |
| `"copy-as-embed"` | Copy as embed |
| `"insert-as-internal-link"` | Insert as internal link |
| `"insert-as-embed"` | Insert as embed |
| `"back"` | Back |
| `"forward"` | Forward |
| `"browse-history"` | Browse history |
| `"bookmark-history"` | Bookmark history |
| `"open-history-in-new-group"` | Open history in new group |
| `"clear-history"` | Clear history |
| `"inactive"` | Inactive placeholder (deferred tabs) |
| `"load-history"` | Load history (deferred tabs) |
| `"zoom"` | Zoom submenu (desktop) |
| `"zoom-in"` | Zoom in |
| `"zoom-out"` | Zoom out |
| `"reset-zoom"` | Reset zoom |
| `"more-options"` | More options |
| `"toggle-reader-mode"` | Toggle reader mode (webview) |
| `"save-to-vault"` | Save to vault (webview) |

Group-view items appear only when a single group is visible. History items appear only for navigable tabs. Zoom items appear only when per-tab zoom is enabled. `"move-tab"` is desktop-only; on mobile the move destinations are added directly to the parent menu. `"new-group"` and `"new-group-with-name"` are set on those destination items.

### Multi-select menu (`vt-multi-select-menu`)

| `VTMenuAction` | Description |
| -------------- | ----------- |
| `"close"` | Close selected tabs |
| `"pin-all"` | Pin all |
| `"unpin-all"` | Unpin all |
| `"set-color"` | Change color |
| `"set-icon"` | Change icon |
| `"move-to-new-window"` | Move to new window |
| `"move-tabs"` | Move selected tabs to... |
| `"new-group"` | Move to a new group |
| `"new-group-with-name"` | Move to a new group with name... |
| `"copy-as-internal-links"` | Copy as internal links |
| `"copy-as-embeds"` | Copy as embeds |
| `"bookmark"` | Bookmark selected tabs |

### Group menu (`vt-group-menu`)

| `VTMenuAction` | Description |
| -------------- | ----------- |
| `"hide"` | Show or hide |
| `"rename"` | Rename |
| `"set-color"` | Change color |
| `"set-icon"` | Change icon |
| `"default-view"` | Default view |
| `"continuous-view"` | Continuous view |
| `"column-view"` | Column view |
| `"mission-control-view"` | Mission control view |
| `"bookmark-all"` | Bookmark all |
| `"bookmark-and-close-all"` | Bookmark and close all |
| `"close-all"` | Close all |
| `"copy-as-internal-links"` | Copy as internal links |
| `"copy-as-list"` | Copy as list |
| `"copy-as-embeds"` | Copy as embeds |
| `"insert-as-internal-links"` | Insert as internal links |
| `"insert-as-list"` | Insert as list |
| `"insert-as-embeds"` | Insert as embeds |

## Common patterns

### Conditional menu items

Add menu items based on context:

```typescript
api.onTabMenu((menu, leaf) => {
  // Only add for markdown files
  const view = leaf.view;
  if (view.getViewType() === "markdown") {
    menu.addItem((item) => {
      item
        .setTitle("Markdown Action")
        .setSection("my-plugin")
        .onClick(() => {
          // Handle markdown-specific action
        });
    });
  }
});
```

### Accessing tab metadata

Use the API to check current metadata:

```typescript
api.onTabMenu(async (menu, leaf) => {
  const metadata = await api.getTabMetadata(leaf.id);
  
  menu.addItem((item) => {
    const hasIcon = !!metadata?.icon;
    item
      .setTitle(hasIcon ? "Remove Icon" : "Add Icon")
      .setSection("my-plugin")
      .onClick(async () => {
        if (hasIcon) {
          await api.clearTabMetadata(leaf.id, "my-plugin");
        } else {
          await api.setTabIcon(leaf.id, "star", "my-plugin");
        }
      });
  });
});
```

### Submenus

Create nested menu items:

```typescript
api.onTabMenu((menu, leaf) => {
  menu.addItem((item) => {
    item
      .setTitle("Color")
      .setSection("my-plugin");
    
    const submenu = item.setSubmenu();
    
    submenu.addItem((subitem) => {
      subitem
        .setTitle("Red")
        .onClick(async () => {
          await api.setTabColor(leaf.id, "#ff0000", "my-plugin");
        });
    });
    
    submenu.addItem((subitem) => {
      subitem
        .setTitle("Blue")
        .onClick(async () => {
          await api.setTabColor(leaf.id, "#0000ff", "my-plugin");
        });
    });
  });
});
```
