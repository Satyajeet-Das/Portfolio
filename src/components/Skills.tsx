'use client';

import { motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiCplusplus, SiPython, SiMongodb, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiNextdotjs, SiRedux, SiNodedotjs, SiExpress, SiFlask, SiFastapi, SiSocketdotio, SiGit, SiPostgresql, SiC } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: "Advanced", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "TypeScript", level: "Intermediate", icon: <SiTypescript className="text-blue-500" /> },
    { name: "C++", level: "Intermediate", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "C", level: "Intermediate", icon: <SiC className="text-blue-500" /> },
    { name: "Python", level: "Intermediate", icon: <SiPython className="text-yellow-500" /> },
    { name: "SQL", level: "Intermediate", icon: <FaDatabase className="text-blue-500" /> },
    { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="text-green-500" /> },
    { name: "HTML/CSS", level: "Advanced", icon: <SiHtml5 className="text-orange-500" />, icon2: <SiCss3 className="text-blue-500" /> },
    { name: "React", level: "Advanced", icon: <SiReact className="text-blue-500" /> },
    { name: "TailwindCSS", level: "Intermediate", icon: <SiTailwindcss className="text-blue-500" /> },
    { name: "NextJS", level: "Intermediate", icon: <SiNextdotjs className="text-white" /> },
    { name: "RESTful APIs", level: "Intermediate", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Redux", level: "Intermediate", icon: <SiRedux className="text-purple-500" /> },
    { name: "Web Scraping", level: "Intermediate", icon: <SiPython className="text-yellow-500" /> },
    { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", level: "Intermediate", icon: <SiExpress className="text-green-500" /> },
    { name: "Flask", level: "Intermediate", icon: <SiFlask className="text-white" /> },
    { name: "FastAPI", level: "Intermediate", icon: <SiFastapi className="text-green-500" /> },
    { name: "Socket.IO", level: "Intermediate", icon: <SiSocketdotio className="text-white" /> },
    { name: "Git", level: "Intermediate", icon: <SiGit className="text-orange-500" /> },
  ];

  return (
    <section id="skills" className="w-full flex flex-col items-center bg-[#000000b6] text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Skills 💼
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-[#080a11] to-[#151928] p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-2">
              {skill.icon}
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </div>
            <p className="text-gray-300">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;