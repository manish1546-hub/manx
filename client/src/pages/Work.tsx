import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fadeUp, stagger, pageTransition, scaleIn } from "@/lib/animations";
import { FiArrowUpRight, FiExternalLink, FiX, FiArrowLeft, FiArrowRight, FiInstagram } from "react-icons/fi";

const categories = ["All", "Website Design", "Branding", "UI/UX", "Automotive", "Social Media"];

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  description: string;
  img: string;
  accent: string;
  year: string;
  featured: boolean;
  gallery: string[];
  client?: string;
  role?: string;
  projectLink?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Bikers spot",
    subtitle: "Sports & Fitness Website",
    category: "Website Design",
    tags: ["UI/UX", "Dark Theme", "Sports"],
    description: "A high-energy sports brand website for Dhruva Sport. Dark, aggressive aesthetic with bold typography and dynamic athlete imagery to drive conversions.",
    img: "/figmaAssets/DADCODE (11).png",
    gallery: ["/figmaAssets/Bikzz Ui design (1).jpg"],
    accent: "#ff3b3b",
    year: "2025",
    featured: true,
    client: "Dhruva Sport",
    role: "UI/UX Design & Web Development",
  },
  {
    id: 2,
    title: "NEXT GEN",
    subtitle: "Virtual Reality Platform",
    category: "UI/UX",
    tags: ["VR", "Gaming", "Purple"],
    description: "A futuristic virtual reality platform featuring immersive neon visuals, artist showcases, and a next-generation music/content experience.",
    img: "/figmaAssets/Nxtgen.png",
    gallery: ["figmaAssets/Next gen (1).jpg",],
    accent: "#7c3aed",
    year: "2025",
    featured: true,
    client: "NextGen VR",
    role: "UI/UX Design",
  },
  {
    id: 3,
    title: "Tuition portal",
    subtitle: "Student dashboard",
    category: "UI/UX",
    tags: ["Dashboard", "SaaS", "Analytics"],
    description: "A clean, data-rich payments and analytics dashboard with intuitive charts, card management, and a modern blue design language.",
    img: "/figmaAssets/Dashboard (2).png",
    gallery: [ "/figmaAssets/Dashboard (1).jpg"],
    accent: "#2563eb",
    year: "2024",
    featured: false,
    client: "Aveon.",
    role: "UI/UX Design and Web app",
  },
  {
    id: 4,
    title: "SKODA",
    subtitle: "Automotive Website Redesign",
    category: "Automotive",
    tags: ["Automotive", "Dark UI", "Luxury"],
    description: "A premium redesign for SKODA — elegant dark surfaces, clean product photography, and a seamless explore-to-configure user journey.",
    img: "/figmaAssets/skoda.png",
    gallery: ["figmaAssets/Desktop - 5 (1).jpg"],
    accent: "#16a34a",
    year: "2024",
    featured: false,
    client: "SKODA Auto",
    role: "Web Design",
  },
  {
    id: 5,
    title: "Agrior",
    subtitle: "Farmer's friendly dashboard",
    category: "Automotive",
    tags: ["Automotive", "Navy", "Interactive"],
    description: "An interactive BMW showroom site with a deep-navy palette, model explorer, and a smooth configuration flow.",
    img: "/figmaAssets/agrior.png",
    gallery: ["/figmaAssets/agrior.png"],
    accent: "#0284c7",
    year: "2024",
    featured: false,
    client: "Self Project",
    role: "Web Design",
    projectLink: "https://agrior.vercel.app",
  },
  {
    id: 9,
    title: "Fashion Ecommerce",
    subtitle: "Clothing Retailer Platform",
    category: "Automotive",
    tags: ["Automotive", "Navy", "Interactive"],
    description: "An interactive BMW showroom site with a deep-navy palette, model explorer, and a smooth configuration flow.",
    img: "/figmaAssets/thargai.png",
    gallery: ["/figmaAssets/thargai.png"],
    accent: "#0284c7",
    year: "2024",
    featured: false,
    client: "Tharagai boutiq",
    role: "Web Design",
    projectLink: "https://tharagai-boutiq.vercel.app",
  },
  {
    id: 6,
    title: "DadCode Technologies",
    subtitle: "Brand Identity — Digital Marketing",
    category: "Branding",
    tags: ["Logo Design", "Brand Identity", "Digital Marketing"],
    description: "DadCode Technologies is a modern, innovation-driven digital marketing company. The DC brand mark symbolises connection, structure, and digital flow — bold, memorable, and adaptable across all digital platforms. Includes full colour system, typography, merchandise mockups and brand guidelines.",
    img: "/figmaAssets/dc.jpg",
    gallery: ["/figmaAssets/dc.b.jpg"],
    accent: "#adeb33",
    year: "2025",
    featured: false,
    client: "DadCode Technologies",
    role: "Brand Identity Design",
  },
  {
    id: 7,
    title: "Study Spark Solutions",
    subtitle: "Brand Identity — Education Consultancy",
    category: "Branding",
    tags: ["Logo Design", "Education", "Brand Identity"],
    description: "Study Spark Solutions is an educational consultancy that empowers students to achieve their full potential. The logo symbolises the journey of a student towards success — human figures with a graduation cap atop represent achievement and continuous growth.",
    img: "/figmaAssets/Website-1.jpg",
    gallery: ["/figmaAssets/sp.b.jpg"],
    accent: "#f59e0b",
    year: "2025",
    featured: false,
    client: "Study Spark Solutions",
    role: "Brand Identity Design",
  },
  {
    id: 8,
    title: "TCG Technologies",
    subtitle: "Brand Identity — Tech Innovation",
    category: "Branding",
    tags: ["Logo Design", "Tech", "Bold Typography"],
    description: "TCG represents a bold and modern digital identity focused on creativity, strategy, and innovation. The tg mark is a fusion of strong typography and modern aesthetics — representing performance, authority, and confidence.",
    img: "/figmaAssets/Website.jpg",
    gallery: ["/figmaAssets/TCG.jpg"],
    accent: "#a855f7",
    year: "2025",
    featured: false,
    client: "TCG Technologies",
    role: "Brand Identity Design",
  },
  {
    id: 10,
    title: "Social Media Campaigns",
    subtitle: "Multi-Client Social Design",
    category: "Social Media",
    tags: ["Instagram", "Campaign Design", "Reels", "Branding"],
    description: "End-to-end social media design for 5 clients — DadCode, Phinal Overseas, Study Spark, TCG Technologies, and Elite Engineering. From campaign graphics to story templates, all designed to stop the scroll.",
    img: "/figmaAssets/socialmedia.jpg",
    gallery: ["/figmaAssets/socialmedia.jpg"],
    accent: "#adeb33",
    year: "2025",
    featured: false,
    client: "Multiple Clients",
    role: "Social Media Designer",
  },
];

