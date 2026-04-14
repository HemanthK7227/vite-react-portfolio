# Hemanth Kumar — Portfolio

Professional portfolio built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

---

## Project Structure

```
hemanth-portfolio/
├── index.html                  ← Entry HTML (SEO meta tags live here)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.tsx                ← React root
    ├── App.tsx                 ← Layout — imports all sections
    ├── index.css               ← Tailwind + global styles
    └── components/
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── ProjectsSection.tsx
        ├── AboutSection.tsx
        ├── SkillsSection.tsx
        ├── ContactSection.tsx
        └── Footer.tsx
```

---

## Step 1 — Install & Run Locally

Make sure you have **Node.js 18+** installed.
Download from https://nodejs.org if needed.

```bash
# 1. Open terminal, navigate to this folder
cd hemanth-portfolio

# 2. Install all dependencies
npm install

# 3. Start dev server
npm run dev
```

Open http://localhost:5173 in your browser. You'll see your portfolio live.

---

## Step 2 — Add Your Photo

1. Put your photo file in `src/assets/` (name it `profile.jpg`)
2. Open `src/components/HeroSection.tsx`
3. At the top of the file, add:
   ```tsx
   import profileImg from '../assets/profile.jpg'
   ```
4. Replace the `<div>` with the `HK` initials with:
   ```tsx
   <img
     src={profileImg}
     alt="Hemanth Kumar"
     className="w-full h-full object-cover"
   />
   ```

---

## Step 3 — Wire Up the Contact Form (Optional but Recommended)

The form is built — it just needs a backend to send emails.
Easiest free option: **EmailJS** (no backend needed).

```bash
npm install @emailjs/browser
```

1. Sign up free at https://www.emailjs.com
2. Create a service (Gmail works), create a template, copy your keys
3. In `ContactSection.tsx`, replace the comment block with:

```tsx
import emailjs from '@emailjs/browser'

// Inside handleSubmit:
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { name: form.name, email: form.email, subject: form.subject, message: form.message },
  'YOUR_PUBLIC_KEY'
)
```

---

## Step 4 — Deploy Online (Free)

### Option A — Netlify (Easiest, Recommended)

1. Go to https://app.netlify.com
2. Sign up / log in with GitHub
3. Click **"Add new site" → "Deploy manually"**
4. Run `npm run build` in your terminal — this creates a `dist/` folder
5. Drag and drop the `dist/` folder onto the Netlify page
6. Your site is live in ~30 seconds!

To get a custom URL (e.g. `hemanth.netlify.app`):
- Go to Site settings → Change site name

### Option B — Vercel (Also Free, GitHub-connected)

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   gh repo create hemanth-portfolio --public --push --source=.
   ```
   (Install GitHub CLI from https://cli.github.com if needed)

2. Go to https://vercel.com → Sign up with GitHub
3. Click **"Add New Project"** → Import your repo
4. Framework: **Vite**
5. Click **Deploy** — done! Auto-deploys on every git push.

### Option C — GitHub Pages (Free)

```bash
npm install gh-pages --save-dev
```

Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Add to `vite.config.ts`:
```ts
export default defineConfig({
  base: '/hemanth-portfolio/',   // your repo name
  plugins: [react()],
})
```

```bash
npm run deploy
```

---

## Step 5 — Custom Domain (Optional)

Once deployed on Netlify or Vercel:

1. Buy a domain at https://namecheap.com or https://porkbun.com (~$10/year)
   Suggested: `hemanthkumar.dev` or `hemanth.ai`

2. In Netlify: Site settings → Domain management → Add custom domain
3. In Vercel: Project settings → Domains → Add domain
4. Follow the DNS instructions — live in ~24 hours

---

## Build for Production

```bash
npm run build
```

Creates an optimized `dist/` folder ready to deploy anywhere.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Fast dev server & build |
| Tailwind CSS | Utility styling |
| Framer Motion | Animations |
| Lucide React | Icons |

---

## Customization Quick Reference

| What | Where |
|------|-------|
| Your name / bio | `HeroSection.tsx` |
| Projects | `ProjectsSection.tsx` → `PROJECTS` array |
| Work experience | `AboutSection.tsx` → `JOBS` array |
| Skills | `SkillsSection.tsx` → `GROUPS` array |
| Social links | `HeroSection.tsx`, `ContactSection.tsx` |
| Resume link | `Navbar.tsx` |
| Email | `ContactSection.tsx` |
| SEO title & description | `index.html` |
| Fonts / colors | `tailwind.config.js` + `index.css` |
