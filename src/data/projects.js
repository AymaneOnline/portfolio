import getwaitlyLogo from "../assets/images/getwaitly-logo.svg";
import getwaitlyScreenshot from "../assets/images/getwaitly.png";
import memoryTilesLogo from "../assets/images/memory-tiles-logo.png";
import memoryTilesScreenshot from "../assets/images/memory-tiles-screenshot.png";

export const projects = [
  {
    slug: "getwaitly",
    title: "GetWaitly",
    tagline: "The simple, fast, affordable waitlist tool for indie hackers",
    logo: getwaitlyLogo,
    screenshot: getwaitlyScreenshot,
    screenshotAlt: "GetWaitly waitlist dashboard interface",
    demo: "https://getwaitly.com",
    demoLabel: "Visit getwaitly.com",
    demoRoute: "/projects/getwaitly/demo",
    demoRouteLabel: "Try the demo",
    demos: [
      {
        id: "full-widget",
        type: "full-widget",
        waitlistId: "dHlUyEmynQv",
        title: "Full widget embed",
        description:
          "Paste a single script tag on any site and GetWaitly renders a branded waitlist form that matches your colors and fonts. Try the full widget below — submit your email to see the signup flow live.",
      },
      {
        id: "mini-widget",
        type: "mini-widget",
        waitlistId: "8cesMilRvke",
        title: "Mini widget",
        description:
          "A compact, email-only signup form for tight spaces — sidebars, footers, or in-line CTAs. Drop in the same script tag, add the mini widget container, and it renders instantly.",
      },
      {
        id: "docked-widget",
        type: "docked-widget",
        waitlistId: "cnrY_rjG7k0",
        title: "Docked widget",
        description:
          "An email field with the submit button built right in — ideal for a site footer. One script tag, one container, and it docks into place fully styled.",
      },
    ],
    role: "Solo developer (design + code)",
    year: "2026",
    status: "Live",
    overview:
      "GetWaitly is a production SaaS waitlist platform built for indie hackers and solo founders. It lets you create a polished waitlist page in minutes, collect email signups, seed viral referral loops, and send automated broadcasts — without touching a single line of code.",
    problem:
      "Launching a product is hard enough — but most indie hackers and solo founders still have to hand-build a landing page, a signup form, and a way to reach their early users. Existing tools are either too expensive, too rigid, or leave you to string together your own scripts.",
    features: [
      "Create a branded waitlist page in minutes — no code required",
      "Drag-and-drop styles: colors, fonts, and a signup form that matches your brand",
      "Embeddable widget: paste one script tag on any site (Carrd, Webflow, WordPress, Framer)",
      "Hosted pages at getwaitly.com/w/your-id for products without a website",
      "Referral system with unique links that move subscribers up the list",
      "Analytics dashboard tracking visitors, signups, and conversion",
    ],
    result:
      "Shipped end-to-end as a paid SaaS — subscription billing via Lemon Squeezy, authentication, and automated transactional email flows — deployed to Cloudflare with GitHub Actions CI/CD.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Auth.js",
      "Lemon Squeezy",
      "Cloudflare",
    ],
  },
  {
    slug: "memory-tiles-game",
    title: "Memory Tiles Game",
    tagline: "A visual memory game built with React and Tailwind CSS",
    logo: memoryTilesLogo,
    screenshot: memoryTilesScreenshot,
    screenshotAlt: "Memory Tiles Game board with highlighted tiles",
    demo: "https://aymaneonline.github.io/memory-tiles/",
    demoLabel: "View live demo",
    source: "https://github.com/AymaneOnline/memory-tiles",
    role: "Solo developer (design + code)",
    year: "2026",
    status: "Open source",
    overview:
      "A visual memory game inspired by HumanBenchmark. Tiles light up during a memorization phase, and you must recall them during the selection phase. The board grows and the difficulty ramps up as you climb levels.",
    problem:
      "Tutorial to-do apps only go so far. I wanted a real interactive project that would force me to manage complex UI state: multiple game phases, animations, sound effects, and a scoring system that persists between sessions.",
    features: [
      "Progressive difficulty: board size and tile count increase with each level",
      "Memorization and selection phases with smooth flip & shake animations",
      "Limited lives system with win/lose flash overlays",
      "Sound effects for game actions",
      "High score persisted with localStorage",
    ],
    result:
      "A polished, fully responsive game shipped live on GitHub Pages, with progressive difficulty, smooth animations, and high scores that survive a page refresh.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
];