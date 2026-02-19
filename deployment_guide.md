# 🚀 Deployment Guide — Smart Word Counter

Follow these steps to deploy your project to **GitHub** and host it on **Netlify**.

---

## Part 1: Push to GitHub

### Step 1 — Create a Repository on GitHub

1. Go to [github.com/new](https://github.com/new).
2. Fill in the details:
   - **Repository name:** `smart-word-counter`
   - **Description:** `A high-performance web app for instant text analysis — word, character, and sentence counting.`
   - **Visibility:** Public
   - **Do NOT** check "Add a README file" (we already have one).
3. Click **Create repository**.

### Step 2 — Push Local Code to GitHub

Open your terminal in the project folder (`c:\Users\abhis\Downloads\smart-word-counter`) and run:

```bash
git init
git add .
git commit -m "Initial commit: Smart Word Counter"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/smart-word-counter.git
git push -u origin main
```

> ⚠️ Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Part 2: Deploy on Netlify

### Step 1 — Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com/).
2. Sign in with your **GitHub** account.
3. Click **"Add new site"** → **"Import an existing project"**.
4. Select **GitHub** as the Git provider.
5. Authorize Netlify to access your repositories (if prompted).
6. Select the **`smart-word-counter`** repository.

### Step 2 — Configure Build Settings

Netlify will auto-detect most settings. Verify these:

| Setting | Value |
|---|---|
| **Branch to deploy** | `main` |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |

### Step 3 — Deploy

1. Click **"Deploy site"**.
2. Wait for the build to complete (usually 1-2 minutes).
3. Once deployed, Netlify will give you a URL like `https://random-name-123.netlify.app`.

### Step 4 — Set a Custom Site Name (Optional)

1. Go to **Site configuration** → **Site details** → **Change site name**.
2. Change it to `smart-word-counter` so the URL becomes:
   ```
   https://smart-word-counter.netlify.app
   ```

---

## Part 3: Update README with Live Link

After you get your Netlify URL, update the **Live Demo** link in `README.md`:

1. Open `README.md`.
2. Replace `https://smart-word-counter.netlify.app` with your actual Netlify URL (if different).
3. Commit and push the change:

```bash
git add README.md
git commit -m "docs: add live demo link"
git push
```

---

## ✅ Done!

Your project is now:
- 📦 Hosted on **GitHub** with a professional README
- 🌐 Live on **Netlify** with a shareable link

Netlify will automatically redeploy whenever you push changes to the `main` branch.
