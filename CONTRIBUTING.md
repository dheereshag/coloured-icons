# Contributing to Coloured Icons

Thanks for contributing! This project uses a **fork-and-pull** workflow because most contributors don’t have push access to the main repo.

## How to open a change (fork & pull request)

1. **Fork the repo** on GitHub: use the “Fork” button on [github.com/dheereshag/coloured-icons](https://github.com/dheereshag/coloured-icons). That creates a copy under your account (e.g. `https://github.com/YOUR_USERNAME/coloured-icons`).

2. **Add your fork as a remote** (if you cloned the original repo):
   ```bash
   git remote add fork https://github.com/YOUR_USERNAME/coloured-icons.git
   ```
   Use your GitHub username and the real fork URL. Keep `origin` pointing at `dheereshag/coloured-icons` so you can pull updates.

3. **Create a branch**, make your changes, and commit:
   ```bash
   git checkout -b add-your-feature
   # ... edit files ...
   git add .
   git commit -m "Add your change"
   ```

4. **Push the branch to your fork** (not to `origin` if you don’t have write access):
   ```bash
   git push -u fork add-your-feature
   ```

5. **Open a Pull Request** on GitHub: go to your fork, use “Compare & pull request” to open a PR **from your fork’s branch into `dheereshag/coloured-icons`** (base: `master`). Describe your change and submit.

6. **Sync with upstream** when needed:
   ```bash
   git fetch origin
   git checkout master
   git merge origin/master
   ```

---

## Adding a new icon

- **Tooling:** The project uses **pnpm** (not npm/yarn).
- **Where icons live:** `public/logos/<category>/<brand>/` (e.g. `public/logos/technology/zoom/zoom.svg`).
- **Naming (from README):**
  - Logo: `{company}.svg` → class `ci-{company}`
  - Wordmark: `{company}-wordmark.svg` → `ci-{company}-wordmark`
  - Horizontal (logo + wordmark): `{company}-horizontal.svg` → `ci-{company}-horizontal` / `ci-{company}-inline`
  - Vertical/stacked: `{company}-vertical.svg` → `ci-{company}-vertical` / `ci-{company}-stacked`
  - Light variant: `{name}-light.svg` → `ci-{name}-light`
- **Regenerate generated files:** Run `pnpm run dev` (or `node scripts/listFolders.js`) so `app/logos.css` and `constants/icons.ts` are updated. Commit those generated files with your new SVG(s).
- **Optional:** Set a display name in `constants/logoMeta.js` and/or aliases in `constants/logoAliases.js`.

After adding the icon and regenerating, push your branch to **your fork** and open a PR to the main repo as above.
