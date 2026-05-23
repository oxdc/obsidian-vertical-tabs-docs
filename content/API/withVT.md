---
title: Global withVT helper
---
## Overview

> [!VERSION]
> **Available since:** API v1.2.0, Vertical Tabs v0.24.0

`withVT` runs a one-off callback with the [[index|Vertical Tabs API]] when Vertical Tabs is installed, enabled, and active. While Vertical Tabs is running normally, it is exposed as `window.withVT` for the Obsidian developer console, CustomJS, and similar contexts.

When Vertical Tabs is unloaded, disabled, or inactive (including **Disable on this device**), `window.withVT` is `undefined` — check before calling:

```javascript
if (typeof withVT === "undefined") {
  // not available
  return;
}
withVT((api) => { /* ... */ });
```

For long-lived plugin integrations, prefer `app.plugins.getPlugin("vertical-tabs")` and the patterns in [[safe-access|Safe API Access]].

## Basic usage

```javascript
withVT((api) => {
  console.log("API version:", api.getVersion());
});
```

From a plugin (optional `app` argument):

```typescript
import { withVT } from "obsidian-vertical-tabs-api";

withVT((api) => {
  api.setTabIcon(leaf.id, "star", "my-plugin");
}, this.app);
```

`withVT` returns whatever your callback returns. Only call it when `window.withVT` is defined; the callback is not run otherwise.

```javascript
const version = withVT?.((api) => api.getVersion());
```

## Related

- [[getstarted|Getting Started]] — Plugin integration basics
- [[safe-access|Safe API Access]] — Load/unload listeners and cached references
- [[events|Events]] — `vertical-tabs:load` and `vertical-tabs:unload`
