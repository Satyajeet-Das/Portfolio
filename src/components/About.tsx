'use client'

import { motion } from "framer-motion";
import { FaCode, FaUsers, FaBook, FaRocket, FaGamepad } from "react-icons/fa";
import { MdHelp, MdWork, MdSchool } from "react-icons/md";

const aboutCards = [
  {
    title: "Current Projects",
    icon: <MdWork className="text-4xl text-blue-400" />,
    content: [
      "🎮 Discord Bot with real-time API integrations.",
      "📱 Time Capsule Mobile App for preserving memories.",
      "🌐 Social Media Web App with interactive features.",
    ],
  },
  {
    title: "Collaboration Opportunities",
    icon: <FaUsers className="text-4xl text-green-400" />,
    content: [
      "🚀 Open-source projects on web & mobile apps.",
      "💡 Challenging projects pushing modern tech limits.",
    ],
  },
  {
    title: "Seeking Help With",
    icon: <MdHelp className="text-4xl text-red-400" />,
    content: [
      "🛠️ Improving backend development (Node.js, Prisma).",
      "🤖 Exploring AI-driven real-world applications.",
    ],
  },
  {
    title: "Learning Journey",
    icon: <MdSchool className="text-4xl text-yellow-400" />,
    content: [
      "📌 Backend: Node.js, Express.js, Prisma.",
      "📌 Frontend: React.js, Next.js.",
      "📌 Mobile: Flutter (cross-platform).",
    ],
  },
  {
    title: "Tech & Interests",
    icon: <FaCode className="text-4xl text-purple-400" />,
    content: [
      "⚡ Full-stack development & scalable deployments.",
      "🎨 Creative coding & tech + entertainment.",
      "🌍 Real-time web apps & WebSockets.",
    ],
  },
  {
    title: "Fun Fact",
    icon: <FaGamepad className="text-4xl text-pink-400" />,
    content: ["🏓 Love playing table tennis.", "📚 Always reading new books."],
  },
];

const AboutPage = () => {
  return (
    <section id="about" className="w-full flex flex-col items-center bg-[#000000b6] text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me 💫
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {aboutCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-[#080a11] to-[#151928] p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              {card.icon}
              <h2 className="text-xl font-semibold">{card.title}</h2>
            </div>
            <ul className="list-disc list-inside text-gray-300">
              {card.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
