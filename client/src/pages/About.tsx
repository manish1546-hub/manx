import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fadeUp, fadeLeft, fadeRight, stagger, pageTransition, scaleIn } from "@/lib/animations";
import { FiArrowLeft } from "react-icons/fi";

const skillItems = [
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

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "40+", label: "Projects Done" },
  { value: "20+", label: "Happy Clients" },
  { value: "100%", label: "Passion" },
];

export const About = (): JSX.Element => {
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
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 cursor-pointer group">
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-lime-400 group-hover:bg-lime-400/10 transition-all duration-200">
                <FiArrowLeft size={16} className="text-white/60 group-hover:text-lime-400 transition-colors" />
              </span>
              <span className="[font-family:'Londrina_Solid',Helvetica] text-[18px] font-light text-white/40 group-hover:text-lime-400 transition-colors duration-200 tracking-wide">
                Back to Home
              </span>
            </motion.span>
          </Link>
        </section>

        {/* ─── HERO TITLE ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-16">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -1 }}
              animate={{ opacity: 1, x: 0, rotate: -1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-block bg-lime-400 px-4 py-1 mb-4"
            >
              <span
                className="[font-family:'League_Gothic',Helvetica] text-[22px] tracking-[3px] text-black font-normal"
              >
                WHO I AM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="[font-family:'League_Gothic',Helvetica] font-normal leading-none tracking-[4px] text-white
                text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px]"
            >
              ABOUT
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-1 bg-lime-400 mt-3 w-full max-w-[600px]"
            />
          </div>
        </section>

        {/* ─── BIO SECTION ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="[font-family:'Londrina_Solid',Helvetica] text-[36px] sm:text-[48px] font-black leading-none">
                <span className="text-lime-400">R U </span>
                <span className="text-white">Manishprasad</span>
                <span className="text-white/40">, B.E</span>
              </h2>
              <p className="mt-6 [font-family:'Londrina_Solid',Helvetica] text-[20px] sm:text-[24px] font-light leading-[1.4] text-white/70 max-w-[540px]">
                I Design And Build Smooth, Aesthetic Web Experiences Where
                Code Meets Clean Vibes. UI/UX Is My Zone — Minimal, Intuitive,
                And Made To Feel Right.
              </p>
              <p className="mt-4 [font-family:'Londrina_Solid',Helvetica] text-[20px] sm:text-[22px] font-light leading-[1.4] text-white/50 max-w-[540px]">
                With a background in Computer Engineering, I bridge the gap
                between beautiful design and rock-solid development. Every pixel
                matters. Every interaction tells a story.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 inline-flex items-center rounded-[50px] border border-lime-400 px-5 py-3 cursor-default"
              >
                <img
                  className="h-[34px] w-auto max-w-[340px] object-contain"
                  alt="Tools"
                  src="/figmaAssets/group-36.png"
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-lime-400/5 rounded-full blur-[80px] pointer-events-none" />
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full max-w-[420px] object-contain drop-shadow-[0_0_60px_rgba(173,235,51,0.12)]"
                alt="Manishprasad"
                src="/figmaAssets/chatgpt-image-may-4--2026--01-27-29-pm-2.png"
              />
            </motion.div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={scaleIn}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group border border-white/10 rounded-[28px] p-6 sm:p-8 text-center
                  bg-white/[0.03] hover:bg-lime-400/5 hover:border-lime-400/30
                  transition-colors duration-300 cursor-default"
              >
                <div className="[font-family:'League_Gothic',Helvetica] text-[60px] sm:text-[80px] font-normal leading-none text-lime-400 group-hover:scale-110 transition-transform duration-300">
                  {value}
                </div>
                <div className="mt-2 [font-family:'Londrina_Solid',Helvetica] text-[18px] sm:text-[22px] font-light text-white/50">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── SKILLS ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="[font-family:'Anton',Helvetica] font-normal leading-none text-lime-400
              text-[56px] sm:text-[80px] md:text-[100px] mb-10"
          >
            Skill Level
          </motion.h2>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            {skillItems.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                whileHover={{ scale: 1.06, backgroundColor: "#adeb33", color: "#000" }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-white/20 px-5 py-2 cursor-default
                  [font-family:'Londrina_Solid',Helvetica] text-[20px] sm:text-[24px] font-light text-white
                  hover:border-lime-400 transition-colors duration-200 capitalize"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* ─── RETURN BUTTON ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mt-10 mb-8 flex justify-center">
          <Link href="/">
            <motion.span whileHover={{ scale: 1.04, x: -4 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 cursor-pointer rounded-full border border-white/20 px-8 py-4 hover:border-lime-400 hover:bg-lime-400/5 transition-all duration-200 group">
              <FiArrowLeft size={18} className="text-white/50 group-hover:text-lime-400 transition-colors" />
              <span className="[font-family:'Londrina_Solid',Helvetica] text-[20px] font-light text-white/60 group-hover:text-lime-400 transition-colors">
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
