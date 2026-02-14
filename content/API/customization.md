---
title: Customization
---
## Overview

The API allows you to customize tabs and groups with custom icons, colors, and titles. All customization methods are asynchronous and return promises.

## Tab customization

### Setting tab icon

Set a custom icon for a tab. You can use built-in Lucide icon names or register custom icons:

#### Using built-in icons

```typescript
const leaf = api.getActiveLeaf();
if (leaf) {
  await api.setTabIcon(leaf.id, "star", "my-plugin");
}
```

#### Using custom icons

To use a custom icon, first register it with Obsidian using `addIcon`, then reference it by its ID:

```typescript
import { addIcon } from "obsidian";

// Register a custom icon (do this once during plugin load)
addIcon("my-custom-icon", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40"/></svg>');

// Use the custom icon on a tab
const leaf = api.getActiveLeaf();
if (leaf) {
  await api.setTabIcon(leaf.id, "my-custom-icon", "my-plugin");
}
```

### Setting tab color

Set a custom color for a tab using any valid CSS color:

```typescript
await api.setTabColor(leaf.id, "#ff0000", "my-plugin");
await api.setTabColor(leaf.id, "red", "my-plugin");
await api.setTabColor(leaf.id, "rgb(255, 0, 0)", "my-plugin");
```

### Setting tab title

Override the tab's display title:

```typescript
await api.setTabTitle(leaf.id, "Custom Title", "my-plugin");
```

### Getting tab metadata

Retrieve current metadata for a tab:

```typescript
const metadata = await api.getTabMetadata(leaf.id);
if (metadata) {
  console.log("Icon:", metadata.icon);
  console.log("Color:", metadata.color);
  console.log("Title:", metadata.title);
}
```

### Clearing tab metadata

Remove all custom metadata from a tab:

```typescript
await api.clearTabMetadata(leaf.id, "my-plugin");
```

## Group customization

Group customization works identically to tab customization, using group IDs instead of leaf IDs:

```typescript
const group = api.getActiveGroup();
if (group) {
  await api.setGroupIcon(group.id, "folder", "my-plugin");
  await api.setGroupColor(group.id, "#00ff00", "my-plugin");
  await api.setGroupTitle(group.id, "My Group", "my-plugin");
}

// Get group metadata
const metadata = await api.getGroupMetadata(group.id);

// Clear group metadata
await api.clearGroupMetadata(group.id, "my-plugin");
```

## Source parameter

The optional `source` parameter identifies which plugin made the change. This is important for preventing infinite loops when listening to [[events#Metadata changes|metadata change events]]:

```typescript
// Listen to metadata changes
this.registerEvent(
  this.app.workspace.on("vertical-tabs:metadata-changed", (event) => {
    // Ignore changes made by this plugin
    if (event.source === "my-plugin") return;
    
    // Handle changes from other sources
    console.log(`${event.type} ${event.id} changed`);
  })
);

// Make changes with source identifier
await api.setTabIcon(leaf.id, "star", "my-plugin");
```

Always provide a source parameter when making changes in response to events to prevent infinite loops.

## Icon reference

### Built-in icons

See the [Lucide icon library](https://lucide.dev/icons/) for the complete list of available built-in icons.

### Custom icons

To register custom SVG icons with Obsidian:

```typescript
import { addIcon } from "obsidian";

addIcon("icon-id", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><!-- SVG content --></svg>');
```

The icon ID must be unique. Once registered, custom icons can be used with `setTabIcon` and `setGroupIcon` just like built-in icons.
