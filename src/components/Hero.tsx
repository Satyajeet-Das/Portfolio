import React from "react";
import Image from "next/image";
import { RepeatingTypewriterEffect } from "@/components/RepeatingTypewriterEffect";
import { Github, Linkedin, Twitter } from "lucide-react"; // Import social icons
import { Instagram } from "lucide-react"; // Instagram icon
import Avatar from "../../public/avatar.jpeg"; // Import profile image
import { SiLeetcode, SiCodeforces } from "react-icons/si"; // LeetCode & Codeforces icons

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 w-full h-screen">
      {/* Left Section - Profile Image */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg border border-gray-300">
        <Image src={Avatar} alt="Satyajeet Das" layout="fill" objectFit="cover" />
      </div>

      {/* Right Section - Text & Typewriter Effect */}
      <div className="flex flex-col font-bold text-center md:text-left text-[30px] md:text-5xl lg:text-6xl gap-y-4 md:ml-12 mt-6 md:mt-0">
        <div>
          Hey, I'm <span className="text-blue-500">Satyajeet Das</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-2">
          <div className="text-2xl md:text-3xl mt-2">I'm a</div>
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

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start mt-6 gap-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
          >
            <Github className="w-8 h-8 text-gray-600 dark:text-white hover:text-black dark:hover:text-blue-400" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
          >
            <Linkedin className="w-8 h-8 text-gray-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-400" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
          >
            <Instagram className="w-8 h-8 text-gray-600 dark:text-white hover:text-pink-500 dark:hover:text-red-400" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
          >
            <Twitter className="w-8 h-8 text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" />
          </a>
          <a
            href="https://leetcode.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
          >
            <SiLeetcode className="w-8 h-8 text-gray-600 dark:text-white hover:text-orange-500 dark:hover:text-yellow-500" />
          </a>
          <a
            href="https://codeforces.com/profile/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
          >
            <SiCodeforces className="w-8 h-8 text-gray-600 dark:text-white hover:text-indigo-500 dark:hover:text-blue-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
