import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, stagger, pageTransition, scaleIn } from "@/lib/animations";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";

// ── Vector SVG icons per service ──────────────────────────
const BrandingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="32" cy="32" r="28" stroke="#adeb33" strokeWidth="2.5" strokeDasharray="6 3" />
    <path d="M20 44 L32 20 L44 44" stroke="#adeb33" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23 38 H41" stroke="#adeb33" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="20" r="3" fill="#adeb33" />
    <path d="M26 50 Q32 46 38 50" stroke="#adeb33" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const SocialMediaIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="12" y="14" width="40" height="36" rx="8" stroke="#adeb33" strokeWidth="2.5" />
    <circle cx="32" cy="28" r="7" stroke="#adeb33" strokeWidth="2.5" />
    <circle cx="44" cy="18" r="3" fill="#adeb33" />
    <path d="M20 42 Q26 36 32 38 Q38 40 44 34" stroke="#adeb33" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const UIUXIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="10" y="12" width="44" height="32" rx="5" stroke="#adeb33" strokeWidth="2.5" />
    <path d="M10 36 H54" stroke="#adeb33" strokeWidth="2" />
    <rect x="26" y="44" width="12" height="6" rx="2" stroke="#adeb33" strokeWidth="2" />
    <path d="M22 50 H42" stroke="#adeb33" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="22" r="4" stroke="#adeb33" strokeWidth="2" />
    <path d="M32 20 H46" stroke="#adeb33" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 25 H42" stroke="#adeb33" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 30 H48" stroke="#adeb33" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
  </svg>
);

const WebDevIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="8" y="10" width="48" height="36" rx="5" stroke="#adeb33" strokeWidth="2.5" />
    <path d="M8 20 H56" stroke="#adeb33" strokeWidth="2" />
    <circle cx="15" cy="15" r="2" fill="#adeb33" opacity="0.5" />
    <circle cx="22" cy="15" r="2" fill="#adeb33" opacity="0.7" />
    <circle cx="29" cy="15" r="2" fill="#adeb33" />
    <path d="M22 30 L16 34 L22 38" stroke="#adeb33" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 30 L48 34 L42 38" stroke="#adeb33" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 28 L28 40" stroke="#adeb33" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 50 H48" stroke="#adeb33" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    number: "01",
    title: "Branding",
    desc: "Bold, cohesive brand identities that speak before you do. From logos to full visual systems — built to leave a mark and make an impression that lasts.",
    tags: ["Logo Design", "Visual Identity", "Brand Strategy", "Style Guide"],
    Icon: BrandingIcon,
    detail: [
      "Custom logo design & brand mark creation",
      "Full brand guideline documentation",
      "Color palette & typography systems",
      "Business card, letterhead & stationery",
      "Social media kit & brand templates",
    ],
  },
  {
    number: "02",
    title: "Social Media",
    desc: "Scroll-stopping content crafted for impact. Posts, reels, stories — all designed to grow your audience and convert your followers into fans.",
    tags: ["Content Creation", "Story Design", "Reels & Shorts", "Growth Strategy"],
    Icon: SocialMediaIcon,
    detail: [
      "Platform-specific post design (IG, FB, LinkedIn)",
      "Reel & story cover templates",
      "Campaign art direction",
      "Monthly content calendar design",
      "Analytics-driven creative strategy",
    ],
  },
  {
    number: "03",
    title: "UI/UX Designing",
    desc: "Intuitive flows, minimal friction, pure feel. User-centered design that balances aesthetics and usability — every screen crafted with purpose.",
    tags: ["Wireframing", "Prototyping", "User Research", "Interaction Design"],
    Icon: UIUXIcon,
    detail: [
      "User journey mapping & research",
      "Low-fi wireframes & information architecture",
      "High-fidelity Figma prototypes",
      "Component library & design system",
      "Usability testing & iteration",
    ],
  },
  {
    number: "04",
    title: "Web Development",
    desc: "Fast, responsive, and beautifully functional. Clean code meets clean design — from pixel-perfect landing pages to full-stack web apps.",
    tags: ["React / Next.js", "TypeScript", "Full Stack", "Performance"],
    Icon: WebDevIcon,
    detail: [
      "React / Next.js frontend development",
      "TypeScript & Tailwind CSS",
      "REST API & backend integration",
      "Performance optimization & SEO",
      "Deployment & ongoing maintenance",
    ],
  },
];

const brandLogos = [
  { src: "/figmaAssets/image-29.png", className: "w-14 h-14 sm:w-18 sm:h-18 rounded-[14px] object-cover" },
  { src: "/figmaAssets/image-24.png", className: "w-14 h-14 sm:w-18 sm:h-18 object-contain" },
  { src: "/figmaAssets/image-27.png", className: "w-14 h-14 sm:w-18 sm:h-18 object-contain" },
  { src: "/figmaAssets/image-23.png", className: "w-14 h-14 sm:w-18 sm:h-18 rounded-[10px] object-cover" },
  { src: "/figmaAssets/image-25.png", className: "w-14 h-14 sm:w-18 sm:h-18 rounded-[10px] object-cover" },
  { src: "/figmaAssets/image-26.png", className: "w-14 h-14 sm:w-18 sm:h-18 rounded-[10px] object-cover" },
  { src: "/figmaAssets/image-28.png", className: "w-14 h-14 sm:w-18 sm:h-18 rounded-[12px] object-cover" },
];

