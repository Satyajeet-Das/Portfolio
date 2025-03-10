import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      content: (
        <div className="bg-gradient-to-br from-[#080a11] to-[#151928] p-6 rounded-xl border border-gray-700 shadow-lg hover:border-blue-500">
          <h2 className="text-2xl font-semibold mb-2">Software Developer</h2>
          <h3 className="text-xl text-gray-300 mb-1">Company One</h3>
          <p className="text-gray-400 mb-2">Jan 2020 - Dec 2021</p>
          <p className="text-gray-300">Worked on various projects involving web development and backend services.</p>
        </div>
      ),
    },
    {
      title: "Software Developer",
      content: (
        <div className="bg-gradient-to-br from-[#080a11] to-[#151928] p-6 rounded-xl border border-gray-700 shadow-lg hover:border-blue-500">
          <h2 className="text-2xl font-semibold mb-2">Software Developer</h2>
          <h3 className="text-xl text-gray-300 mb-1">Company One</h3>
          <p className="text-gray-400 mb-2">Jan 2020 - Dec 2021</p>
          <p className="text-gray-300">Worked on various projects involving web development and backend services.</p>
        </div>
      ),
    },
    {
      title: "Backend Developer",
      content: (
        <div className="bg-gradient-to-br from-[#080a11] to-[#151928] p-6 rounded-xl border border-gray-700 shadow-lg hover:border-blue-500">
          <h2 className="text-2xl font-semibold mb-2">Backend Developer</h2>
          <h3 className="text-xl text-gray-300 mb-1">Company Two</h3>
          <p className="text-gray-400 mb-2">Jan 2022 - Present</p>
          <p className="text-gray-300">Focused on developing scalable backend systems and APIs.</p>
        </div>
      ),
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="w-full flex flex-col items-center bg-[#000000b6] text-white p-6 dark">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Experience 🏢
      </h1>

      <div className="w-full max-w-5xl">
        <Timeline data={experiences} />
      </div>
    </section>
  );
};

export default Experience;
