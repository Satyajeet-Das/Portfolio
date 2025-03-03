"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const links = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/education", label: "Education" },
    { href: "/work", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-[#151b2d] to-[#0b0e17] text-white flex flex-wrap justify-center gap-4 px-6 py-4 border rounded-xl border-gray-500 shadow-lg max-w-[90vw] md:max-w-[700px] mx-auto"
      >
        {/* Responsive Navbar */}
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:text-gray-300 transition text-sm md:text-base">
            {label}
          </Link>
        ))}
      </motion.div>
    </header>
  );
};

export default Header;
