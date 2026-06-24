# 🍎 Apple Clone - Modern Web Experience

A beautifully designed Apple website clone built with cutting-edge web technologies. Features responsive design, smooth animations, video slider, and dark mode support.

## ✨ Features

### 🎬 Interactive Components
- **Responsive Navigation** with mobile burger menu
- **Hero Sections** with smooth GSAP animations
- **Product Grid** with hover effects and interactions
- **Video Slider** with autoplay, manual controls, and keyboard navigation
- **Tech Stack Showcase** with glowing hover effects
- **Three.js 3D Scene** (optional, in background)

### 🌓 Dark Mode
- Press **'D'** to toggle dark/light mode
- Preferences saved in localStorage
- Smooth transitions

### 📱 Fully Responsive
- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (480px - 768px)
- Small Mobile (below 480px)

### ⚡ Performance Optimized
- Lazy loading for images
- Optimized animations with GSAP
- Webpack bundling and minification
- Modern CSS with SCSS

## 🚀 Quick Start

### Prerequisites
- Node.js v14 or higher
- npm or yarn

### Installation & Setup

1. **Extract and navigate**
```bash
cd apple-clone
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```
The project opens at `http://localhost:3000`

## 📦 Available Scripts

- `npm start` - Development server with hot reload
- `npm run build` - Production build
- `npm test` - Run tests (if configured)

## 🎮 Interactive Features

### Video Slider Controls
| Control | Action |
|---------|--------|
| ❮ ❯ Buttons | Navigate slides |
| Dot indicators | Jump to slide |
| Arrow Keys (← →) | Next/Previous |
| Auto-play | Every 5 seconds |
| Hover | Pause autoplay |

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| **D** | Toggle dark mode |
| **← →** | Navigate video slider |
| **#** (anchor links) | Smooth scroll |

### Mobile Menu
- Tap burger icon (☰) to open
- Click any link to close
- Smooth backdrop blur animation

## 📁 Project Structure

```
apple-clone/
├── src/
│   ├── index.html              # Main page
│   ├── js/
│   │   ├── main.ts            # Main app logic
│   │   └── threeScene.ts      # 3D scene (optional)
│   ├── styles/
│   │   └── main.scss          # All styles
│   └── assets/
│       ├── images/            # Product images
│       │   ├── iphone-16.webp
│       │   ├── iphone-16-pro.webp
│       │   ├── macbook-air.webp
│       │   ├── ipad-air.webp
│       │   ├── airpods-pro.webp
│       │   └── watch-ultra.webp
│       └── videos/            # Video files
│           ├── video1.mp4
│           ├── video2.mp4
│           └── video3.mp4
├── dist/                      # Build output (auto-generated)
├── webpack.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 🎨 Customization

### Change Colors
Edit `src/styles/main.scss`:
```scss
$primary-color: #0071e3;        // Primary blue
$dark-bg: #1d1d1f;              // Dark background
$light-bg: #fff;                // Light background
```

### Adjust Animation Speed
In `src/js/main.ts`:
```typescript
sliderState.autoplayInterval = setInterval(() => {
    nextSlide();
}, 5000);  // Change 5000 to desired milliseconds
```

### Customize Video Sources
In `src/index.html`:
```html
<video class="slide" muted>
    <source src="./assets/videos/your-video.mp4" type="video/mp4">
</video>
```

## 🔧 Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **SCSS** - Advanced styling with variables
- **TypeScript** - Type-safe JavaScript
- **GSAP 3** - Advanced animations
- **Three.js** - 3D graphics (optional)

### Build & Dev Tools
- **Webpack 5** - Module bundler
- **TypeScript Compiler** - TS to JS
- **Webpack Dev Server** - Development server
- **CSS/SASS Loaders** - Asset processing

### Dependencies
```json
{
  "gsap": "^3.15.0",
  "three": "^0.181.2"
}
```

## 📊 Performance Tips

1. **Compress Videos**
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 output.mp4
```

2. **Image Optimization**
- Use WebP format (already implemented)
- Proper image sizes for different screens

3. **Production Build**
```bash
npm run build
```
- Minifies code
- Tree-shakes unused code
- Optimizes bundle size

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push origin gh-pages
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder contents to your server
3. Point domain to server

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## 📚 Learning Resources

- [GSAP Documentation](https://greensock.com/gsap/)
- [Three.js Documentation](https://threejs.org/)
- [Webpack Guide](https://webpack.js.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/)
- [SCSS Guide](https://sass-lang.com/)

## 🐛 Troubleshooting

### Issue: Port 3000 already in use
**Solution:** Edit `webpack.config.js`:
```javascript
devServer: {
    port: 3001
}
```

### Issue: Videos not playing
**Solutions:**
- Verify files in `src/assets/videos/`
- Check console for errors (F12)
- Ensure MP4 format (other formats may not work)
- Check browser codec support

### Issue: Styles not loading
**Solutions:**
- Run `npm install` again
- Delete `node_modules/` and reinstall
- Check webpack config for SCSS loader
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Three.js errors
**Solution:** The 3D scene is optional. It won't affect functionality if it fails.

## 📈 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement product filtering
- [ ] Add payment integration
- [ ] Create product detail pages
- [ ] Add customer reviews
- [ ] Implement search functionality
- [ ] Add comparison tool
- [ ] Create wish list feature

## 📄 License

MIT License - Free for personal and commercial use

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📧 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Check browser console for errors (F12)
3. Create an issue in the repository

---

**Made with ❤️ using modern web technologies**

**Last Updated:** June 2024
**Version:** 1.0.0
