# Development Setup Guide

## 🛠️ Required Tools (Any IDE)

1. **Node.js** (v16+)
2. **npm** or **yarn**

## 📋 Code Quality Tools

We use these tools to maintain consistent code quality across the team, **regardless of your IDE**:

### **Automatic Formatting & Linting**

```bash
# Install dependencies
npm install

# Format all code
npm run format

# Check formatting
npm run format:check

# Lint and fix issues
npm run lint:fix

# Run all checks
npm run lint && npm run format:check
```

### **IDE Setup (Optional but Recommended)**

#### **VS Code Users:**

- Settings are pre-configured in `.vscode/settings.json`
- Install recommended extensions: Prettier, ESLint

#### **Other IDEs (WebStorm, Vim, etc.):**

- Install EditorConfig plugin (reads `.editorconfig`)
- Install Prettier plugin
- Install ESLint plugin
- Configure your IDE to use project's `.eslintrc.json` and `.prettierrc`

## 🚀 Git Workflow

**Pre-commit hooks** automatically run before each commit:

- ESLint fixes issues
- Prettier formats code
- Prevents commits with errors

## 🎯 Rules Summary

- **Indentation:** 2 spaces
- **Quotes:** Single quotes
- **Semicolons:** Required
- **Line width:** 80 characters
- **Line endings:** LF (Unix-style)

## ⚙️ Manual Quality Checks

```bash
# Before committing (optional, hooks do this automatically)
npm run lint:fix
npm run format

# Check if everything is correct
npm run lint
npm run format:check
```
