import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { pageTransition, fadeUp, stagger } from "@/lib/animations";
import { FiArrowLeft, FiInstagram, FiExternalLink } from "react-icons/fi";

const clients = [
  {
    name: "DadCode Technologies",
    handle: "@dadcode.technologies",
    description:
      "Managed end-to-end social media strategy for DadCode — from bold campaign visuals to reel content. Built a cohesive brand voice across Instagram and LinkedIn with tech-forward design.",
    accent: "#adeb33",
    icon: "/figmaAssets/dc.jpg",
    tags: ["Instagram", "LinkedIn", "Campaign Design", "Reels"],
  },
  {
    name: "Phinal Overseas",
    handle: "@phinal.overseas",
    description:
      "Designed scroll-stopping content for an education consultancy reaching students abroad. Vibrant, information-rich posts optimised for awareness and enquiry generation.",
    accent: "#38bdf8",
    icon: "/figmaAssets/image-24.png",
    tags: ["Instagram", "Education", "Infographics"],
  },
  {
    name: "Study Spark Solutions",
    handle: "@studyspark",
    description:
      "Created a cohesive visual identity for Study Spark on social — motivational quote cards, course promotion posts, and story templates that resonated with a student audience.",
    accent: "#f59e0b",
    icon: "/figmaAssets/Website-1.jpg",
    tags: ["Instagram", "Brand Content", "Story Templates"],
  },
  {
    name: "TCG Technologies",
    handle: "@tcg.technologies",
    description:
      "Led the digital presence for TCG — delivering bold, dark-themed visuals with strong typography. Increased engagement through consistent brand storytelling and event graphics.",
    accent: "#a855f7",
    icon: "/figmaAssets/Website.jpg",
    tags: ["Instagram", "LinkedIn", "Event Graphics", "Tech Branding"],
  },
  {
    name: "Elite Engineering",
    handle: "@elite.engineering",
    description:
      "Produced industrial yet sleek social content for an engineering firm — project showcases, thought-leadership posts, and recruitment campaigns with professional polish.",
    accent: "#f97316",
    icon: "/figmaAssets/image-26.png",
    tags: ["LinkedIn", "Facebook", "Project Showcases"],
  },
];

