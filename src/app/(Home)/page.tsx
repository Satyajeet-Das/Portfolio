import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default Home;
