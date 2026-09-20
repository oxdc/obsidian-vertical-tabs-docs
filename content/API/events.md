---
title: Events
---
## Overview

The Vertical Tabs plugin emits several workspace events that your plugin can listen to. These events notify you of plugin lifecycle changes, metadata updates, workspace refresh operations, icon rendering, and context menu construction.

## Plugin lifecycle

### Load event

Fired when the Vertical Tabs plugin loads and the API becomes available:

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:load", () => {
    console.log("Vertical Tabs is ready");
    const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
    // API is now available
  })
);
```

### Unload event

Fired when the Vertical Tabs plugin is about to unload:

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:unload", () => {
    console.log("Vertical Tabs is unloading");
    // Clean up any references to the API
  })
);
```

**Important:** For robust integration that handles load and unload correctly, see [[safe-access|Safe API Access]].

## Metadata changes

Fired when tab or group metadata is changed through the API:

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:metadata-changed", (event) => {
    console.log("Type:", event.type);      // "tab" or "group"
    console.log("ID:", event.id);          // Identifier
    console.log("Source:", event.source);  // Optional plugin identifier
    console.log("Metadata:", event.metadata);
  })
);
```

**Event data:**

```typescript
interface MetadataChangeEvent {
  type: "tab" | "group";
  id: string;
  metadata: APITabMetadata | APIGroupMetadata;
  source?: string;
}
```

**Preventing infinite loops:**

When listening to metadata changes and making changes in response, always check the source parameter to avoid infinite loops:

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:metadata-changed", (event) => {
    // Ignore changes made by this plugin
    if (event.source === "my-plugin") return;
    
    // React to changes from other sources
    if (event.type === "tab") {
      console.log("Tab metadata changed:", event.id);
    }
  })
);

// When making changes, provide source identifier
await api.setTabIcon(leaf.id, "star", "my-plugin");
```

## Workspace refresh

Fired when tabs or groups are opened or closed. The event provides details about which tabs and groups were added or removed:

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:refresh", (event) => {
    console.log("New tabs:", event.newTabs);
    console.log("Closed tabs:", event.closedTabs);
    console.log("New groups:", event.newGroups);
    console.log("Closed groups:", event.closedGroups);
  })
);
```

**Event data:**

```typescript
interface RefreshEvent {
  newTabs: string[];      // IDs of newly opened tabs
  newGroups: string[];    // IDs of newly created groups
  closedTabs: string[];   // IDs of closed tabs
  closedGroups: string[]; // IDs of closed groups
}
```

**Important:** This event only fires when changes are detected. If no tabs or groups were opened or closed during a refresh operation, the event will not fire.

**Use cases:**

- Track workspace state changes
- React to new tabs being opened
- Clean up when tabs are closed
- Monitor group creation and deletion

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:refresh", (event) => {
    // Initialize metadata for new tabs
    for (const tabId of event.newTabs) {
      await api.setTabIcon(tabId, "file-text", "my-plugin");
    }
    
    // Clean up data for closed tabs
    for (const tabId of event.closedTabs) {
      this.cleanupTabData(tabId);
    }
  })
);
```

## Icon rendering

> [!VERSION]
> **Available since:** API v1.3.0, Vertical Tabs v0.26.3

Fired after Vertical Tabs paints a sidebar icon slot, so another plugin can mutate the DOM. These events are not part of `VerticalTabsAPI`. See [[icons|Icon Rendering]] for the full guide.

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:render-tab-icon", (leaf, iconEl, tabEl) => {
    // Paint iconEl for this leaf
  })
);

this.registerEvent(
  this.app.workspace.on("vertical-tabs:render-group-icon", (group, iconEl, groupEl) => {
    // Paint iconEl for this group
  })
);

this.app.workspace.trigger("vertical-tabs:request-icon-refresh");
```

`vertical-tabs:request-icon-refresh` asks Vertical Tabs to re-paint every visible tab and group icon. Trigger it after you register listeners (if Vertical Tabs may already be running) and whenever your icon data changes.

If Vertical Tabs is not installed or not enabled, these events will not be available; no one will emit or respond to them.

## Menu events

> [!VERSION]
> **Available since:** API v1.4.0, Vertical Tabs v0.26.4

Vertical Tabs emits workspace events after constructing tab, multi-tab (multi-select), and group context menus. These events allow your plugin to add, modify, or remove menu items programmatically. They mirror the behavior of the callback-based [[menus|API methods]] (e.g., `api.onTabMenu` and `api.onGroupMenu`) and provide an alternative integration surface.

**Register your handler using either the event or the callback (not both), to avoid duplicate actions.** See [[menus|Menus]] for complete details and advanced usage.

```typescript
this.registerEvent(
  this.app.workspace.on("vertical-tabs:on-tab-menu", (menu, leaf) => {
    // Add custom items for this tab
  })
);

this.registerEvent(
  this.app.workspace.on("vertical-tabs:on-tabs-menu", (menu, leaves) => {
    // Add custom items for the selected tabs
  })
);

this.registerEvent(
  this.app.workspace.on("vertical-tabs:on-group-menu", (menu, group) => {
    // Add custom items for this group
  })
);
```

These events are only available when Vertical Tabs is installed and enabled.

## Event registration

Always use `registerEvent` to ensure events are properly cleaned up when your plugin unloads:

```typescript
export default class MyPlugin extends Plugin {
  async onload() {
    // Register all events using this.registerEvent
    this.registerEvent(
      this.app.workspace.on("vertical-tabs:load", () => {
        // Handle load
      })
    );
  }
  
  // Events are automatically cleaned up on unload
}
```
