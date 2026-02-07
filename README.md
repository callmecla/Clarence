# Clarence Kyle M. Flores - Portfolio Website

A modern, responsive portfolio website with light/dark mode toggle and contact form integration.

## 🚀 Features

- ✨ Light/Dark mode toggle (with preference saved)
- 📱 Fully responsive design
- 📧 EmailJS contact form integration
- ⬆️ Scroll to top button
- 🎨 Smooth animations and transitions
- 🔗 Clickable education cards linking to university websites
- 💼 Social media integration

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── image.png           # Your profile photo
└── README.md           # This file
```

## 🛠️ Setup Instructions

### 1. Fix Image Path

Replace the profile image path in `index.html`:

```html
<!-- Find this line (around line 56): -->
<img src="/mnt/user-data/uploads/1770426713349_image.png" alt="Clarence Kyle M. Flores">

<!-- Replace with: -->
<img src="image.png" alt="Clarence Kyle M. Flores">
```

Then rename your profile photo to `image.png` and place it in the same folder as index.html.

### 2. Configure EmailJS

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

3. Open `script.js` and replace the placeholders (lines 2-6):

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'service_xxxxxxx',      // Your Service ID
    templateID: 'template_xxxxxxx',    // Your Template ID
    publicKey: 'xxxxxxxxxxxxxxx'       // Your Public Key
};
```

#### EmailJS Template Setup

Create a template in EmailJS with these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Clarence Kyle M. Flores)

Example template:
```
New message from {{from_name}}

From: {{from_email}}

Message:
{{message}}
```

### 3. Update Social Media Links

Open `index.html` and update your social media URLs in the footer (around line 167):

```html
<!-- Facebook -->
<a href="https://www.facebook.com/YOUR_FACEBOOK_USERNAME" ...>

<!-- LinkedIn (already correct) -->
<a href="https://linkedin.com/in/clarenceofloresi" ...>

<!-- GitHub -->
<a href="https://github.com/YOUR_GITHUB_USERNAME" ...>
```

## 🌐 Deploying to Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to your project folder:
```bash
cd path/to/portfolio
```

3. Deploy:
```bash
vercel
```

4. For production:
```bash
vercel --prod
```

### Method 2: Vercel Dashboard (Recommended)

1. **Prepare GitHub Repository** (optional but recommended):
   - Create a new repository on GitHub
   - Upload all files (index.html, styles.css, script.js, image.png)
   - Commit and push

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository (or drag & drop files)
   - Project settings:
     - Framework Preset: "Other"
     - Root Directory: `./`
   - Click "Deploy"

3. **Your site will be live at**: `your-project-name.vercel.app`

### Method 3: Direct Upload

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop your entire portfolio folder
3. Vercel will automatically detect it as a static site
4. Click "Deploy"

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css`:

**Light Mode** (lines 1-12):
```css
:root {
    --primary: #F8F9FA;
    --accent: #2B7A78;
    --accent-warm: #FF6B6B;
    /* ... more colors */
}
```

**Dark Mode** (lines 14-24):
```css
body.dark-mode {
    --primary: #0A192F;
    --accent: #64FFDA;
    --accent-warm: #FFB86C;
    /* ... more colors */
}
```

### Fonts

Current fonts: Playfair Display (headings) & DM Sans (body)

To change, update the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

Then update the font-family in `styles.css`.

## 📝 Content Updates

### Education
Edit the education section in `index.html` (around line 57)

### Experience
Edit the experience section in `index.html` (around line 78)

### Skills
Edit the skills section in `index.html` (around line 113)

### Seminars
Edit the seminars section in `index.html` (around line 95)

## 🐛 Troubleshooting

**EmailJS not working?**
- Check console for errors (F12 in browser)
- Verify Service ID, Template ID, and Public Key are correct
- Ensure EmailJS template variables match the script
- Check EmailJS dashboard for usage limits

**Image not showing?**
- Verify image file is in the same folder as index.html
- Check image filename matches exactly (case-sensitive)
- Ensure image path in HTML is correct

**Theme toggle not saving?**
- Check browser localStorage is enabled
- Clear cache and try again

## 📞 Support

For issues or questions, contact:
- Email: flores.clarencekyle.marcrispin@gmail.com
- LinkedIn: [linkedin.com/in/clarenceofloresi](https://linkedin.com/in/clarenceofloresi)

## 📄 License

© 2026 Clarence Kyle M. Flores. All rights reserved.

---

**Built with ❤️ using HTML, CSS, and JavaScript**