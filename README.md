# Hartnell College Foundation — K–12 STEAM Programs Website

A bilingual (English/Spanish) one-page website for the Hartnell College Foundation's K–12 STEAM programs, serving TK–6th grade students in Alisal Union (AUSD) and Salinas City Elementary (SCESD) school districts.

Built with plain **HTML, CSS and JavaScript**. There is no build step and nothing to install.

## Files

```
index.html          English homepage
es/index.html       Spanish homepage
css/styles.css      All colors, fonts, layout and mobile styles
js/main.js          Mobile menu, district filter, newsletter message
images/hcf-logo.png Hartnell College Foundation logo
```

## Put it online with GitHub Pages (free)

1. Sign in at github.com and click **New repository**. Name it something like `k12-steam`, set it to **Public**, and click **Create repository**.
2. On the new repository page, click **uploading an existing file**.
3. Unzip the download on your computer, open the folder, and drag **everything inside it** (`index.html`, `README.md`, and the `css`, `js`, `images` and `es` folders) into the upload box. Click **Commit changes**.
4. Go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, choose the **main** branch and the **/ (root)** folder, then click **Save**.
5. Wait a minute or two, then refresh the page. Your site link appears at the top, for example `https://your-username.github.io/k12-steam/`.

To make changes later, open a file on GitHub, click the pencil icon, edit, and click **Commit changes**. The live site updates in about a minute.

## Before launch: fill in the placeholders

Search both `index.html` files for square brackets `[ ]`:

- `[START DATE]` / `[FECHA DE INICIO]` — when academies begin
- `[CLUB DETAILS COMING SOON]` / `[DETALLES PRÓXIMAMENTE]` — Tech Challenge details
- `[CONTACT EMAIL]` and `[PHONE]` in the footer

Also:

- **Links:** "Learn more", "Browse Curriculum" and similar buttons point back to this page (`#programs`, `#educators`). Replace them with real page or document links.
- **Newsletter:** the sign-up form only shows a thank-you message. Connect it to Mailchimp, Constant Contact, or a Google Form before launch.
- **Hero photo:** to use a student photo, add it to `images/` and follow the note inside `index.html` next to the illustration. Get photo releases for any student images.
- **Logo:** `hcf-logo.png` was cropped from a screenshot. Swap in the official logo file (same name) for the sharpest result.
- **Partner logos:** replace the partner names with logo images once you have permission to use them.
- **Spanish text:** have a native Spanish speaker on your team review `es/index.html`.

When you change text, make the same change in both `index.html` and `es/index.html`.
