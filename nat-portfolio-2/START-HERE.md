# START HERE — Nat Portfolio

## A. Preview
1. Download and extract `nat-portfolio.zip`.
2. Open `index.html` in a browser.
3. Open `cv.html` for the CV page.

## B. Enable messages with Formspree
1. Visit https://formspree.io/ and sign in/create an account.
2. Verify your account email and create a new form.
3. Set the receiving email/target email in the Formspree form settings.
4. Open the form's Integration panel and copy the form ID from the endpoint URL. For example, in `https://formspree.io/f/abcdwxyz`, the ID is `abcdwxyz` (example only).
5. Open `js/config.js` and replace the empty `formspreeId` value with your real ID.
6. Save the file and upload the changed files to GitHub.
7. Test the published form with a message, then check the Formspree submissions page and your email/spam folder.

The contact form uses Formspree's hosted service; it will not send messages until the real form ID is configured and the form is activated. See the official guide: https://help.formspree.io/articles/building-your-form/building-an-html-form/

## C. Add public links
In `js/config.js`, optionally add your professional email, GitHub profile, and LinkedIn URL. Leave any field blank if you don't want to publish it.

## D. Edit the CV and projects
- Replace bracketed placeholder text in `cv.html`.
- Add real demo/repository URLs for Mondrian Grid, TinDog Clone, and Pricing Table.
- Current project previews are custom CSS mockups, not screenshots from your older site.
- Replace skill labels with levels you can demonstrate.

## E. Publish on GitHub Pages
1. Create a repository on GitHub.
2. Upload the *contents* of this folder, not an enclosing folder. `index.html` must be at repository root.
3. Go to repository Settings → Pages.
4. Choose Deploy from a branch, select `main` and `/(root)`, then save.
5. Wait for deployment and open the URL GitHub shows.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## File list
- `index.html` — main portfolio and message form
- `cv.html` — CV page
- `css/styles.css` — design and responsive styles
- `js/main.js` — interactive behavior and form submission
- `js/config.js` — site settings
- `assets/favicon.svg` — monogram icon
- `assets/nat-cv-template.txt` — CV planning template
- `README.md` — project notes
