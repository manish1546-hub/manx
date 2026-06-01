import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Social", href: "/social-media" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const handleNavClick = () => {
  window.scrollTo({ top: 0, behavior: "instant" });
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4 sm:px-10 backdrop-blur-md bg-black/70 border-b border-white/5"
    >
      {/* Logo — absolute left */}
      <div className="absolute left-6 sm:left-10">
        <Link href="/" onClick={handleNavClick}>
          <motion.img
            whileHover={{ rotate: 180, scale: 1.15 }}
            transition={{ duration: 0.4 }}
            className="h-7 w-7 shrink-0 cursor-pointer"
            alt="Logo"
            src="/figmaAssets/icon-park-solid-two-semicircles.svg"
            data-testid="link-logo"
          />
        </Link>
      </div>

      {/* Desktop nav — truly centered */}
      <nav className="hidden md:block" aria-label="Primary">
        <ul className="flex items-center gap-8 lg:gap-14">
          {navItems.map((item, i) => {
            const isActive = location === item.href;
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.07 }}
              >
                <Link href={item.href} onClick={handleNavClick}>
                  <span
                    className="relative [font-family:'Londrina_Solid',Helvetica] text-[26px] font-normal cursor-pointer group block"
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive ? "text-lime-400" : "text-white group-hover:text-lime-400"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile hamburger — absolute right */}
      <div className="absolute right-6 sm:right-10 md:hidden">
        <button
          className="flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-testid="button-menu-toggle"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 8 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.22 }}
              className="block h-0.5 w-6 bg-white rounded-full origin-center"
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 px-6 py-4 md:hidden"
          >
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href} onClick={() => { setMenuOpen(false); handleNavClick(); }}>
                  <span
                    className={`block py-3 [font-family:'Londrina_Solid',Helvetica] text-[28px] font-normal transition-colors cursor-pointer ${
                      isActive ? "text-lime-400" : "text-white hover:text-lime-400"
                    }`}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
