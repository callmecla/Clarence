# ⚙️ Configuration Guide

## 🔧 Quick Setup Checklist

Before deploying your portfolio, replace these placeholders:

### 1. EmailJS Configuration (script.js - Lines 3-6)
```javascript
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',      // ← Replace this
    templateID: 'YOUR_TEMPLATE_ID',    // ← Replace this
    publicKey: 'YOUR_PUBLIC_KEY'       // ← Replace this
};
```

**How to get these:**
1. Go to https://dashboard.emailjs.com/
2. Sign up/Login
3. Create a new Email Service (Gmail, Outlook, etc.)
4. Create a new Email Template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`
5. Copy your Service ID, Template ID, and Public Key
6. Paste them in script.js

---

### 2. Social Media Links (index.html - Lines 167-189)

**Facebook:**
```html
<a href="https://www.facebook.com/YOUR_FACEBOOK_USERNAME" ...>
```
Replace `YOUR_FACEBOOK_USERNAME` with your actual Facebook username/profile URL

**LinkedIn:**
```html
<a href="https://linkedin.com/in/clarenceofloresi" ...>
```
✅ Already configured correctly!

**GitHub:**
```html
<a href="https://github.com/YOUR_GITHUB_USERNAME" ...>
```
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username

---

### 3. Profile Image (index.html - Line 56)

```html
<img src="/mnt/user-data/uploads/1770426713349_image.png" alt="Clarence Kyle M. Flores">
```

**Change to:**
```html
<img src="image.png" alt="Clarence Kyle M. Flores">
```

Then:
1. Rename your profile photo to `image.png`
2. Place it in the same folder as index.html

---

## 📋 File Checklist

Before deploying, make sure you have:
- [ ] index.html
- [ ] styles.css
- [ ] script.js
- [ ] image.png (your profile photo)
- [ ] README.md (optional)

---

## 🚀 Ready to Deploy?

Once you've replaced all placeholders:

1. **Test Locally:**
   - Open index.html in your browser
   - Test the contact form
   - Check all links work
   - Toggle light/dark mode

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```
   Or drag & drop to https://vercel.com

3. **Get Your Custom Domain:**
   - Your site: `your-name.vercel.app`
   - Add custom domain in Vercel settings

---

## ❓ Need Help?

**EmailJS Not Working?**
- Tutorial: https://www.emailjs.com/docs/
- Video guide: Search "EmailJS tutorial" on YouTube

**Vercel Deployment Issues?**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

**Can't Find Something?**
- Use Ctrl+F (or Cmd+F on Mac) to search files
- Look for "YOUR_" or "REPLACE" in all files

---

## 🎯 Optional Enhancements

After basic setup, consider:
- Adding Google Analytics
- Setting up a custom domain
- Adding more projects/portfolio items
- Creating a blog section
- Adding testimonials

Good luck with your portfolio! 🎉