export const Services = (): JSX.Element => {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navbar />

      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="pt-28 pb-10"
      >
        {/* ─── BACK BUTTON ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-8">
          <Link href="/">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 cursor-pointer group"
            >
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                group-hover:border-lime-400 group-hover:bg-lime-400/10 transition-all duration-200">
                <FiArrowLeft size={16} className="text-white/60 group-hover:text-lime-400 transition-colors" />
              </span>
              <span className="[font-family:'Londrina_Solid',Helvetica] text-[18px] font-light text-white/40
                group-hover:text-lime-400 transition-colors duration-200 tracking-wide">
                Back to Home
              </span>
            </motion.span>
          </Link>
        </section>

        {/* ─── HERO TITLE ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -1 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block bg-lime-400 px-4 py-1 mb-4"
          >
            <span className="[font-family:'League_Gothic',Helvetica] text-[22px] tracking-[3px] text-black font-normal">
              WHAT I DO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="[font-family:'League_Gothic',Helvetica] font-normal leading-none tracking-[4px] text-white
              text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px]"
          >
            SERVICES
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-lime-400 mt-3 w-full max-w-[600px]"
          />
        </section>

        {/* ─── SERVICE CARDS ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-24">
          <div className="flex flex-col gap-8">
            {services.map((service, i) => (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01 }}
                className="group cursor-default"
              >
                <Card className="rounded-[40px] border border-white/10 bg-white/[0.03] shadow-none
                  group-hover:border-lime-400/30 group-hover:bg-lime-400/[0.04]
                  transition-all duration-400 group-hover:shadow-[0_0_50px_rgba(173,235,51,0.07)]">
                  <CardContent className="p-7 sm:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">

                      {/* ── Left: number + title + desc + tags ── */}
                      <div className="flex-1">
                        <div className="flex items-baseline gap-4 mb-4">
                          <span className="[font-family:'League_Gothic',Helvetica] text-[42px] sm:text-[56px] font-normal text-lime-400/30 leading-none select-none">
                            {service.number}
                          </span>
                          <h3 className="[font-family:'Anton',Helvetica] font-normal leading-none text-white
                            text-[36px] sm:text-[52px] md:text-[64px]
                            group-hover:text-lime-400 transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>

                        <p className="[font-family:'Londrina_Solid',Helvetica] text-[18px] sm:text-[22px] font-light
                          leading-[1.45] text-white/55 max-w-[640px] mb-6">
                          {service.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              whileHover={{ backgroundColor: "#adeb33", color: "#000", scale: 1.05 }}
                              transition={{ duration: 0.18 }}
                              className="rounded-full border border-white/15 px-4 py-1
                                [font-family:'Londrina_Solid',Helvetica] text-[16px] sm:text-[18px] font-light text-white/60
                                hover:border-lime-400 transition-colors duration-200"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                        {/* Detail bullet list */}
                        <ul className="space-y-2">
                          {service.detail.map((item, di) => (
                            <motion.li
                              key={di}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: di * 0.06 + 0.2 }}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-lime-400 flex-shrink-0" />
                              <span className="[font-family:'Londrina_Solid',Helvetica] text-[16px] sm:text-[18px] font-light text-white/45">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* ── Right: vector icon + back-to-top arrow ── */}
                      <div className="flex flex-col items-center gap-6 lg:w-[160px] flex-shrink-0">
                        {/* Vector icon */}
                        <motion.div
                          className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] relative"
                          whileHover={{ scale: 1.12, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="absolute inset-0 bg-lime-400/10 rounded-full blur-2xl" />
                          <div className="relative z-10 w-full h-full p-4">
                            <service.Icon />
                          </div>
                        </motion.div>

                        {/* View Work link */}
                        <Link href="/work">
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-1.5 cursor-pointer
                              [font-family:'Londrina_Solid',Helvetica] text-[15px] font-light
                              text-lime-400/60 hover:text-lime-400 transition-colors duration-200 group/link"
                          >
                            View Work
                            <FiArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ─── BACK TO HOME CTA ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-16 flex justify-center">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.04, x: -4 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 cursor-pointer
                rounded-full border border-white/20 px-8 py-4
                hover:border-lime-400 hover:bg-lime-400/5 transition-all duration-200 group"
            >
              <FiArrowLeft size={18} className="text-white/50 group-hover:text-lime-400 transition-colors" />
              <span className="[font-family:'Londrina_Solid',Helvetica] text-[20px] font-light text-white/60
                group-hover:text-lime-400 transition-colors">
                Return to Home
              </span>
            </motion.span>
          </Link>
        </section>

        {/* ─── BRANDS ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center [font-family:'Anton',Helvetica] font-normal text-white
              text-[30px] sm:text-[40px] md:text-[48px] mb-8"
          >
            Brands Worked With
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="rounded-[40px] sm:rounded-[50px] border-[3px] border-lime-400 bg-black shadow-none
              hover:shadow-[0_0_60px_rgba(173,235,51,0.12)] transition-shadow duration-500">
              <CardContent className="px-6 py-6 sm:px-10 sm:py-7">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8">
                  {brandLogos.map((logo, i) => (
                    <motion.img
                      key={logo.src}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      whileHover={{ scale: 1.15, filter: "brightness(1.2)" }}
                      className={`${logo.className} transition-all duration-300 cursor-pointer`}
                      alt="Brand"
                      src={logo.src}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </motion.div>

      <Footer />
    </main>
  );
};
