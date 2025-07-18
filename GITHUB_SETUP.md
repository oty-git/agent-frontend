# GitHub Organization Setup Guide

Follow these steps to create separate repositories under one GitHub project.

## 🏢 Step 1: Create GitHub Organization (Recommended)

1. **Go to GitHub** → https://github.com
2. **Click your profile** → "Your organizations" → "New organization"
3. **Choose plan**: Free (sufficient for private repos)
4. **Organization name**: `agent-project` (or your preferred name)
5. **Contact email**: Your email
6. **This organization belongs to**: Personal account

## 📦 Step 2: Create Frontend Repository

1. **In your organization** → "New repository"
2. **Repository details**:
   - **Name**: `agent-frontend`
   - **Description**: `React TypeScript frontend for Agent project`
   - **Visibility**: Private (recommended) or Public
   - **Initialize**: ❌ Don't initialize (we already have code)

3. **After creation**, copy the repository URL:
   ```
   https://github.com/YOUR-ORG/agent-frontend.git
   ```

## 🔗 Step 3: Connect Your Local Repository

Run these commands in your terminal:

```bash
# Add remote origin
git remote add origin https://github.com/YOUR-ORG/agent-frontend.git

# Push all branches to GitHub
git push -u origin main
git push -u origin dev
git push -u origin stage

# Set dev as default branch locally
git checkout dev
```

## 🎯 Step 4: Set Default Branch on GitHub

1. **Go to your repository** → Settings → Branches
2. **Change default branch** from `main` to `dev`
3. **Update branch protection rules** (optional but recommended):
   - Protect `main` branch (require PR reviews)
   - Protect `stage` branch (require PR reviews)

## 🚀 Step 5: Create Additional Repositories

Repeat Step 2 for additional repositories:

### Backend Repository

- **Name**: `agent-backend`
- **Description**: `API server for Agent project`

### Shared Repository (Optional)

- **Name**: `agent-shared`
- **Description**: `Shared utilities and types for Agent project`

## 📋 Step 6: Repository Structure Result

Your GitHub organization will look like:

```
https://github.com/YOUR-ORG/
├── agent-frontend/    # React TypeScript app
├── agent-backend/     # API server
└── agent-shared/      # Shared utilities (optional)
```

## 🔧 Step 7: Team Access (If Working with Others)

1. **Organization Settings** → "People"
2. **Invite members** with appropriate roles:
   - **Owner**: Full access
   - **Member**: Push access to repositories
   - **Outside collaborator**: Limited access to specific repos

## 📝 Step 8: Repository Settings

For each repository, configure:

### General Settings

- ✅ Allow merge commits
- ✅ Allow squash merging
- ❌ Allow rebase merging (optional)
- ✅ Always suggest updating pull request branches
- ✅ Automatically delete head branches

### Branch Protection (Recommended)

**For `main` branch:**

- ✅ Require a pull request before merging
- ✅ Require approvals (1 minimum)
- ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging

**For `stage` branch:**

- ✅ Require a pull request before merging
- ✅ Require approvals (1 minimum)

## 🎉 Next Steps

After setup:

1. **Clone backend template** (when ready):

   ```bash
   cd ../
   git clone https://github.com/YOUR-ORG/agent-backend.git
   cd agent-backend
   ```

2. **Set up CI/CD pipelines** (GitHub Actions)
3. **Configure deployment environments**
4. **Set up issue templates and project boards**

## 💡 Pro Tips

- **Use descriptive commit messages** following conventional commits
- **Create issue templates** for bugs and features
- **Set up project boards** for task management
- **Configure webhooks** for deployment automation
- **Use GitHub Packages** for sharing internal libraries

---

**Ready to proceed?** Copy the repository URL from GitHub and run the connection commands!
