import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

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
    <header>
        <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#151b2d] to-[#0b0e17] text-white flex items-center justify-center p-6 py-5 border rounded-xl border-gray-500">
          {/* Add 4 Tabs and Links of the page using Link */}
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span className="mx-4">{label}</span>
            </Link>
          ))}
        </div>
      </AnimatedContent>
        
    </header>
  );
}

export default Header;