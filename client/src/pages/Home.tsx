import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fadeUp, fadeIn, stagger, pageTransition } from "@/lib/animations";

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

const serviceItems = [
  { title: "Branding", desc: "Bold identities that speak before you do." },
  { title: "Social Media", desc: "Scroll-stopping content crafted for impact." },
  { title: "UI/UX Designing", desc: "Intuitive flows, minimal friction, pure feel." },
  { title: "Web Development", desc: "Fast, responsive & beautifully functional." },
];

const brandLogos = [
  { src: "/figmaAssets/image-29.png", alt: "Brand", className: "w-14 h-14 sm:w-20 sm:h-20 rounded-[18px] object-cover" },
  { src: "/figmaAssets/image-24.png", alt: "Brand", className: "w-14 h-14 sm:w-20 sm:h-20 object-contain" },
  { src: "/figmaAssets/image-27.png", alt: "Brand", className: "w-14 h-14 sm:w-20 sm:h-20 object-contain" },
  { src: "/figmaAssets/image-23.png", alt: "Brand", className: "w-14 h-14 sm:w-20 sm:h-20 rounded-[11px] object-cover" },
  { src: "/figmaAssets/image-25.png", alt: "Brand", className: "w-14 h-14 sm:w-20 sm:h-20 rounded-[11px] object-cover" },
  { src: "/figmaAssets/image-26.png", alt: "Brand", className: "w-14 h-14 sm:w-20 sm:h-20 rounded-[11px] object-cover" },
  { src: "/figmaAssets/image-28.png", alt: "Brand", className: "w-14 h-14 sm:w-20 sm:h-20 rounded-[14px] object-cover" },
];