export const SocialMedia = (): JSX.Element => {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navbar />

      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="pt-28 pb-16"
      >
        {/* BACK */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-8">
          <Link href="/work">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 cursor-pointer group"
            >
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-lime-400 group-hover:bg-lime-400/10 transition-all duration-200">
                <FiArrowLeft size={16} className="text-white/60 group-hover:text-lime-400 transition-colors" />
              </span>
              <span
                className="text-[18px] font-light text-white/40 group-hover:text-lime-400 transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "'Londrina Solid', Helvetica" }}
              >
                Back to Work
              </span>
            </motion.span>
          </Link>
        </section>

        {/* HERO */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -1 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block bg-lime-400 px-4 py-1 mb-4"
          >
            <span
              className="text-[22px] tracking-[3px] text-black font-normal"
              style={{ fontFamily: "'League Gothic', Helvetica" }}
            >
              CLIENT WORK
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-normal leading-none tracking-[4px] text-white text-[64px] sm:text-[100px] md:text-[140px] lg:text-[170px]"
            style={{ fontFamily: "'League Gothic', Helvetica" }}
          >
            SOCIAL MEDIA
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-lime-400 mt-3 w-full max-w-[600px]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-[17px] font-light text-white/35 flex items-center gap-2"
            style={{ fontFamily: "'Londrina Solid', Helvetica" }}
          >
            <FiInstagram className="text-lime-400" />
            Various client projects — crafted for impact & reach
          </motion.p>
        </section>

        {/* ── BIG SHOWCASE IMAGE with phone frame ── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[32px] overflow-hidden border border-lime-400/20 bg-[#0d0d0d]"
          >
            {/* Glow decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-400/5 blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_420px] gap-0 items-stretch">
              {/* Text panel */}
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
                <span
                  className="text-lime-400 text-[14px] font-black uppercase tracking-[4px] mb-4"
                  style={{ fontFamily: "'Londrina Solid', Helvetica" }}
                >
                  Social Media Designing
                </span>
                <h2
                  className="text-[48px] sm:text-[64px] font-normal leading-none text-white mb-6"
                  style={{ fontFamily: "'League Gothic', Helvetica" }}
                >
                  CAMPAIGN<br />
                  <span className="text-lime-400">DESIGNS</span>
                </h2>
                <p
                  className="text-[18px] font-light text-white/60 leading-[1.6] mb-8 max-w-[420px]"
                  style={{ fontFamily: "'Londrina Solid', Helvetica" }}
                >
                  Delivering high-impact social media content for diverse clients — from tech companies to education
                  brands. Each campaign is crafted with a distinct visual identity, scroll-stopping aesthetics, and
                  platform-native design.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Instagram", "LinkedIn", "Reels", "Story Templates", "Campaign Design"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-4 py-1.5 text-[15px] font-light border border-lime-400/40 text-lime-400"
                      style={{ fontFamily: "'Londrina Solid', Helvetica" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Phone mockup */}
              <div className="flex items-center justify-center p-8 sm:p-10 bg-[#0a0a0a]">
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full max-w-[320px]"
                >
                  {/* Phone shell */}
                  <div className="relative rounded-[40px] border-[5px] border-white/20 overflow-hidden shadow-[0_0_60px_rgba(173,235,51,0.15),0_30px_80px_rgba(0,0,0,0.8)]"
                    style={{ aspectRatio: "9/19" }}>
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-20" />
                    {/* Screen content — the social media image */}
                    <img
                      src="/figmaAssets/socialmedia.jpg"
                      alt="Social Media Campaign Portfolio"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Screen overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 pointer-events-none" />
                  </div>
                  {/* Reflection */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-lime-400/10 blur-[20px] rounded-full" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── CLIENT PROJECTS ── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[22px] font-black text-lime-400 uppercase tracking-widest mb-10"
            style={{ fontFamily: "'Londrina Solid', Helvetica" }}
          >
            Various Client Projects
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 cursor-default
                  hover:border-white/25 transition-colors duration-300"
                style={{ borderColor: client.accent + "25" }}
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[28px]"
                  style={{ backgroundColor: client.accent }}
                />

                {/* Icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-[14px] overflow-hidden border-2 flex-shrink-0"
                    style={{ borderColor: client.accent + "50" }}
                  >
                    <img
                      src={client.icon}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-[20px] font-normal text-white leading-tight"
                      style={{ fontFamily: "'Anton', Helvetica" }}
                    >
                      {client.name}
                    </h3>
                    <p
                      className="text-[14px] font-light"
                      style={{ color: client.accent, fontFamily: "'Londrina Solid', Helvetica" }}
                    >
                      {client.handle}
                    </p>
                  </div>
                </div>

                <p
                  className="text-[16px] font-light text-white/55 leading-[1.55] mb-5"
                  style={{ fontFamily: "'Londrina Solid', Helvetica" }}
                >
                  {client.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-[13px] font-light border"
                      style={{
                        borderColor: client.accent + "40",
                        color: client.accent,
                        fontFamily: "'Londrina Solid', Helvetica",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[28px]"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${client.accent}08 0%, transparent 70%)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[36px] bg-lime-400 px-8 py-12 sm:px-16 sm:py-16 text-center"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-black/10 blur-3xl" />
            <h2
              className="relative z-10 font-normal text-black leading-none text-[44px] sm:text-[66px] tracking-[3px]"
              style={{ fontFamily: "'League Gothic', Helvetica" }}
            >
              WANT SOCIAL MEDIA THAT CONVERTS?
            </h2>
            <p
              className="relative z-10 mt-4 font-light text-black/65 text-[20px] sm:text-[24px]"
              style={{ fontFamily: "'Londrina Solid', Helvetica" }}
            >
              Let's create content that actually gets noticed.
            </p>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#adeb33" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-black text-lime-400 px-10 py-4 text-[22px] font-black tracking-wide cursor-pointer"
                style={{ fontFamily: "'Londrina Solid', Helvetica" }}
              >
                Get In Touch →
              </motion.span>
            </Link>
          </motion.div>
        </section>
      </motion.div>

      <Footer />
    </main>
  );
};
