"use client"; // Required for interactive Next.js components
import React from "react";
import Image from "next/image";
import Squares from "@/blocks/Backgrounds/Squares/Squares";
import { RepeatingTypewriterEffect } from "@/components/RepeatingTypewriterEffect";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import Avatar from "../../public/avatar.jpeg";

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left p-6 w-full min-h-screen">
      {/* Background Squares */}
      <Squares
        speed={0.2}
        squareSize={100}
        className="absolute inset-0 -z-20"
      />
      <div className="bg-black h-full opacity-50 absolute inset-0 -z-10"></div>

      {/* Profile Image */}
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg border border-gray-300">
        <Image
          src={Avatar}
          alt="Satyajeet Das"
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
        />
      </div>

      {/* Hero Text Section */}
      <div className="mt-6 md:mt-0 md:ml-10 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Hey, I'm <span className="text-blue-500">Satyajeet Das</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-x-2 text-lg sm:text-2xl md:text-3xl mt-4">
          <div className="flex items-end justify-center">
            <span className="text-4xl">I'm a</span>
            <span className="w-3   inline-block"></span>
            <RepeatingTypewriterEffect
              words={[
                { text: "Software Developer", className: "text-blue-500" },
                { text: "Backend Developer", className: "text-green-500" },
                { text: "Frontend Developer", className: "text-yellow-500" },
                { text: "Full Stack Developer", className: "text-purple-500" },
                { text: "Web Developer", className: "text-red-500" },
                { text: "Mobile App Developer", className: "text-pink-500" },
              ]}
              cursorClassName="bg-blue-500"
              interval={3000}
            />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start mt-6 gap-x-4">
          {[
            {
              href: "https://github.com/yourusername",
              icon: <Github />,
              color: "hover:text-black dark:hover:text-blue-400",
            },
            {
              href: "https://linkedin.com/in/yourusername",
              icon: <Linkedin />,
              color: "hover:text-blue-700 dark:hover:text-blue-400",
            },
            {
              href: "https://instagram.com/yourusername",
              icon: <Instagram />,
              color: "hover:text-pink-500 dark:hover:text-red-400",
            },
            {
              href: "https://twitter.com/yourusername",
              icon: <Twitter />,
              color: "hover:text-blue-500 dark:hover:text-blue-400",
            },
            {
              href: "https://leetcode.com/yourusername",
              icon: <SiLeetcode />,
              color: "text-xl px-[10px] hover:text-orange-500 dark:hover:text-yellow-500",
            },
            {
              href: "https://codeforces.com/profile/yourusername",
              icon: <SiCodeforces />,
              color: "text-xl px-[10px] hover:text-indigo-500 dark:hover:text-blue-400",
            },
          ].map(({ href, icon, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 text-gray-600 dark:text-white ${color}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
