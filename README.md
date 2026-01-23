# Portfolio - React + Vite + Tailwind CSS

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning-fast development server and build tool
- ⚛️ **React 19** - Latest React version with modern hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌓 **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- 🧭 **React Router** - Client-side routing for seamless navigation
- 🎯 **Modern UI** - Clean and professional interface

## Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Static assets (images, SVGs)
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── context/         # React context providers
│   │   └── DarkModeContext.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind directives
├── old-html-version/    # Original HTML/CSS/JS files (backup)
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Technologies Used
## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **Google Fonts** - Baloo 2 & Aref Ruqaa
- **Material Symbols** - Icons
## Features Implemented

### Dark Mode
- Context-based dark mode management
- Persistent theme preference using localStorage
- Smooth transitions between themes
- Custom Tailwind dark mode classes

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Adaptive layouts for all screen sizes
- Hidden elements on mobile for better UX

### Navigation
- Client-side routing with React Router
- Active link highlighting
- Smooth page transitions
- Fixed header with blur effect

### Pages
- **Home** - Hero section, skills showcase, featured projects
- **About** - Personal bio and background
- **Projects** - Full project portfolio with detailed cards
- **Contact** - Contact form with validation

## Migration from HTML/CSS/SASS

This project was successfully migrated from a static HTML/CSS/SASS website to a modern React application:

- ✅ All pages converted to React components
- ✅ SASS styles converted to Tailwind CSS utility classes
- ✅ Vanilla JavaScript converted to React hooks and context
- ✅ Dark mode functionality preserved and improved
- ✅ Responsive design maintained
- ✅ All assets migrated
- ✅ Original files backed up in `old-html-version/`

## License

ISC

## Author

Aymane Elboudadi

- GitHub: [@AymaneOnline](https://github.com/AymaneOnline)
- Twitter: [@AymaneOnX](https://x.com/AymaneOnX)
- LinkedIn: [Aymane Elboudadi](https://www.linkedin.com/in/aymane-elboudadi-833a6b252/)
