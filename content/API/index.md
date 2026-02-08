---
title: API Documentation
---
## Overview

The Vertical Tabs API enables other Obsidian plugins to integrate with and extend Vertical Tabs functionality. You can customize tabs and groups, listen to workspace events, and add custom menu items.

> [!WARNING] Notice
> The Vertical Tabs API is currently in beta and requires a subscription to the [[beta-program|Beta Program]].
>
> **Plugin developers:** If you want to use the API and integrate your plugin with Vertical Tabs, please complete [this form](https://github.com/oxdc/obsidian-vertical-tabs/issues/new?template=developer_beta_request.yml) to request **free access**.
>
> **Users:** If you want to try out the API features, please subscribe to the [[beta-program|Beta Program]]. All users will receive a free update at a later date. For more information, please refer to the [[beta-program|Beta Program documentation]] and the [[roadmap|Roadmap]].

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
