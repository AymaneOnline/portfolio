import getwaitlyScreenshot from "../assets/images/getwaitly.png";

export const projects = [
  {
    title: "GetWaitly",
    description:
      "A production SaaS waitlist tool with referral tracking, broadcast emails, CSV export, and a subscription-gated dashboard. Deployed end-to-end with real payments, GitHub Actions CI/CD to Cloudflare Workers, and a full transactional email flow.",
    image: getwaitlyScreenshot,
    demo: "https://getwaitly.com",
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
    title: "Online E-Commerce Store",
    description:
      "A modern e-commerce frontend built with React, Zustand, and shadcn/ui, featuring product browsing, state management for cart functionality, responsive design, and a clean, component-driven UI with reusable elements.",
    image:
      "https://raw.githubusercontent.com/AymaneOnline/online-store/refs/heads/main/Screenshot.png",
    demo: "https://aymaneonline.github.io/online-store/",
    source: "https://github.com/AymaneOnline/online-store",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Memory Tiles Game",
    description:
      "An interactive visual memory game built with React, featuring progressive difficulty, tile animations, sound effects, and a responsive, accessible UI styled with Tailwind CSS.",
    image:
      "https://raw.githubusercontent.com/AymaneOnline/memory-tiles/refs/heads/main/screenshot.png",
    demo: "https://aymaneonline.github.io/memory-tiles/",
    source: "https://github.com/AymaneOnline/memory-tiles",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
];
