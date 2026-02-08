---
title: Utilities
---
## Overview

The API provides utility methods for working with tabs and groups in the workspace.

## API version

Get the current API version:

```typescript
const version = api.getVersion();
console.log("API version:", version); // "1.0.0"
```

Use this to check compatibility if your plugin requires specific API features.

## Working with tabs

### Get leaf by ID

Retrieve a `WorkspaceLeaf` (tab) by its identifier:

```typescript
const leaf = api.getLeafById("leaf-id");
if (leaf) {
  console.log("Found leaf:", leaf.id);
}
```

Returns `undefined` if the leaf is not found.

### Get active leaf

Get the currently active `WorkspaceLeaf` (tab):

```typescript
const activeLeaf = api.getActiveLeaf();
if (activeLeaf) {
  console.log("Active leaf:", activeLeaf.id);
  await api.setTabIcon(activeLeaf.id, "star", "my-plugin");
}
```

Returns `null` if no leaf is active.

### Get all leaf IDs

Get an array of identifiers for all open tabs:

```typescript
const leafIds = api.getAllLeafIds();
console.log(`${leafIds.length} tabs open`);

// Process all tabs
for (const leafId of leafIds) {
  const leaf = api.getLeafById(leafId);
  if (leaf) {
    // Do something with the leaf
  }
}
```

## Working with groups

### Get group by ID

Retrieve a `WorkspaceParent` (group) by its identifier:

```typescript
const group = api.getGroupById("group-id");
if (group) {
  console.log("Found group:", group.id);
}
```

Returns `undefined` if the group is not found.

### Get active group

Get the `WorkspaceParent` (group) containing the active leaf:

```typescript
const activeGroup = api.getActiveGroup();
if (activeGroup) {
  console.log("Active group:", activeGroup.id);
  await api.setGroupColor(activeGroup.id, "#00ff00", "my-plugin");
}
```

Returns `null` if no group is active.

### Get all group IDs

Get an array of identifiers for all groups:

```typescript
const groupIds = api.getAllGroupIds();
console.log(`${groupIds.length} groups exist`);

// Process all groups
for (const groupId of groupIds) {
  const group = api.getGroupById(groupId);
  if (group) {
    // Do something with the group
  }
}
```

## Identifiers

All tabs and groups have unique string identifiers. These identifiers:

- Are stable during the tab/group lifetime
- Are used consistently across all API methods
- Match the `id` property on `WorkspaceLeaf` and `WorkspaceParent` objects

```typescript
// These are equivalent ways to get an ID
const leaf = api.getActiveLeaf();
if (leaf) {
  const id1 = leaf.id;                    // Direct access
  const id2 = api.getAllLeafIds()[0];     // From getAllLeafIds()
  
  // Both work with API methods
  await api.setTabIcon(id1, "star", "my-plugin");
  await api.setTabIcon(id2, "heart", "my-plugin");
}
```

## Common patterns

### Process all tabs

Apply an operation to all open tabs:

```typescript
const leafIds = api.getAllLeafIds();
for (const leafId of leafIds) {
  const leaf = api.getLeafById(leafId);
  if (!leaf) continue;
  
  // Check view type
  if (leaf.view.getViewType() === "markdown") {
    await api.setTabIcon(leafId, "file-text", "my-plugin");
  }
}
```

### Find tabs matching criteria

Find tabs that match specific conditions:

```typescript
function findMarkdownTabs() {
  const leafIds = api.getAllLeafIds();
  const markdownTabs = [];
  
  for (const leafId of leafIds) {
    const leaf = api.getLeafById(leafId);
    if (leaf?.view.getViewType() === "markdown") {
      markdownTabs.push(leaf);
    }
  }
  
  return markdownTabs;
}
```

### Get tabs in a group

Access all tabs within a specific group:

```typescript
const group = api.getActiveGroup();
if (group) {
  // WorkspaceParent has children property
  const leaves = group.children.filter(
    child => child instanceof WorkspaceLeaf
  );
  
  console.log(`${leaves.length} tabs in this group`);
}
```

### Check if tab exists

Verify a tab is still open before operating on it:

```typescript
function isTabOpen(leafId: string): boolean {
  return api.getLeafById(leafId) !== undefined;
}

// Use in async operations
async function updateTabIfExists(leafId: string) {
  if (isTabOpen(leafId)) {
    await api.setTabIcon(leafId, "star", "my-plugin");
  }
}
```
