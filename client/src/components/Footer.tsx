import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter, FiMail, FiArrowUpRight } from "react-icons/fi";

const footerLinks = {
  Services: ["Branding", "Social Media", "UI/UX Design", "Web Development"],
  Work: ["Portfolio", "Case Studies", "Process", "Testimonials"],
  Contact: ["Email Me", "Book a Call", "LinkedIn", "Instagram"],
};

const socials = [
  { icon: FiGithub, label: "GitHub", href: "#" },
  { icon: FiInstagram, label: "Instagram", href: "#" },
  { icon: FiLinkedin, label: "LinkedIn", href: "#" },
  { icon: FiTwitter, label: "Twitter", href: "#" },
  { icon: FiMail, label: "Email", href: "mailto:hello@manish.dev" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 w-full overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-lime-400/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/figmaAssets/icon-park-solid-two-semicircles.svg"
                alt="Logo"
                className="h-8 w-8"
              />
              <span
                className="text-2xl font-black text-white"
                style={{ fontFamily: "'Londrina Solid', Helvetica" }}
              >
                MANISH
              </span>
            </div>
            <p
              className="text-white/50 leading-relaxed mb-6 max-w-[260px]"
              style={{ fontFamily: "'Londrina Solid', Helvetica", fontSize: "18px", fontWeight: 300 }}
            >
              Designing & building smooth, aesthetic web experiences where code meets clean vibes.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.2, color: "#adeb33" }}
                  className="text-white/40 transition-colors hover:text-lime-400"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([heading, items], colIdx) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (colIdx + 1) * 0.1 }}
            >
              <h4
                className="mb-5 text-lime-400 text-lg font-black tracking-wider uppercase"
                style={{ fontFamily: "'Londrina Solid', Helvetica" }}
              >
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="group flex items-center gap-1 text-white/50 transition-colors hover:text-white"
                      whileHover={{ x: 4 }}
                      style={{ fontFamily: "'Londrina Solid', Helvetica", fontSize: "20px", fontWeight: 300 }}
                    >
                      {item}
                      <FiArrowUpRight
                        size={14}
                        className="opacity-0 -translate-y-0.5 transition-all group-hover:opacity-100"
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-hidden py-8"
        >
          <div
            className="text-center text-[clamp(60px,14vw,180px)] font-normal leading-none tracking-[0.05em] text-white/5 select-none"
            style={{ fontFamily: "'League Gothic', Helvetica" }}
          >
            PORT&nbsp;&nbsp;FOLIO
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-8 sm:flex-row sm:justify-between">
          <p
            className="text-white/30 text-center"
            style={{ fontFamily: "'Londrina Solid', Helvetica", fontSize: "17px", fontWeight: 300 }}
          >
            © {year} R U Manishprasad. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-white/30 hover:text-white/60 transition-colors"
                style={{ fontFamily: "'Londrina Solid', Helvetica", fontSize: "16px", fontWeight: 300 }}
                whileHover={{ y: -1 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
