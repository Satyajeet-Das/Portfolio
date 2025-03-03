import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
