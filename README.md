# Aditya Rajput — Pro Portfolio

A premium responsive portfolio built with plain HTML/CSS/JavaScript. No framework or build step is required.

## 1. Personalize it

In `index.html`:
- Replace `your.email@example.com` with your email.
- Replace LinkedIn and GitHub placeholders with your real profiles.
- Replace project `#` links with live demos/repositories.
- Add your actual `resume.pdf` to this folder.
- Replace the `AR` initials circle with your professional photo if desired.

### Add your photo
Replace:
```html
<div class="initials">AR</div>
```
with:
```html
<img src="profile.jpg" alt="Aditya Rajput" class="profile-photo">
```
and add:
```css
.profile-photo{width:100%;height:100%;object-fit:cover;border-radius:50%}
```

## 2. Test locally

Open `index.html` in your browser.

For a better local server in VS Code, use the Live Server extension and open the project folder.

## 3. Deploy with GitHub Pages

1. Create a new GitHub repository, e.g. `aditya-rajput-portfolio`.
2. Upload all project files.
3. Open repository **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. GitHub will provide your public Pages URL.

## 4. Deploy with Netlify

1. Sign in to Netlify.
2. Choose **Add new project / site**.
3. Import your GitHub repository.
4. No build command is required.
5. Publish.

## 5. Recommended final polish

- Use a professional headshot.
- Add 3–5 strongest projects only.
- Put GitHub and live demo links on every project.
- Add your real internship details and dates.
- Add your resume PDF.
- Keep project descriptions outcome-focused.
- Add a custom domain later if you want a more professional URL.
