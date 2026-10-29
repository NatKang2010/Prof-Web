# Nat — Portfolio

Responsive portfolio built with HTML5, CSS3, and vanilla JavaScript.

## Included
- `index.html` — portfolio home page and contact form
- `cv.html` — editable CV starter page
- `css/styles.css` — layout, design system, responsive styling, motion, form styles
- `js/main.js` — navigation, form submission, contact links, hero interaction
- `js/config.js` — editable public contact details and Formspree form ID
- `assets/favicon.svg` — custom Nat monogram
- `assets/nat-cv-template.txt` — CV planning template
- `START-HERE.md` — setup and publishing steps

## Run locally
Extract the ZIP and open `index.html` in a browser. For a local server, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Enable the Formspree contact form
The form is included but deliberately disabled until a real form ID is added. This prevents a fake endpoint from appearing to work.

1. Create/sign in to a Formspree account and verify your account email.
2. Create a new form and set the target email in Formspree.
3. Open the form's Integration panel and copy the form ID from the endpoint (the part after `/f/`).
4. In `js/config.js`, set `formspreeId: "YOUR_REAL_ID"` to that ID.
5. Save and publish the files to GitHub Pages.
6. Test the live form. Check your Formspree dashboard and email/spam folder. Formspree may require verification/activation.

Official guide: https://help.formspree.io/articles/building-your-form/building-an-html-form/

The form sends via Formspree using a JavaScript `fetch` request and displays success/error status. Form processing and email delivery depend on your Formspree configuration and service.

## Publish to GitHub Pages
1. Create a repository on GitHub.
2. Upload the *contents* of this folder to the repository root, with `index.html` at the top level.
3. Open repository Settings → Pages.
4. Under Build and deployment, select Deploy from a branch, choose `main` and `/(root)`, then save.
5. Wait for GitHub Pages to deploy, then use the URL shown in Settings → Pages.
6. Future commits to the selected branch update the site.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Before presenting professionally
- Replace bracketed CV placeholders with accurate information.
- Add real links to each project's repository/demo.
- The project names are based on Nat's existing portfolio, but the thumbnails in this version are CSS mockups, not screenshots.
- Add only contact details you want public.
- Do not claim experience or skills you cannot demonstrate.

This is a static website. It does not run a custom server or database. Formspree provides the hosted form processing.
