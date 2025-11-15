---
allowed-tools: Bash(git:*)
description: Generate a 1-2 line changelog entry for current changes
---

# Generate Changelog Entry

Based on the current changes, create a 1-2 line changelog entry that:

- Describes **what** changed at a high level
- Explains the **value/benefit** to users
- Is technical enough to be informative
- Avoids exposing internal implementation details
- Uses clear, concise language

## Current Changes

Recent commits: !`git log --oneline -5`

Staged changes: !`git diff --cached --stat`

Unstaged changes: !`git diff --stat`

Full diff: !`git diff HEAD`

Format the changelog entry as:
```
- [Category] Brief description of change and user benefit
```

Examples:
- **[Feature]** Added dark mode support for improved usability in low-light environments
- **[Fix]** Resolved model selection issue that prevented saving user preferences
- **[Enhancement]** Improved loading performance for model picker dropdown
