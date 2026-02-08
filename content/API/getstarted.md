---
title: Getting Started
---
## Overview

The Vertical Tabs API allows other Obsidian plugins to interact with and customize tabs and groups programmatically. You can set custom icons, colors, and titles for tabs and groups, listen to workspace events, and add custom menu items to context menus.

## Installation

Install the API types in your plugin project:

```bash
npm install obsidian-vertical-tabs-api
```

## Basic usage

Access the API through the Vertical Tabs plugin instance:

```typescript
import { Plugin } from "obsidian";
import { VerticalTabsAPI } from "obsidian-vertical-tabs-api";

export default class MyPlugin extends Plugin {
  async onload() {
    // Get the Vertical Tabs plugin
    const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
    
    if (!vtPlugin?.api) {
      console.warn("Vertical Tabs not available");
      return;
    }

    const api: VerticalTabsAPI = vtPlugin.api;
    
    // Use the API
    const version = api.getVersion();
    console.log("Vertical Tabs API version:", version);
  }
}
```

## Checking availability

The Vertical Tabs plugin can be loaded and unloaded at any time. Always access the API safely to ensure your integration is robust.

For a complete guide on safe API access patterns, see [[safe-access|Safe API Access]].

**Quick check:**

```typescript
export default class MyPlugin extends Plugin {
  async onload() {
    // Listen for Vertical Tabs load
    this.registerEvent(
      this.app.workspace.on("vertical-tabs:load", () => {
        const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
        if (vtPlugin?.api) {
          // Initialize your integration
        }
      })
    );

    // Check if already loaded
    const vtPlugin = this.app.plugins.getPlugin("vertical-tabs");
    if (vtPlugin?.api) {
      // Initialize your integration
    }
  }
}
```

## Next steps

- [[safe-access|Safe API Access]] - Learn robust patterns for accessing the API
- [[customization|Customization]] - Learn how to customize tabs and groups
- [[events|Events]] - Subscribe to workspace events
- [[menus|Menus]] - Add custom menu items
- [[utilities|Utilities]] - Utility methods for working with tabs and groups
