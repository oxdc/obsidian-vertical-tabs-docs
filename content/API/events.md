---
title: Events
---
## Overview

The Vertical Tabs plugin emits several workspace events that your plugin can listen to. These events notify you of plugin lifecycle changes, metadata updates, and workspace refresh operations.

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