// ── Project Detail Modal ────────────────────────────────────
type ModalProps = {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

const ProjectModal = ({ project, onClose, onPrev, onNext, hasPrev, hasNext }: ModalProps) => {
  const [imgIdx, setImgIdx] = useState(0);
  const isBranding = project.category === "Branding";
  const isUIUX = project.category === "UI/UX";
  const isSocialMedia = project.category === "Social Media";

  // Scrollable gallery for UI/UX and Social Media
  const useScrollableGallery = isUIUX || isSocialMedia;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[920px] max-h-[92vh] overflow-y-auto bg-[#0d0d0d] rounded-[32px] border border-white/10"
          style={{ borderColor: project.accent + "30" }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <FiX size={18} className="text-white" />
          </button>

          {/* Image section */}
          {useScrollableGallery ? (
            // Scrollable gallery for UI/UX and Social Media
            <div className="relative overflow-y-auto max-h-[500px] rounded-t-[32px]" style={{ scrollbarWidth: "thin", scrollbarColor: `${project.accent} transparent` }}>
              {project.gallery.map((imgSrc, gi) => (
                <img
                  key={gi}
                  src={imgSrc}
                  alt={`${project.title} ${gi + 1}`}
                  className="w-full object-contain block"
                />
              ))}
              <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 backdrop-blur px-3 py-1 text-[13px] font-light text-white/60" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                {project.year}
              </span>
              <span
                className="absolute top-4 right-14 rounded-full px-3 py-1 text-[13px] font-light text-black"
                style={{ backgroundColor: project.accent, fontFamily: "'Londrina Solid', Helvetica" }}
              >
                {project.category}
              </span>
              {/* Scroll hint */}
              <div className="sticky bottom-0 left-0 right-0 flex justify-center py-2 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent pointer-events-none">
                <span className="text-white/30 text-[12px] tracking-widest uppercase" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                  ↑ Scroll to explore ↑
                </span>
              </div>
            </div>
          ) : (
            // Original layout for Branding and others
            <div className={`relative overflow-hidden rounded-t-[32px] ${isBranding ? "" : "h-[240px] sm:h-[380px]"}`}>
              <motion.img
                key={imgIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={project.gallery[imgIdx]}
                alt={project.title}
                className={`w-full ${isBranding ? "object-contain" : "object-cover object-top"}`}
              />
              {!isBranding && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              )}
              <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 backdrop-blur px-3 py-1 text-[13px] font-light text-white/60" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                {project.year}
              </span>
              <span
                className="absolute top-4 right-14 rounded-full px-3 py-1 text-[13px] font-light text-black"
                style={{ backgroundColor: project.accent, fontFamily: "'Londrina Solid', Helvetica" }}
              >
                {project.category}
              </span>
              {project.gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.gallery.map((_, gi) => (
                    <button key={gi} onClick={() => setImgIdx(gi)}
                      className={`w-2 h-2 rounded-full transition-all ${gi === imgIdx ? "scale-125" : "opacity-40"}`}
                      style={{ backgroundColor: project.accent }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="px-7 sm:px-10 py-8">
            <h2 className="font-normal leading-none text-[42px] sm:text-[60px] mb-2" style={{ color: project.accent, fontFamily: "'Anton', Helvetica" }}>
              {project.title}
            </h2>
            <p className="text-[20px] font-light text-white/40 mb-6" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-white/10">
              {project.client && (
                <div>
                  <p className="text-[13px] font-light text-white/30 uppercase tracking-widest mb-1" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>Client</p>
                  <p className="text-[18px] font-light text-white/70" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>{project.client}</p>
                </div>
              )}
              {project.role && (
                <div>
                  <p className="text-[13px] font-light text-white/30 uppercase tracking-widest mb-1" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>Role</p>
                  <p className="text-[18px] font-light text-white/70" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>{project.role}</p>
                </div>
              )}
              <div>
                <p className="text-[13px] font-light text-white/30 uppercase tracking-widest mb-1" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>Year</p>
                <p className="text-[18px] font-light text-white/70" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>{project.year}</p>
              </div>
            </div>

            <p className="text-[19px] sm:text-[22px] font-light leading-[1.5] text-white/60 mb-8" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
              {project.description}
            </p>

            {/* Social Media deep-dive link */}
            {isSocialMedia && (
              <Link href="/social-media">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-lime-400 px-6 py-2.5 mb-6 cursor-pointer
                    text-lime-400 hover:bg-lime-400 hover:text-black transition-colors duration-200"
                  style={{ fontFamily: "'Londrina Solid', Helvetica", fontSize: "18px" }}
                  onClick={onClose}
                >
                  <FiInstagram size={16} /> View All Client Projects →
                </motion.span>
              </Link>
            )}

            {/* Project external link for Agrior & Fashion Ecommerce */}
            {project.projectLink && (
              <motion.a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 mb-6 cursor-pointer
                  text-black font-black transition-all duration-200"
                style={{ backgroundColor: project.accent, fontFamily: "'Londrina Solid', Helvetica", fontSize: "18px" }}
              >
                <FiExternalLink size={16} /> View Live Project →
              </motion.a>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full px-4 py-1.5 text-[15px] font-light border" style={{ borderColor: project.accent + "50", color: project.accent, fontFamily: "'Londrina Solid', Helvetica" }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
              <button onClick={onPrev} disabled={!hasPrev}
                className={`flex items-center gap-2 text-[17px] font-light transition-colors ${hasPrev ? "text-white/50 hover:text-white cursor-pointer" : "text-white/20 cursor-not-allowed"}`}
                style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                <FiArrowLeft size={16} /> Prev Project
              </button>
              <button onClick={onNext} disabled={!hasNext}
                className={`flex items-center gap-2 text-[17px] font-light transition-colors ${hasNext ? "text-white/50 hover:text-white cursor-pointer" : "text-white/20 cursor-not-allowed"}`}
                style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                Next Project <FiArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Main Work Page ──────────────────────────────────────────
export const Work = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
  const featured = projects.filter((p) => p.featured);
  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;
  const allIds = projects.map((p) => p.id);
  const currentIdx = selectedId !== null ? allIds.indexOf(selectedId) : -1;

  const openProject = (id: number) => { setSelectedId(id); document.body.style.overflow = "hidden"; };
  const closeProject = () => { setSelectedId(null); document.body.style.overflow = ""; };
  const prevProject = () => { if (currentIdx > 0) openProject(allIds[currentIdx - 1]); };
  const nextProject = () => { if (currentIdx < allIds.length - 1) openProject(allIds[currentIdx + 1]); };

  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden overflow-y-auto">
      <Navbar />
 
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} onPrev={prevProject} onNext={nextProject} hasPrev={currentIdx > 0} hasNext={currentIdx < allIds.length - 1} />
      )}

      <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit" className="pt-28 pb-10">

        {/* BACK BUTTON */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-8">
          <Link href="/">
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 cursor-pointer group">
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-lime-400 group-hover:bg-lime-400/10 transition-all duration-200">
                <FiArrowLeft size={16} className="text-white/60 group-hover:text-lime-400 transition-colors" />
              </span>
              <span className="text-[18px] font-light text-white/40 group-hover:text-lime-400 transition-colors duration-200 tracking-wide" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                Back to Home
              </span>
            </motion.span>
          </Link>
        </section>

        {/* HERO */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-16">
          <motion.div initial={{ opacity: 0, x: -30, rotate: -1 }} animate={{ opacity: 1, x: 0, rotate: -1 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block bg-lime-400 px-4 py-1 mb-4">
            <span className="text-[22px] tracking-[3px] text-black font-normal" style={{ fontFamily: "'League Gothic', Helvetica" }}>SELECTED PROJECTS</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-normal leading-none tracking-[4px] text-white text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px]"
            style={{ fontFamily: "'League Gothic', Helvetica" }}>
            MY WORK
          </motion.h1>
          <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-lime-400 mt-3 w-full max-w-[600px]" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-6 text-[17px] font-light text-white/35 flex items-center gap-2" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
            <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            Click any project to view full details
          </motion.p>
        </section>

        {/* FEATURED */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[22px] font-black text-lime-400 uppercase tracking-widest mb-8" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
            Featured
          </motion.h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((project, i) => (
              <motion.div key={project.id}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHovered(project.id)} onHoverEnd={() => setHovered(null)}
                onClick={() => openProject(project.id)}
                className="group relative overflow-hidden rounded-[32px] cursor-pointer select-none"
                style={{ border: "1px solid " + project.accent + "30" }}>
                <div className="relative overflow-hidden h-[280px] sm:h-[340px]">
                  <motion.img src={project.img} alt={project.title} className="w-full h-full object-cover object-top"
                    animate={{ scale: hovered === project.id ? 1.06 : 1 }} transition={{ duration: 0.5, ease: "easeOut" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/50 backdrop-blur px-3 py-1 text-[14px] font-light text-white/60"
                    style={{ fontFamily: "'Londrina Solid', Helvetica" }}>{project.year}</div>
                  <motion.div initial={{ opacity: 0, scale: 0.7 }}
                    animate={hovered === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: project.accent }}>
                    <FiArrowUpRight size={18} className="text-black" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: hovered === project.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[22px] font-black tracking-widest px-6 py-3 rounded-full bg-black/60 backdrop-blur"
                      style={{ color: project.accent, fontFamily: "'Londrina Solid', Helvetica" }}>VIEW PROJECT →</span>
                  </motion.div>
                </div>
                <div className="p-6 sm:p-8 bg-white/[0.03] border-t" style={{ borderColor: project.accent + "20" }}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-normal text-white text-[32px] sm:text-[40px] leading-none transition-colors duration-300"
                        style={{ color: hovered === project.id ? project.accent : "white", fontFamily: "'Anton', Helvetica" }}>{project.title}</h3>
                      <p className="text-[18px] font-light text-white/40 mt-1" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>{project.subtitle}</p>
                    </div>
                    <FiExternalLink size={20} className="text-white/20 group-hover:text-white/60 transition-colors mt-1 flex-shrink-0" />
                  </div>
                  <p className="text-[18px] font-light leading-[1.4] text-white/50 mb-4" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full px-3 py-1 text-[14px] font-light border"
                        style={{ borderColor: project.accent + "40", color: project.accent, fontFamily: "'Londrina Solid', Helvetica" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SOCIAL MEDIA BANNER ── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[32px] border border-lime-400/30 bg-[#0a0a0a] p-8 sm:p-12"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-lime-400/5 blur-[80px] pointer-events-none rounded-full" />
            <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-center relative z-10">
              <div>
                <span className="text-lime-400 text-[13px] font-black uppercase tracking-[4px] mb-2 block" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                  Social Media Design
                </span>
                <h3 className="text-[36px] sm:text-[52px] font-normal text-white leading-none mb-3" style={{ fontFamily: "'League Gothic', Helvetica" }}>
                  5 CLIENTS · CAMPAIGNS THAT <span className="text-lime-400">CONVERT</span>
                </h3>
                <p className="text-[17px] font-light text-white/50 max-w-[540px]" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                  From DadCode to Elite Engineering — scroll-stopping posts, reels & story templates built for real reach.
                </p>
              </div>
              <Link href="/social-media">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 text-black px-7 py-3.5 text-[20px] font-black cursor-pointer whitespace-nowrap"
                  style={{ fontFamily: "'Londrina Solid', Helvetica" }}
                >
                  <FiInstagram size={18} /> View All →
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* FILTER TABS */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <motion.button key={cat} variants={scaleIn} onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}   
                className={`rounded-full px-6 py-2 text-[20px] font-light border transition-all duration-200 ${
                  activeFilter === cat ? "bg-lime-400 border-lime-400 text-black font-black" : "border-white/20 text-white/60 hover:border-lime-400/50 hover:text-white"
                }`}
                style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* ALL PROJECTS GRID */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20 overflow-visible">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ overflow: "visible" }}>
            {filtered.map((project, i) => (
              <motion.article key={project.id} layout
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                onHoverStart={() => setHovered(project.id)} onHoverEnd={() => setHovered(null)}
                onClick={() => openProject(project.id)}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 cursor-pointer hover:border-white/25 transition-colors duration-300 bg-white/[0.02] select-none">
                <div className="relative overflow-hidden h-[200px] sm:h-[220px]">
                  <motion.img src={project.img} alt={project.title}
                    className="w-full h-full object-cover object-top"
                    animate={{ scale: hovered === project.id ? 1.08 : 1 }} transition={{ duration: 0.5 }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: hovered === project.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: project.accent + "18" }}>
                    <motion.div initial={{ scale: 0.5 }} animate={{ scale: hovered === project.id ? 1 : 0.5 }} transition={{ duration: 0.2 }}
                      className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: project.accent }}>
                        <FiArrowUpRight size={20} className="text-black" />
                      </div>
                      <span className="text-[14px] font-black tracking-widest" style={{ color: project.accent, fontFamily: "'Londrina Solid', Helvetica" }}>OPEN</span>
                    </motion.div>
                  </motion.div>
                  <span className="absolute top-3 left-3 rounded-full px-3 py-1 text-[13px] font-light text-black"
                    style={{ backgroundColor: project.accent, fontFamily: "'Londrina Solid', Helvetica" }}>{project.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-normal leading-none text-[28px] sm:text-[32px] transition-colors duration-300"
                    style={{ color: hovered === project.id ? project.accent : "white", fontFamily: "'Anton', Helvetica" }}>{project.title}</h3>
                  <p className="text-[16px] font-light text-white/40 mt-1 mb-3" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>{project.subtitle}</p>
                  <p className="text-[16px] font-light leading-[1.4] text-white/50 line-clamp-2" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>{project.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[36px] bg-lime-400 px-8 py-12 sm:px-16 sm:py-16 text-center">
            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-black/10 blur-3xl" />
            <h2 className="relative z-10 font-normal text-black leading-none text-[44px] sm:text-[66px] md:text-[84px] tracking-[3px]"
              style={{ fontFamily: "'League Gothic', Helvetica" }}>WANT SOMETHING LIKE THIS?</h2>
            <p className="relative z-10 mt-4 font-light text-black/65 text-[20px] sm:text-[24px]" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
              Let's build your next project together.
            </p>
            <Link href="/contact">
              <motion.span whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#adeb33" }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.22 }}
                className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-black text-lime-400 px-10 py-4 text-[22px] font-black tracking-wide cursor-pointer"
                style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                Get In Touch →
              </motion.span>
            </Link>
          </motion.div>
        </section>

        {/* BOTTOM RETURN BUTTON */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mt-10 flex justify-center">
          <Link href="/">
            <motion.span whileHover={{ scale: 1.04, x: -4 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 cursor-pointer rounded-full border border-white/20 px-8 py-4 hover:border-lime-400 hover:bg-lime-400/5 transition-all duration-200 group">
              <FiArrowLeft size={18} className="text-white/50 group-hover:text-lime-400 transition-colors" />
              <span className="text-[20px] font-light text-white/60 group-hover:text-lime-400 transition-colors" style={{ fontFamily: "'Londrina Solid', Helvetica" }}>
                Return to Home
              </span>
            </motion.span>
          </Link>
        </section>

      </motion.div>
      <Footer />
    </main>
  );
};
