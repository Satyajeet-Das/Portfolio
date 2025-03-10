'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaAndroid } from "react-icons/fa";

const Work = () => {
  const projects = [
    {
      title: "Project One",
      description: "Brief description of Project One",
      banner: "/path/to/project-one-banner.jpg", // Replace with the actual path to your project banner
      github: "https://github.com/yourusername/project-one",
      live: "https://project-one-live.com",
      apk: "", // Leave empty if not applicable
    },
    {
      title: "Project Two",
      description: "Brief description of Project Two.",
      banner: "/path/to/project-two-banner.jpg", // Replace with the actual path to your project banner
      github: "https://github.com/yourusername/project-two",
      live: "",
      apk: "https://path/to/project-two.apk",
    },
    // Add more projects as needed
  ];

  return (
    <section id="work" className="w-full flex flex-col items-center bg-[#000000b6] text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Work 💼
      </motion.h1>

      <div className="w-full max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-br from-[#080a11] to-[#151928] p-6 rounded-xl border border-gray-700 shadow-lg mb-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-1/3">
                <Image
                  src={project.banner}
                  alt={`${project.title} banner`}
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                  {project.apk && (
                    <a
                      href={project.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <FaAndroid size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="flex justify-center mt-8">
          <Link href="/projects">
            <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition text-lg font-semibold">
              View More Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
