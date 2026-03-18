---
title: Menus
---
## Overview

The API allows you to add custom menu items to tab and group context menus. You can also manipulate existing menu sections by removing or reordering them.

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

| `VTMenuAttribute`       | Description                                  |
| ----------------------- | -------------------------------------------- |
| `"vt-tab-menu"`         | Tab context menu                             |
| `"vt-group-menu"`       | Group context menu                           |
| `"vt-sort-menu"`        | Sort menu in the navigation header           |
| `"vt-tab-switcher-menu"`| Tab switcher menu                            |
| `"vt-status-bar-menu"`  | Zen mode status bar menu                     |
| `"vt-nav-history-menu"` | Navigation history menu (back/forward)       |

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
