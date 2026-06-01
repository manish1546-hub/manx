// ============================================================
//  PORTFOLIO CONFIG — Edit everything here!
//  All your personal info, projects, skills, and content
//  is controlled from this single file.
// ============================================================

export const OWNER = {
  name: "Your Name",
  tagline: "Designer & Developer",
  bio: "I'm a creative designer and developer who crafts bold digital experiences — from branding to full-stack web apps.",
  email: "hello@yourname.com",
  phone: "+91 00000 00000",
  location: "Your City, India",
  resumeUrl: "/resume.pdf", // place your resume in client/public/
  socialLinks: {
    instagram: "https://instagram.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourhandle",
    behance: "https://behance.net/yourhandle",
  },
};

// ── NAVBAR ──────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// ── SKILLS (scrolling marquee on Home & About) ──────────────
export const SKILLS = [
  "Web Developer",
  "UI/UX Designer",
  "Creative Ideas",
  "Social Media Designs",
  "Project Completion",
  "Logo Design",
  "Digital Painting",
  "Branding & Identity",
  "Creative Design Marketing",
  "Motion Graphics And Videos",
  "Using AI For Design Tools",
];

// ── STATS (About page) ──────────────────────────────────────
export const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "40+", label: "Projects Done" },
  { value: "20+", label: "Happy Clients" },
  { value: "100%", label: "Passion" },
];

// ── HOME PAGE — Services preview ────────────────────────────
export const HOME_SERVICES = [
  { title: "Branding", desc: "Bold identities that speak before you do." },
  { title: "Social Media", desc: "Scroll-stopping content crafted for impact." },
  { title: "UI/UX Designing", desc: "Intuitive flows, minimal friction, pure feel." },
  { title: "Web Development", desc: "Fast, responsive & beautifully functional." },
];

// ── SERVICES PAGE ────────────────────────────────────────────
export const SERVICES = [
  {
    title: "Branding & Identity",
    description:
      "From logo design to complete brand systems — I craft identities that resonate, differentiate, and leave a lasting impression.",
    features: ["Logo Design", "Brand Guidelines", "Color & Typography", "Visual Identity"],
    icon: "🎨",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that balances beauty with function — turning complex problems into clean, intuitive experiences.",
    features: ["Wireframing", "Prototyping", "User Research", "Figma Design"],
    icon: "✦",
  },
  {
    title: "Web Development",
    description:
      "Modern, performant web apps built with React, TypeScript, and Tailwind — pixel-perfect and fully responsive.",
    features: ["React / Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    icon: "⚡",
  },
  {
    title: "Social Media Design",
    description:
      "Eye-catching posts, reels, and campaigns designed to stop the scroll and grow your audience.",
    features: ["Post Design", "Reel Covers", "Campaign Art", "Brand Templates"],
    icon: "📱",
  },
];

// ── WORK / PROJECTS ─────────────────────────────────────────
// Place project images in client/public/figmaAssets/
export const PROJECTS = [
  {
    id: 1,
    title: "BMW Campaign",
    category: "Branding",
    image: "/figmaAssets/proj-bmw.png",
    description: "A premium visual identity and campaign for a luxury automotive brand.",
    tags: ["Branding", "Print", "Campaign"],
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "UI/UX",
    image: "/figmaAssets/proj-saas.png",
    description: "Clean and minimal dashboard design for a B2B analytics platform.",
    tags: ["UI/UX", "Web", "Figma"],
  },
  {
    id: 3,
    title: "Skoda Visual",
    category: "Branding",
    image: "/figmaAssets/proj-skoda.png",
    description: "Creative automotive visuals and social media campaign.",
    tags: ["Branding", "Social Media"],
  },
  {
    id: 4,
    title: "Dhruva Project",
    category: "Web Development",
    image: "/figmaAssets/proj-dhruva.png",
    description: "Full-stack web app with modern UI and smooth animations.",
    tags: ["Web Dev", "React", "Tailwind"],
  },
  {
    id: 5,
    title: "NextGen App",
    category: "UI/UX",
    image: "/figmaAssets/proj-nextgen.png",
    description: "Mobile-first UX design for an emerging tech startup.",
    tags: ["UI/UX", "Mobile", "Figma"],
  },
  {
    id: 6,
    title: "Branding Suite",
    category: "Branding",
    image: "/figmaAssets/proj-branding.png",
    description: "Complete brand identity package including guidelines and assets.",
    tags: ["Branding", "Identity", "Print"],
  },
];

// ── ABOUT PAGE — images ──────────────────────────────────────
export const ABOUT_IMAGES = {
  profileMain: "/figmaAssets/chatgpt-image-may-4--2026--01-27-29-pm-2.png",
  profileSecondary: "/figmaAssets/chatgpt-image-may-4--2026--11-19-52-am-1.png",
};

// ── BRAND LOGOS (Home marquee) ───────────────────────────────
export const BRAND_LOGOS = [
  { src: "/figmaAssets/image-29.png", alt: "Brand" },
  { src: "/figmaAssets/image-24.png", alt: "Brand" },
  { src: "/figmaAssets/image-27.png", alt: "Brand" },
  { src: "/figmaAssets/image-23.png", alt: "Brand" },
  { src: "/figmaAssets/image-25.png", alt: "Brand" },
  { src: "/figmaAssets/image-26.png", alt: "Brand" },
  { src: "/figmaAssets/image-28.png", alt: "Brand" },
];
