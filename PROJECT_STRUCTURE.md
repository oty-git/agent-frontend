# Agent Project - Repository Structure

## 📁 Recommended GitHub Organization Structure

```
GitHub Organization: "agent-project"
├── agent-frontend     ← Current repository (React TypeScript)
├── agent-backend      ← Future API server
└── agent-shared       ← Optional shared utilities
```

## 🌿 Branch Strategy (Each Repository)

- **`main`** → Production environment
- **`stage`** → Staging environment
- **`dev`** → Development environment (default working branch)

## 🔗 Repository URLs (Replace YOUR-ORG)

- Frontend: `https://github.com/YOUR-ORG/agent-frontend.git`
- Backend: `https://github.com/YOUR-ORG/agent-backend.git`
- Shared: `https://github.com/YOUR-ORG/agent-shared.git`

## ⚡ Quick Setup Commands

After creating the GitHub repositories:

```bash
# Connect frontend (current repo)
git remote add origin https://github.com/YOUR-ORG/agent-frontend.git
git push -u origin main dev stage

# Clone backend (when ready)
cd ../
git clone https://github.com/YOUR-ORG/agent-backend.git
```

## 🚀 Current Status

✅ **Frontend Repository Ready**

- Local Git repository with 3 branches (main, stage, dev)
- Complete development environment setup
- Code quality tools configured
- Ready to push to GitHub

⏳ **Next Steps**

1. Create GitHub organization
2. Create `agent-frontend` repository on GitHub
3. Connect local repository to GitHub remote
4. Push all branches
5. Set `dev` as default branch on GitHub
