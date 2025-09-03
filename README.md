# FitHza Indonesia Portfolio

A modern, responsive React application for FitHza Indonesia fitness center built with TypeScript, Vite, and inline CSS styling.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and TypeScript
- **Component-Based Design**: Modular components for better maintainability
- **Inline Styling**: CSS-in-JS approach for component encapsulation
- **Responsive Design**: Mobile-first design with JavaScript-based breakpoints
- **Interactive UI**: Smooth animations and hover effects
- **Form Validation**: Client-side validation with localStorage integration
- **Routing**: React Router for navigation between pages

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── member/         # Member page specific components
│   │   ├── MemberBenefits.tsx
│   │   ├── MemberContact.tsx
│   │   ├── MemberFAQ.tsx
│   │   ├── MemberHero.tsx
│   │   └── MemberPackages.tsx
│   ├── class/          # Class page specific components
│   │   ├── AllClass.tsx
│   │   ├── BannerClass.tsx
│   │   ├── CardClass.tsx
│   │   ├── CTAClass.tsx
│   │   └── FAQClass.tsx
│   ├── shared/         # Shared components used across pages
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── Notification.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── RegistrationModal.tsx
│   │   └── WhyChooseSection.tsx
│   ├── Banner.tsx      # Home page banner
│   ├── CardHome.tsx    # Home page cards
│   ├── ClassSection.tsx # Home page class section
│   ├── FaqSection.tsx  # Home page FAQ section
│   ├── MembershipSection.tsx # Home page membership section
│   └── PersonalTrainerSection.tsx # Home page trainer section
├── pages/              # Page components (routes)
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Member.tsx      # Membership page
│   ├── PersonalTrainer.tsx # Personal trainer page
│   ├── Class.tsx       # Class overview page
│   ├── StrengthClass.tsx # Strength class detail page
│   ├── CardioClass.tsx # Cardio class detail page
│   ├── DanceClass.tsx  # Dance class detail page
│   ├── MindBodyClass.tsx # Mind & body class detail page
│   └── DataPrivacy.tsx # Data privacy page
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
```
│   ├── About.tsx       # About page
│   └── Member.tsx      # Member/Membership page
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx            # App entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Inline CSS** - Styling approach
- **ESLint** - Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gym-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages

### Home Page (`/`)
- Hero banner with call-to-action
- Why choose section
- Class offerings
- Membership information
- Personal trainer section
- FAQ section

### About Page (`/about`)
- Hero section
- About content
- Why choose section

### Member Page (`/member`)
- Membership hero
- Benefits grid
- Package selection with modal
- Contact information
- FAQ section

## 🎨 Design System

### Colors
- Primary: `#4D55CC`
- Secondary: `#667eea`
- Accent: `#764ba2`
- Text: `#333333`
- Light Text: `#666666`
- Background: `#ffffff`
- Light Background: `#f8f9fa`

### Typography
- Font Family: System fonts (Apple System, Segoe UI, Roboto, etc.)
- Font Weights: 400, 500, 600, 700
- Line Height: 1.6

### Components
- All components use inline styles for better encapsulation
- Responsive design with JavaScript-based media queries
- Consistent hover effects and transitions
- Accessible form controls and navigation

## 🔧 Development

### Code Style
- ESLint configuration for consistent code quality
- TypeScript for type safety
- Component naming conventions
- Inline style organization

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Handle responsive design with JavaScript
- Maintain consistent styling patterns
- Add proper error handling

## 📄 License

This project is private and proprietary to FitHza Indonesia.

## 🤝 Contributing

1. Follow the established code style
2. Use TypeScript interfaces for props
3. Implement responsive design
4. Test components across different screen sizes
5. Maintain component modularity
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
