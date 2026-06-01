import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fadeUp, fadeLeft, fadeRight, stagger, pageTransition } from "@/lib/animations";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin, FiSend, FiArrowLeft } from "react-icons/fi";

const socials = [
  { icon: FiGithub, label: "GitHub", handle: "@manish1546-hub", href: "https://github.com/manish1546-hub" },
  { icon: FiInstagram, label: "Instagram", handle: "manish_15_uiux", href: "https://www.instagram.com/manish_15_uiux?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { icon: FiLinkedin, label: "LinkedIn", handle: "R U Manishprasad", href: "https://www.linkedin.com/in/manish-prasad-/" },
  { icon: FiTwitter, label: "Twitter / X", handle: "@manish_dev", href: "#" },
];

const contactInfo = [
  { icon: FiMail, label: "Email", value: "manishprasad1306@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+91 90259 46468" },
  { icon: FiMapPin, label: "Location", value: "Coimbatore, India" },
];

export const Contact = (): JSX.Element => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputBase =
    "w-full bg-white/[0.04] border border-white/15 rounded-[16px] px-5 py-4 " +
    "[font-family:'Londrina_Solid',Helvetica] text-[20px] font-light text-white placeholder:text-white/25 " +
    "focus:outline-none focus:border-lime-400 transition-colors duration-200 resize-none";

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
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -1 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block bg-lime-400 px-4 py-1 mb-4"
          >
            <span className="[font-family:'League_Gothic',Helvetica] text-[22px] tracking-[3px] text-black font-normal">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="[font-family:'League_Gothic',Helvetica] font-normal leading-none tracking-[4px] text-white
              text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px]"
          >
            CONTACT
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-lime-400 mt-3 w-full max-w-[600px]"
          />
        </section>

        {/* ─── MAIN GRID ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">

            {/* Left – info + socials */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="[font-family:'Londrina_Solid',Helvetica] text-[21px] sm:text-[25px] font-light leading-[1.4] text-white/60 mb-10 max-w-[440px]">
                Got a project in mind? A question? Or just want to say hi? My inbox is always open. I'll get back to you real quick.
              </p>

              {/* Contact info */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5 mb-12"
              >
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 bg-white/[0.04]
                      group-hover:border-lime-400/50 group-hover:bg-lime-400/5 transition-all duration-300">
                      <Icon size={20} className="text-lime-400" />
                    </div>
                    <div>
                      <div className="[font-family:'Londrina_Solid',Helvetica] text-[14px] font-light text-white/35 uppercase tracking-wider">
                        {label}
                      </div>
                      <div className="[font-family:'Londrina_Solid',Helvetica] text-[20px] sm:text-[22px] font-light text-white group-hover:text-lime-400 transition-colors duration-200">
                        {value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Socials */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="[font-family:'Londrina_Solid',Helvetica] text-[22px] font-black text-lime-400 mb-5 uppercase tracking-wider">
                  Find Me Online
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map(({ icon: Icon, label, handle, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      variants={fadeUp}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="flex items-center gap-3 border border-white/10 rounded-[18px] p-4
                        bg-white/[0.03] hover:border-lime-400/40 hover:bg-lime-400/[0.04] transition-all duration-300"
                      data-testid={`link-social-${label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <Icon size={20} className="text-lime-400 flex-shrink-0" />
                      <div>
                        <div className="[font-family:'Londrina_Solid',Helvetica] text-[16px] font-black text-white">
                          {label}
                        </div>
                        <div className="[font-family:'Londrina_Solid',Helvetica] text-[14px] font-light text-white/40">
                          {handle}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right – form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="relative rounded-[36px] border border-white/10 bg-white/[0.03] p-7 sm:p-10
                before:pointer-events-none before:absolute before:inset-0 before:rounded-[36px] before:p-[1px]
                before:[background:linear-gradient(137deg,rgba(173,235,51,0.18)_0%,rgba(255,255,255,0.04)_40%,rgba(255,255,255,0)_70%,rgba(173,235,51,0.1)_100%)]
                before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]">

                <h2 className="[font-family:'Londrina_Solid',Helvetica] text-[30px] sm:text-[38px] font-black text-white mb-8">
                  Send A Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: "#adeb33" }}
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputBase}
                      data-testid="input-name"
                    />
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputBase}
                      data-testid="input-email"
                    />
                  </div>

                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputBase}
                    data-testid="input-subject"
                  />

                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    rows={5}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={inputBase}
                    data-testid="textarea-message"
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, backgroundColor: "#adeb33", color: "#000" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.22 }}
                    className="w-full flex items-center justify-center gap-3 rounded-full bg-black border-2 border-lime-400
                      text-lime-400 py-4 [font-family:'Londrina_Solid',Helvetica] text-[24px] font-black tracking-wide
                      transition-colors duration-200"
                    data-testid="button-submit"
                  >
                    <FiSend size={20} />
                    {submitted ? "Sent! Talk soon 🤙" : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA MAP STRIP ─── */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[36px] bg-lime-400 px-8 py-12 sm:px-16 sm:py-16 text-center"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-black/10 blur-3xl" />

            <h2 className="relative z-10 [font-family:'League_Gothic',Helvetica] font-normal text-black leading-none
              text-[44px] sm:text-[66px] md:text-[84px] tracking-[3px]">
              LET'S BUILD SOMETHING GREAT
            </h2>
            <p className="relative z-10 mt-4 [font-family:'Londrina_Solid',Helvetica] font-light text-black/65 text-[20px] sm:text-[24px]">
              Open for freelance & collaborations.
            </p>
          </motion.div>
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