export const Home = (): JSX.Element => {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navbar />

      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* ─── HERO ─── */}
        <section className="relative min-h-screen pt-24 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex max-w-[1512px] flex-col items-center px-4 sm:px-8 pt-12 pb-16"
          >
            {/* ── PORT [img] FOLIO layout ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 relative flex items-center justify-center select-none"
            >
              {/* PORT — with MANISH badge anchored to its top-left */}
              <div className="relative">
                {/* MANISH badge — above-left corner of PORT */}
                <motion.div
                  initial={{ }}
                  animate={{ }}
                  transition={{  }}
                  className="absolute -top-[44px] left-0 z-40"
                >
                  <div className="relative h-[44px] w-[160px] sm:w-[200px] md:w-[220px]">
                    <div className="absolute inset-0 -rotate-[12.96deg] bg-lime-400 rounded-sm" />
                    <div className="absolute inset-0 flex items-center justify-center [font-family:'League_Gothic',Helvetica] text-[32px] sm:text-[40px] font-normal tracking-[4px] text-[#270000]">
                      
                    </div>
                  </div>
                </motion.div>

                <span className="[font-family:'League_Gothic',Helvetica] font-normal leading-none tracking-[6px] text-white
                  text-[80px] sm:text-[130px] md:text-[180px] lg:text-[240px] xl:text-[300px] xl:tracking-[20px]">
                  PORT
                </span>
              </div>

              {/* Hero image — between PORT and FOLIO */}
              <motion.img
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 w-[120px] sm:w-[200px] md:w-[260px] lg:w-[340px] xl:w-[420px] object-contain pointer-events-none mx-1 sm:mx-2 md:mx-3 self-end -mb-2"
                alt="Manish"
                src="/figmaAssets/gemini-generated-image-la5ow0la5ow0la5o-1.png"
              />

              {/* FOLIO — with Creative Technologist badge at bottom-right */}
              <div className="relative">
                <span className="[font-family:'League_Gothic',Helvetica] font-normal leading-none tracking-[6px] text-white
                  text-[80px] sm:text-[130px] md:text-[180px] lg:text-[240px] xl:text-[300px] xl:tracking-[20px]">
                  FOLIO
                </span>

                {/* Creative Technologist badge — bottom-right corner of FOLIO */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-[44px] right-0 z-40"
                >
                  <div className="relative h-[44px] w-[220px] sm:w-[300px] md:w-[360px]">
                    <div className="absolute inset-0 -rotate-[1.03deg] bg-lime-400 rounded-sm" />
                    <div className="absolute inset-0 -rotate-[1deg] flex items-center justify-center [font-family:'Londrina_Solid',Helvetica] text-[16px] sm:text-[22px] md:text-[28px] font-black tracking-wide text-black whitespace-nowrap">
                      Creative Technologist
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Background arc */}
            <img
              className="absolute bottom-0 left-1/2 z-0 w-full max-w-[1489px] -translate-x-1/2 opacity-70"
              alt=""
              src="/figmaAssets/group-32.png"
              aria-hidden="true"
            />

            {/* Pulsing lime dots */}
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[16%] top-[480px] z-10 h-4 w-4 rounded-full bg-lime-400"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute right-[14%] top-[560px] z-10 h-4 w-4 rounded-full bg-lime-400"
            />
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          >
            <span className="[font-family:'Londrina_Solid',Helvetica] text-[14px] font-light text-white/30 tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"
            />
          </motion.div>
        </section>

        {/* ─── ABOUT / SKILLS CARD ─── */}
        <section className="mx-auto mt-8 w-full max-w-[1512px] px-4 sm:px-8 lg:px-10 pb-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeIn}
          >
            <Card className="relative overflow-hidden rounded-[40px] border border-white/20 bg-[#ffffff0d] shadow-none backdrop-blur-[20px] lg:rounded-[69px]
              before:pointer-events-none before:absolute before:inset-0 before:rounded-[40px] before:p-[1px]
              before:[background:linear-gradient(137deg,rgba(255,255,255,0.27)_0%,rgba(255,255,255,0.04)_32%,rgba(255,255,255,0)_62%,rgba(255,255,255,0.33)_100%)]
              before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
              before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] lg:before:rounded-[69px]">
              <CardContent className="relative z-10 p-6 sm:p-10 lg:p-14">
                <div className="grid items-start gap-10 lg:grid-cols-[320px_minmax(300px,460px)_1fr]">

                  {/* Skills list */}
                  <motion.aside
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <motion.h2
                      variants={fadeUp}
                      className="[font-family:'Londrina_Solid',Helvetica] text-[42px] sm:text-[50px] font-black leading-none text-[#adeb33]"
                    >
                      Skill Level
                    </motion.h2>
                    <ul className="mt-4 space-y-1">
                      {skillItems.map((item) => (
                        <motion.li
                          key={item}
                          variants={fadeUp}
                          className="[font-family:'Londrina_Solid',Helvetica] text-[26px] sm:text-[32px] font-light leading-[1.2] text-white
                            hover:text-lime-400 transition-colors duration-200 cursor-default"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.aside>

                  {/* Bio */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                    className="pt-1"
                  >
                    <motion.h3
                      variants={fadeUp}
                      className="[font-family:'Londrina_Solid',Helvetica] text-[30px] sm:text-[42px] lg:text-[50px] font-black leading-none text-white"
                    >
                      <span className="text-[#adeb33]">R U </span>
                      <span>Manishprasad, B.E</span>
                    </motion.h3>
                    <motion.p
                      variants={fadeUp}
                      className="mt-6 max-w-[460px] [font-family:'Londrina_Solid',Helvetica] text-[19px] sm:text-[23px] font-light leading-[1.35] text-white/80"
                    >
                      I Design And Build Smooth, Aesthetic Web Experiences Where
                      Code Meets Clean Vibes.
                      <br />
                      UI/UX Is My Zone — Minimal, Intuitive, And Made To Feel Right.
                    </motion.p>
                    <motion.div
                      variants={fadeUp}
                      whileHover={{ scale: 1.02 }}
                      className="mt-6 inline-flex min-h-[60px] items-center rounded-[50px] border border-lime-400 px-5 py-3 transition-all duration-300 cursor-default"
                    >
                      <img
                        className="h-[34px] w-auto max-w-[340px] object-contain"
                        alt="Tools"
                        src="/figmaAssets/group-36.png"
                      />
                    </motion.div>

                    {/* CTA link to About page */}
                    <motion.div variants={fadeUp} className="mt-6">
                      <Link href="/about">
                        <motion.span
                          whileHover={{ x: 6 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="inline-flex items-center gap-2 [font-family:'Londrina_Solid',Helvetica] text-[20px] font-light text-lime-400 cursor-pointer hover:underline underline-offset-4"
                          data-testid="link-about-more"
                        >
                          Learn more about me →
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Profile image */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex min-h-[280px] items-end justify-center lg:min-h-[580px]"
                  >
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-[600px] self-end object-contain drop-shadow-[0_0_60px_rgba(173,235,51,0.15)]"
                      alt="Manishprasad"
                      src="/figmaAssets/chatgpt-image-may-4--2026--01-27-29-pm-2.png"
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="mx-auto mt-20 w-full max-w-[1325px] px-4 sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center [font-family:'Anton',Helvetica] font-normal leading-none text-lime-400
              text-[64px] sm:text-[100px] md:text-[130px] lg:text-[150px]"
          >
            Services
          </motion.h2>

          <motion.div
            className="mt-10 grid gap-6 sm:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {serviceItems.map((service, i) => (
              <Link key={service.title} href="/services">
                <motion.article
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group cursor-pointer"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <Card className="rounded-[50px] sm:rounded-[70px] border-4 border-lime-400 bg-transparent shadow-none
                    transition-all duration-300 group-hover:bg-lime-400/5 group-hover:shadow-[0_0_40px_rgba(173,235,51,0.15)]">
                    <CardContent className="flex flex-col items-center justify-center p-6 sm:p-8 text-center min-h-[140px] sm:min-h-[160px]">
                      <h3 className="[font-family:'Anton',Helvetica] font-normal leading-none text-white transition-colors duration-300 group-hover:text-lime-400
                        text-[38px] sm:text-[52px] md:text-[58px] lg:text-[68px]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-white/40 text-sm sm:text-base [font-family:'Londrina_Solid',Helvetica] font-light
                        opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
                        {service.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.article>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-lime-400 px-8 py-3
                  [font-family:'Londrina_Solid',Helvetica] text-[22px] font-black text-lime-400 cursor-pointer
                  hover:bg-lime-400 hover:text-black transition-colors duration-200"
                data-testid="link-all-services"
              >
                View All Services →
              </motion.span>
            </Link>
          </motion.div>
        </section>

        {/* ─── BRANDS ─── */}
        <section className="mx-auto mt-20 w-full max-w-[1400px] px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center [font-family:'Anton',Helvetica] font-normal leading-none text-white
              text-[32px] sm:text-[42px] md:text-[50px]"
          >
            Brands Worked With
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
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
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section className="mx-auto mt-24 w-full max-w-[1400px] px-4 sm:px-8 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[40px] bg-lime-400 px-8 py-14 sm:px-16 sm:py-20 text-center"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-black/10 blur-3xl" />

            <h2 className="relative z-10 [font-family:'League_Gothic',Helvetica] font-normal text-black leading-none
              text-[48px] sm:text-[72px] md:text-[90px] tracking-[3px]">
              LET'S WORK TOGETHER
            </h2>
            <p className="relative z-10 mt-4 [font-family:'Londrina_Solid',Helvetica] font-light text-black/70
              text-[20px] sm:text-[24px]">
              Got a project in mind? Let's make it real.
            </p>

            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#adeb33" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-black text-lime-400 px-10 py-4
                  [font-family:'Londrina_Solid',Helvetica] text-[22px] font-black tracking-wide cursor-pointer"
                data-testid="link-contact-cta"
              >
                Say Hello →
              </motion.span>
            </Link>
          </motion.div>
        </section>
      </motion.div>

      <Footer />
    </main>
  );
};
