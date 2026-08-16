import getwaitlyLogo from "../assets/images/getwaitly-logo.svg";
import memoryTilesLogo from "../assets/images/memory-tiles-logo.png";

export const projects = [
  {
    slug: "getwaitly",
    title: "GetWaitly",
    tagline: "The simple, fast, affordable waitlist tool for indie hackers",
    logo: getwaitlyLogo,
    demo: "https://getwaitly.com",
    overview:
      "GetWaitly is a production SaaS waitlist platform built for indie hackers and solo founders. It lets you create a polished waitlist page in minutes, collect email signups, seed viral referral loops, and send automated broadcasts — without touching a single line of code.",
    features: [
      "Create a branded waitlist page in minutes — no code required",
      "Drag-and-drop styles: colors, fonts, and a signup form that matches your brand",
      "Embeddable widget: paste one script tag on any site (Carrd, Webflow, WordPress, Framer)",
      "Hosted pages at getwaitly.com/w/your-id for products without a website",
      "Referral system with unique links that move subscribers up the list",
      "One-click email broadcasts to your entire waitlist",
      "Analytics dashboard tracking visitors, signups, and conversion",
    ],
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
    demo: "https://aymaneonline.github.io/memory-tiles/",
    source: "https://github.com/AymaneOnline/memory-tiles",
    overview:
      "A visual memory game inspired by HumanBenchmark. Tiles light up during a memorization phase, and you must recall them during the selection phase. The board grows and the difficulty ramps up as you climb levels.",
    features: [
      "Progressive difficulty: board size and tile count increase with each level",
      "Memorization and selection phases with smooth flip & shake animations",
      "Limited lives system with win/lose flash overlays",
      "Sound effects for game actions",
      "High score persisted with localStorage",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
];