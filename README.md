# CemAir Website

A modern, high-performance website for CemAir - South Africa's premier regional airline.

## 🚀 Features

- **Modern Design**: Clean, responsive design with consistent spacing and typography
- **Performance Optimized**: Built with Vite, optimized images, and lazy loading
- **Accessibility Compliant**: WCAG 2.1 AA compliant with keyboard navigation
- **Mobile-First**: Responsive design that works on all devices
- **SEO Optimized**: Semantic HTML, meta tags, and structured data
- **PWA Ready**: Service worker and manifest for offline functionality

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Date-fns** - Date manipulation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/cemair/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run performance tests:

```bash
npm run lighthouse
```

## 📱 Pages

- **Homepage** - Hero section, quick booking, services overview
- **About** - Company story, mission, values, team
- **Services** - Scheduled flights, charter, leasing, cargo
- **Booking** - Flight search and booking system
- **Contact** - Contact information and form
- **News** - Latest news and updates
- **Customer Portal** - User account management

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Secondary**: Gray (#64748b)
- **Accent**: Red (#ef4444)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (body text)

### Spacing
- 8px grid system for consistent spacing
- Responsive breakpoints: 320px, 768px, 1024px, 1440px

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion support
- Focus management
- ARIA labels and landmarks

## 🚀 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: WebP format, lazy loading
- **Code Splitting**: Automatic code splitting with Vite
- **Caching**: Service worker for offline functionality
- **CDN Ready**: Optimized for CDN deployment

## 📊 Performance Targets

- **Mobile Performance**: 90+
- **Desktop Performance**: 95+
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.cemair.co.za
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_SENTRY_DSN=your_sentry_dsn
```

### Build Configuration
The build is configured in `vite.config.js` with:
- Code splitting for vendor libraries
- Terser minification
- Source map generation (disabled in production)
- Asset optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Set environment variables in Netlify dashboard

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server for SPA routing

## 📈 Analytics

The website includes:
- Google Analytics 4 integration
- Performance monitoring
- User behavior tracking
- Conversion tracking

## 🔒 Security

- HTTPS enforcement
- Content Security Policy
- XSS protection
- CSRF protection for forms
- Input validation and sanitization

## 🌐 SEO

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Canonical URLs

## 📱 PWA Features

- Service worker for offline functionality
- Web app manifest
- Installable on mobile devices
- Offline page caching
- Background sync

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

### Accessibility Tests
```bash
npm run test:a11y
```

### Performance Tests
```bash
npm run lighthouse
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@cemair.co.za or visit our [contact page](https://www.cemair.co.za/contact).

## 🔄 Changelog

### v1.0.0
- Initial release
- Complete website rebuild
- Performance optimizations
- Accessibility compliance
- Mobile-first design
- PWA features

---

Built with ❤️ by the CemAir development team.
