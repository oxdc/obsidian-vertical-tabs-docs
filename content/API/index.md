---
title: API Documentation
---
## Overview

The Vertical Tabs API enables other Obsidian plugins to integrate with and extend Vertical Tabs functionality. You can customize tabs and groups, listen to workspace events, and add custom menu items.

## Getting started

Start with the [[getstarted|Getting Started]] guide to learn how to access and use the API in your plugin.

## Documentation

- [[getstarted|Getting Started]] - Installation and basic usage
- [[safe-access|Safe API Access]] - Robust patterns for accessing the API
- [[customization|Customization]] - Customize tabs and groups
- [[events|Events]] - Subscribe to workspace events
- [[menus|Menus]] - Add custom menu items
- [[utilities|Utilities]] - Work with tabs and groups

## Requirements

- Obsidian 1.10.0 or later
- Vertical Tabs plugin 0.20.0 or later installed and enabled
- TypeScript knowledge for plugin development

## API versioning

The API follows semantic versioning. Check the current version:

```typescript
const version = api.getVersion();
console.log("API version:", version);
```

## Type definitions

Install type definitions for TypeScript development:

```bash
npm install obsidian-vertical-tabs-api
```

## Support

If you encounter issues or have questions about the API:

- [Open an issue on GitHub](https://github.com/oxdc/obsidian-vertical-tabs/issues)
- [Start a discussion](https://github.com/oxdc/obsidian-vertical-tabs/discussions)
