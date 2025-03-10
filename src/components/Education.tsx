'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import collegeLogo from "../../public/college-logo.png"; // Replace with the actual path to your college logo

const Education = () => {
  const education = [
    {
      institution: "Indian Institute of Information Technology, Raichur",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      startDate: "2023",
      endDate: "2027",
      description: "Brief description of your education and achievements.",
      logo: collegeLogo,
    },
    // Add more education entries if needed
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#000000b6] text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Education 🎓
      </motion.h1>

      <div className="w-full max-w-5xl">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-br from-[#080a11] to-[#151928] p-6 rounded-xl border border-gray-700 shadow-lg mb-6 flex items-center gap-x-5"
          >
            <div className="w-24 h-24 mr-4">
              <Image
                src={edu.logo}
                alt={`${edu.institution} logo`}
                width={96}
                height={96}
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">{edu.institution}</h2>
              <p className="text-xl text-gray-300 mb-1">{edu.degree} in {edu.field}</p>
              <p className="text-gray-400 mb-2">{edu.startDate} - {edu.endDate}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;