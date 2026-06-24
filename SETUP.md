# 🎯 Apple Clone - Complete Setup Guide

## Prerequisites Checklist
- [ ] Node.js v14+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Code editor (VS Code recommended)
- [ ] Modern web browser (Chrome, Firefox, Safari, Edge)

## Step-by-Step Setup

### Step 1: Extract and Navigate
```bash
# Extract the apple-clone folder
# Open terminal/command prompt
cd path/to/apple-clone
```

### Step 2: Verify Folder Structure
Your project should have:
```
apple-clone/
├── src/
│   ├── index.html
│   ├── js/
│   ├── styles/
│   └── assets/
├── package.json
├── webpack.config.js
├── tsconfig.json
└── README.md
```

If not, the project is incomplete. Re-extract and verify.

### Step 3: Install Dependencies
```bash
npm install
```

This installs:
- `gsap` - Animation library
- `three` - 3D graphics
- `webpack` - Module bundler
- `typescript` - Type safety
- `sass` - CSS preprocessing
- And other dev tools

⏱️ Takes 2-5 minutes depending on internet speed

### Step 4: Start Development Server
```bash
npm start
```

Expected output:
```
Webpack development server started
Compiled successfully
Opening http://localhost:3000
```

Browser should auto-open the site.

### Step 5: Verify Everything Works

Check these items:
- [ ] Page loads at http://localhost:3000
- [ ] Apple logo visible in header
- [ ] Hero sections display properly
- [ ] Mobile menu works (tap burger icon on mobile view)
- [ ] Dark mode works (press 'D' key)
- [ ] Video slider auto-plays
- [ ] Smooth scroll when clicking nav links
- [ ] Images load without errors

## 📱 Testing Responsive Design

### In Browser DevTools
1. Press `F12` to open DevTools
2. Click device toggle (top-left corner)
3. Test these breakpoints:
   - Desktop (1024px+)
   - Tablet (768px)
   - Mobile (480px)

### Common Issues & Fixes

#### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

#### Issue: Port 3000 already in use
**Solution:** Change port in `webpack.config.js`:
```javascript
devServer: {
    port: 3001,  // or any free port
}
```

#### Issue: Module not found errors
**Solution:**
```bash
rm -rf node_modules
npm cache clean --force
npm install
npm start
```

#### Issue: Webpack build errors
**Solution:**
```bash
npm install --save-dev webpack@latest
npm start
```

## 🎨 Making Changes

### Edit HTML
File: `src/index.html`
- Changes auto-reload in browser
- Edit any section directly

### Edit Styles
File: `src/styles/main.scss`
- Changes compile automatically
- Supports SCSS syntax (variables, nesting, etc.)

### Edit JavaScript
File: `src/js/main.ts`
- TypeScript with full IDE support
- Auto-compiles and hot-reloads

### Add Images
1. Place images in `src/assets/images/`
2. Reference in HTML: `./assets/images/filename.webp`

### Add Videos
1. Place MP4 videos in `src/assets/videos/`
2. Update HTML video sources

## 🚀 Production Build

When ready to deploy:

```bash
npm run build
```

This creates optimized files in `dist/` folder:
- `dist/index.html`
- `dist/bundle.js` (minified)
- `dist/styles.css` (minified)
- `dist/assets/` (optimized images/videos)

### Deploy to GitHub Pages
```bash
# Build project
npm run build

# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Create gh-pages branch
git branch -M gh-pages

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/apple-clone.git
git push -u origin gh-pages

# Enable GitHub Pages in repo settings
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build
npm run build

# Visit netlify.com
# Drag dist/ folder to deploy
```

## 🔧 Advanced Configuration

### Change Video Autoplay Speed
File: `src/js/main.ts`
```typescript
sliderState.autoplayInterval = setInterval(() => {
    nextSlide();
}, 5000);  // Change 5000 to milliseconds (1000 = 1 second)
```

### Change Colors
File: `src/styles/main.scss`
```scss
$primary-color: #0071e3;        // Your brand color
$dark-bg: #1d1d1f;              // Dark mode background
$light-bg: #fff;                // Light mode background
```

### Change Fonts
File: `src/styles/main.scss`
```scss
body {
    font-family: 'Your Font', sans-serif;
}
```

### Disable 3D Scene
File: `src/js/main.ts`
Comment out this line:
```typescript
// @ts-ignore
// import "./threeScene";
```

## 📊 Understanding the Build Process

```
Source Code (src/)
        ↓
    Webpack
        ↓
TypeScript → JavaScript
    SCSS → CSS
    Images → Optimized
        ↓
  Build Output (dist/)
        ↓
   Deploy or Host
```

## 🎓 Development Tips

### Use TypeScript
- Get IDE autocomplete
- Catch errors before runtime
- Better refactoring support

### Use DevTools
- `F12` - Open DevTools
- `Ctrl+Shift+I` (Windows)
- `Cmd+Option+I` (Mac)

### Check Console
- Open DevTools Console tab
- Look for errors in red
- Use `console.log()` for debugging

### CSS DevTools
- Inspect elements (F12 → Inspector)
- Edit CSS live to test changes
- Copy changes to `main.scss` when satisfied

## 🐛 Debugging

### Enable Source Maps
Source maps are already enabled in `tsconfig.json`:
```json
"sourceMap": true
```

This lets you debug TypeScript directly in DevTools.

### Debug JavaScript
1. Open DevTools (F12)
2. Go to Sources tab
3. Set breakpoints by clicking line numbers
4. Code pauses at breakpoints
5. Step through code line by line

### Check Network Tab
1. Open DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Check file sizes and load times

## 📚 File Reference

| File | Purpose |
|------|---------|
| `src/index.html` | Main page structure |
| `src/js/main.ts` | App logic, animations, interactions |
| `src/js/threeScene.ts` | 3D scene (optional) |
| `src/styles/main.scss` | All styling |
| `webpack.config.js` | Build configuration |
| `tsconfig.json` | TypeScript settings |
| `package.json` | Dependencies and scripts |
| `.gitignore` | Git ignore rules |

## 🎯 Next Steps

1. **Customize Colors** - Edit SCSS variables
2. **Add Your Content** - Replace example content with yours
3. **Upload Media** - Add your images and videos
4. **Test Responsive** - Check on different devices
5. **Optimize** - Run production build
6. **Deploy** - Upload to hosting

## 🆘 Need Help?

### Check Console
```javascript
// Open DevTools (F12) → Console tab
// Look for error messages
```

### Common Errors

**"Cannot find module"**
- Run `npm install`
- Delete `node_modules/` and reinstall

**"Module failed to parse"**
- Check file syntax
- Ensure proper quotes and semicolons

**"Port already in use"**
- Change port in webpack.config.js
- Or kill process using port

**"Videos not playing"**
- Verify MP4 files exist in `src/assets/videos/`
- Check browser console for errors
- Some browsers may need different formats

## 📞 Support Resources

- [Node.js Help](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Webpack Guide](https://webpack.js.org/guides/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [GSAP Tutorial](https://greensock.com/gsap/)

## ✅ Deployment Checklist

Before deploying:
- [ ] Run `npm run build`
- [ ] Test `dist/` folder locally
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Optimize images (use WebP)
- [ ] Test performance (DevTools Lighthouse)
- [ ] Update meta tags in HTML
- [ ] Set up analytics (optional)

## 🎉 You're Ready!

You now have a fully functional Apple Clone website. Time to:
1. Customize with your brand
2. Add your content
3. Optimize for your audience
4. Deploy and share!

---

**Questions?** Check README.md or browser console for errors.

**Good luck! 🚀**
