# 🚀 Amine Ben Jebli - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my skills as a Full Stack Mobile Developer. Features an elegant design with smooth animations, interactive components, and a fully functional contact form.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with dark/light theme support
- **⚡ Performance Optimized**: Built with Next.js 15 App Router for optimal performance
- **📱 Fully Responsive**: Seamless experience across all devices
- **🎭 Smooth Animations**: Framer Motion powered animations and transitions
- **📧 Contact Form**: Functional contact form with email integration via Resend API
- **🔍 SEO Optimized**: Meta tags and structured data for better search visibility
- **♿ Accessible**: WCAG compliant with proper semantic HTML
- **🌓 Theme Toggle**: Dynamic light/dark mode with system preference detection

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0 with CSS Custom Properties
- **UI Components**: ShadCN UI + Radix UI
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React + React Icons
- **Fonts**: Geist Sans & Geist Mono

### Backend & Services

- **Email Service**: Resend API for contact form
- **Form Validation**: Zod + React Hook Form
- **Notifications**: Sonner for toast messages

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint with Next.js configuration
- **Type Checking**: TypeScript strict mode
- **Development**: Turbopack for fast refresh

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aminebenjebli/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Setup**

   ```bash
   cp .env.local.example .env.local
   ```

   Update `.env.local` with your configuration:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=your.email@example.com
   FROM_EMAIL=noreply@yourdomain.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   ├── layout/           # Layout components
│   ├── navigation.tsx    # Main navigation
│   └── theme-toggle.tsx  # Theme switcher
├── data/                 # Static data
│   ├── projects.ts       # Projects information
│   ├── skills.ts         # Skills categorization
│   ├── technologies.ts   # Technology stack
│   └── animations.ts     # Animation variants
├── lib/                  # Utilities
│   └── utils.ts          # Helper functions
└── types/                # TypeScript definitions
    └── contact.dto.ts    # Contact form types
```

## 🎨 Key Sections

### Hero Section

- Animated introduction with gradient text effects
- Professional headshot and call-to-action buttons
- Smooth scroll navigation

### About Section

- Personal introduction and background
- Animated skill cards with category icons
- Technology showcase with brand icons
- Professional metrics with animated progress bars

### Projects Section

- Featured project cards with hover effects
- Technology tags and live demo links
- Responsive grid layout

### Contact Section

- Functional contact form with validation
- Real-time error handling and success notifications
- Contact information and social links

## 📧 Contact Form Setup

The contact form uses Resend API for email delivery. For detailed setup instructions, see [CONTACT_SETUP.md](./CONTACT_SETUP.md).

### Quick Setup:

1. Get your Resend API key from [resend.com](https://resend.com)
2. Add it to `.env.local`
3. Configure your email addresses
4. The form is ready to use!

## 🎭 Animation System

The portfolio features a comprehensive animation system using Framer Motion:

- **Page Transitions**: Smooth enter/exit animations
- **Scroll Animations**: Elements animate on scroll into view
- **Hover Effects**: Interactive hover states for cards and buttons
- **Text Animations**: Character-by-character text reveals
- **Loading States**: Skeleton loaders and progress indicators

## 🌓 Theme System

Advanced theming system with:

- System preference detection
- Manual theme toggle
- CSS custom properties for consistent theming
- Theme-aware components and icons

## 📱 Responsive Design

Fully responsive design with breakpoints:

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## ⚡ Performance

- **Core Web Vitals**: Optimized for excellent scores
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Self-hosted fonts with display swap
- **Bundle Analysis**: Code splitting and tree shaking
- **Caching**: Static generation with ISR support

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Code formatting (configure as needed)
- **Git Hooks**: Pre-commit validation (can be added)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The project can be deployed on any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 SEO & Analytics

- **Meta Tags**: Comprehensive meta tag setup
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated sitemap (can be added)
- **Analytics**: Ready for Google Analytics integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Amine Ben Jebli**

- Email: aminebenjebli@gmail.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- Portfolio: [Live Demo](https://your-portfolio-url.com)

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by [Amine Ben Jebli](https://github.com/aminebenjebli)
