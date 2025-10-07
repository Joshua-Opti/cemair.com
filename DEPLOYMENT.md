# CemAir Website Deployment Guide

## 🚀 GitHub Pages Deployment

This guide explains how to deploy the CemAir website to GitHub Pages.

### Prerequisites
- GitHub account
- Repository with the CemAir website code
- GitHub Pages enabled

### Automatic Deployment (Recommended)

The website is configured for automatic deployment using GitHub Actions:

1. **Push code to main branch**
2. **GitHub Actions automatically builds and deploys**
3. **Website is live at**: `https://joshua-opti.github.io/cemair.com/`

### Manual Deployment Steps

#### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **"GitHub Actions"**
5. Save the settings

#### 2. Build the Website
```bash
# Install dependencies
npm install

# Build for GitHub Pages
npm run build:gh-pages

# Verify build
npm run deploy:check
```

#### 3. Deploy
The GitHub Actions workflow will automatically:
- Install dependencies
- Build the website
- Deploy to GitHub Pages

### Configuration Files

#### `.github/workflows/deploy.yml`
- Automatically builds and deploys on push to main
- Uses Node.js 18
- Deploys to GitHub Pages

#### `.github/workflows/build.yml`
- Runs tests and linting
- Builds the application
- Uploads build artifacts

#### `vite.config.js`
- Configured with base path: `/cemair.com/`
- Optimized for production builds
- Asset optimization enabled

### Build Scripts

```bash
# Development
npm run dev

# Build for GitHub Pages
npm run build:gh-pages

# Preview GitHub Pages build
npm run preview:gh-pages

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format

# Check deployment
npm run deploy:check
```

### Troubleshooting

#### Common Issues

1. **404 Errors**
   - Ensure base path is set to `/cemair.com/`
   - Check that all assets are in the correct directory
   - Verify GitHub Pages is enabled

2. **Build Failures**
   - Check Node.js version (requires 18+)
   - Ensure all dependencies are installed
   - Check for TypeScript/ESLint errors

3. **Assets Not Loading**
   - Verify asset paths include `/cemair.com/` prefix
   - Check that files are in the `dist/` directory
   - Ensure proper MIME types

#### Debug Commands

```bash
# Check build output
ls -la dist/

# Verify configuration
cat vite.config.js

# Test locally with GitHub Pages base path
npm run preview:gh-pages
```

### Performance Optimization

The website is optimized for:
- **Lighthouse Score**: 90+
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Image Optimization**: WebP format, lazy loading
- **Code Splitting**: Automatic vendor chunking
- **Caching**: Service worker for offline functionality

### SEO Configuration

- **Sitemap**: `/cemair.com/sitemap.xml`
- **Robots**: `/cemair.com/robots.txt`
- **Meta Tags**: Optimized for search engines
- **Open Graph**: Social media sharing
- **Structured Data**: JSON-LD for rich snippets

### Security

- **HTTPS**: Automatically enabled by GitHub Pages
- **Content Security Policy**: Configured in headers
- **XSS Protection**: Built into React
- **Input Validation**: Form validation and sanitization

### Monitoring

- **GitHub Actions**: Build and deployment status
- **GitHub Pages**: Deployment logs
- **Lighthouse**: Performance monitoring
- **Console**: Error tracking

### Support

For deployment issues:
1. Check GitHub Actions logs
2. Verify configuration files
3. Test locally with `npm run preview:gh-pages`
4. Check browser console for errors

### Custom Domain (Optional)

To use a custom domain like `cemair.co.za`:

1. Add `CNAME` file to repository root
2. Configure DNS settings
3. Enable custom domain in GitHub Pages settings

---

**Website URL**: https://joshua-opti.github.io/cemair.com/
**Repository**: https://github.com/joshua-opti/cemair.com
