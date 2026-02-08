---
title: Safe API Access
---
## Overview

The Vertical Tabs plugin can be loaded and unloaded at any time due to user interactions or updates. This guide shows you how to safely access the API and keep your integration robust.

## The problem

Plugin lifecycle events mean:
- Vertical Tabs might not be loaded when your plugin starts
- Vertical Tabs can be disabled while your plugin is running
- Vertical Tabs can be re-enabled after being disabled
- Updates or reloads can restart the plugin

Accessing the API without proper checks can lead to errors and undefined behavior.

## Robust integration pattern

```typescript
import { Plugin } from "obsidian";
import { VerticalTabsAPI } from "obsidian-vertical-tabs-api";

export default class MyPlugin extends Plugin {
  private vtApi: VerticalTabsAPI | null = null;

  async onload() {
    // Listen for Vertical Tabs load
    this.registerEvent(
      this.app.workspace.on("vertical-tabs:load", () => {
        this.initializeVerticalTabsIntegration();
      })
    );

    // Listen for Vertical Tabs unload
    this.registerEvent(
      this.app.workspace.on("vertical-tabs:unload", () => {
        this.cleanupVerticalTabsIntegration();
      })
    );

    // Check if already loaded
    const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
    if (vtPlugin?.api) {
      this.initializeVerticalTabsIntegration();
    }
  }

  private initializeVerticalTabsIntegration() {
    const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
    if (!vtPlugin?.api) return;

    this.vtApi = vtPlugin.api;
    console.log("Vertical Tabs integration initialized");

    // Set up your integration here
    // e.g., register menu callbacks, listen to events, etc.
  }

  private cleanupVerticalTabsIntegration() {
    console.log("Vertical Tabs integration cleaned up");
    this.vtApi = null;

    // Clean up any references or listeners here
  }

  // Safe API access method
  private getVerticalTabsApi(): VerticalTabsAPI | null {
    if (!this.vtApi) {
      const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
      this.vtApi = vtPlugin?.api || null;
    }
    return this.vtApi;
  }

  // Example: Using the API safely
  async customizeActiveTab() {
    const api = this.getVerticalTabsApi();
    if (!api) {
      console.warn("Vertical Tabs not available");
      return;
    }

    const leaf = api.getActiveLeaf();
    if (leaf) {
      await api.setTabIcon(leaf.id, "star", "my-plugin");
    }
  }
}
```

## Key principles

1. **Listen to both load and unload events** - Vertical Tabs can be enabled or disabled at any time
2. **Store API reference** - Keep a reference to avoid repeated lookups
3. **Invalidate on unload** - Clear your reference when Vertical Tabs unloads
4. **Check on initial load** - Vertical Tabs might already be loaded when your plugin starts
5. **Always verify before use** - Check the API is available before each use

## Complete example with menu integration

```typescript
import { Plugin, Menu, WorkspaceLeaf } from "obsidian";
import { VerticalTabsAPI, MenuEventRef } from "obsidian-vertical-tabs-api";

export default class MyPlugin extends Plugin {
  private vtApi: VerticalTabsAPI | null = null;
  private menuRef: MenuEventRef | null = null;

  async onload() {
    this.registerEvent(
      this.app.workspace.on("vertical-tabs:load", () => {
        this.initializeVerticalTabsIntegration();
      })
    );

    this.registerEvent(
      this.app.workspace.on("vertical-tabs:unload", () => {
        this.cleanupVerticalTabsIntegration();
      })
    );

    const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
    if (vtPlugin?.api) {
      this.initializeVerticalTabsIntegration();
    }
  }

  private initializeVerticalTabsIntegration() {
    const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
    if (!vtPlugin?.api) return;

    this.vtApi = vtPlugin.api;

    // Register menu callback
    this.menuRef = this.vtApi.onTabMenu((menu, leaf) => {
      menu.addItem((item) => {
        item
          .setTitle("My Custom Action")
          .setSection("my-plugin")
          .onClick(async () => {
            await this.handleCustomAction(leaf);
          });
      });
    });

    // Listen to metadata changes
    this.registerEvent(
      this.app.workspace.on("vertical-tabs:metadata-changed", (event) => {
        if (event.source === "my-plugin") return;
        this.handleMetadataChange(event);
      })
    );
  }

  private cleanupVerticalTabsIntegration() {
    // Unregister menu callback
    this.menuRef?.unload();
    this.menuRef = null;

    this.vtApi = null;
  }

  private getVerticalTabsApi(): VerticalTabsAPI | null {
    if (!this.vtApi) {
      const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
      this.vtApi = vtPlugin?.api || null;
    }
    return this.vtApi;
  }

  async handleCustomAction(leaf: WorkspaceLeaf) {
    const api = this.getVerticalTabsApi();
    if (!api) return;

    await api.setTabIcon(leaf.id, "star", "my-plugin");
  }

  handleMetadataChange(event: any) {
    console.log(`Metadata changed: ${event.type} ${event.id}`);
  }

  async onunload() {
    this.cleanupVerticalTabsIntegration();
  }
}
```

## What to clean up

When Vertical Tabs unloads, make sure to clean up:

- **Menu callbacks** - Unregister using `ref.unload()`
- **API reference** - Set to `null`
- **Cached data** - Clear any stored metadata or state
- **Event listeners** - Workspace events registered with `registerEvent()` are automatically cleaned up

## Error handling

Always handle cases where the API is unavailable:

```typescript
async function updateTab(leafId: string) {
  const api = this.getVerticalTabsApi();
  
  if (!api) {
    // Gracefully handle unavailability
    console.log("Vertical Tabs not available, skipping update");
    return;
  }

  try {
    await api.setTabIcon(leafId, "star", "my-plugin");
  } catch (error) {
    console.error("Failed to update tab:", error);
  }
}
```

## Testing availability

For features that depend on Vertical Tabs, you can check availability before enabling:

```typescript
async onload() {
  // ... setup load/unload listeners ...

  // Add a command that requires Vertical Tabs
  this.addCommand({
    id: "custom-tab-action",
    name: "Custom Tab Action",
    checkCallback: (checking) => {
      const api = this.getVerticalTabsApi();
      
      if (!api) {
        return false; // Disable command if Vertical Tabs not available
      }

      if (!checking) {
        // Execute command
        this.executeCustomAction(api);
      }

      return true;
    }
  });
}
```
