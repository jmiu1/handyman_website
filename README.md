# Netlify Handyman Site Starter

This version is set up specifically for **Netlify Free** with:

- Next.js frontend
- Netlify deployment config
- Netlify Forms for quote requests
- Netlify Forms for review submissions
- no paid database required for v1

## What this starter already includes

- homepage
- services section
- gallery section
- testimonials section
- quote request form
- review submission form
- thank-you pages
- Netlify config file

## Realistic recurring cost

### Minimum possible
- Domain: usually about $10-$20/year depending on registrar and renewal price
- Hosting: $0 on Netlify Free
- Forms: included in Netlify usage, subject to plan limits
- Business email: optional

### More professional later
- Google Workspace business email: extra recurring cost if you want `quotes@yourdomain.com`
- Netlify Personal or Pro: only if traffic or usage grows enough to justify it

## Why this works without your own server

Netlify hosts the site on its own infrastructure and serves it through a CDN, so your friend does **not** need to keep a home computer running 24/7.

Netlify says the Free plan is $0 forever and includes custom domains with SSL, global CDN, and framework deployment. Netlify also says its Free plan can be used for commercial projects. Netlify Forms are metered on newer credit-based plans, with forms charged per submission. Official references:
- Pricing page
- Free plan announcement
- Forms docs
- Next.js on Netlify docs

## Step-by-step setup

### 1. Create accounts
Create:
- GitHub account if you do not already have one
- Netlify account
- Domain registrar account (Namecheap, Cloudflare Registrar, etc.)

### 2. Put this project in GitHub
From the project folder:

```bash
npm install
git init
git add .
git commit -m "Initial handyman site"
```

Create a new GitHub repo, then connect it:

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### 3. Test locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### 4. Replace placeholder content
Update:
- `app/layout.js` -> title + description
- `app/page.js` -> business name, phone, email, service area, hero text, services
- `data/gallery.js` -> project titles and descriptions
- `data/testimonials.js` -> approved reviews
- `public/gallery/*` -> replace placeholder SVGs with real JPG/PNG/WebP photos

### 5. Deploy to Netlify
In Netlify:
1. Click **Add new project**
2. Choose **Import an existing project**
3. Connect GitHub
4. Select the repo
5. Build command: `npm run build`
6. Publish directory: leave blank if Netlify auto-detects Next.js, or keep Netlify defaults for Next.js
7. Deploy

Netlify says Next.js is supported with zero configuration via its adapter.

### 6. Confirm Netlify Forms detection
After the first deploy:
1. Open the site in Netlify
2. Go to **Forms**
3. Make sure Netlify detected both forms:
   - `quote-request`
   - `review-submission`

If forms do not appear:
- confirm form detection is enabled in Netlify
- redeploy the site
- make sure both forms still have:
  - `name="..."`
  - `method="POST"`
  - `data-netlify="true"`
  - hidden input `name="form-name"`

### 7. Turn on email notifications for form submissions
Inside Netlify:
1. Open **Forms**
2. Click the form name
3. Configure notifications so submissions go to your friend’s email

Your friend can then reply from his inbox normally.

### 8. Connect the custom domain
In Netlify:
1. Open **Domain management**
2. Add the custom domain
3. Follow the DNS instructions from Netlify
4. Wait for SSL/HTTPS to finish provisioning

### 9. Launch checklist
- [ ] Replace all placeholder text
- [ ] Replace all fake phone/email info
- [ ] Add 6-12 real photos
- [ ] Add 3-6 approved testimonials
- [ ] Submit a test quote request
- [ ] Submit a test review
- [ ] Confirm both show in Netlify Forms
- [ ] Confirm notification emails arrive
- [ ] Confirm domain + HTTPS work
- [ ] Confirm mobile layout looks good

## Where to edit each part

- `app/page.js` -> homepage content
- `components/ContactForm.js` -> quote form fields
- `components/ReviewForm.js` -> review form fields
- `app/thanks/page.js` -> quote success page
- `app/thanks-review/page.js` -> review success page
- `data/gallery.js` -> gallery cards
- `data/testimonials.js` -> published testimonials
- `app/globals.css` -> styling
- `netlify.toml` -> Netlify build/plugin settings

## Recommended business workflow

### Quotes
1. Visitor fills out quote form
2. Submission lands in Netlify Forms dashboard
3. Netlify sends notification email
4. Your friend replies manually by text/email/call

### Reviews
1. Customer fills out review form
2. Submission lands in Netlify Forms dashboard
3. You manually approve good reviews
4. Copy approved ones into `data/testimonials.js`
5. Commit and redeploy

## Important note about public comments

For a small handyman business, I do **not** recommend auto-publishing customer comments directly to the site. Manual approval is safer and avoids spam, fake reviews, or abusive content.
