import CountUp from 'react-countup';
import { useState } from 'react';
import { motion , AnimatePresence } from 'framer-motion';

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind", level: 70 },
      { name: "React", level: 60 },
      { name: "Vue", level: 55 },
      { name: "Next.js", level: 40 },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 30 },
      { name: "Java", level: 45 },
      { name: "Python", level: 50 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "Canva", level: 80 },
    ],
  },
];

const timelineData = [
  {
    title: "Generative AI Developer Intern",
    place: "AI Wallah",
    date: "Jun 2024 - Jul 2024",
    description: "Built intuitive frontend tools like a YouTube Transcript Visualizer and a dev portfolio, merging clean UI with practical utility to solve real-user pain points."
  },
  {
    title: "Web Developer Bootcamp",
    place: "Self-Paced",
    date: "2024 - Present",
    description: "Mastered HTML/CSS/JS fundamentals, advanced React hooks, and deployed full-stack projects through working on various projects and understanding the concepts."
  },
  {
    title: "B.Tech in Computer Science",
    place: "Sister Nivedita University",
    date: "2024 - Present",
    description: "Learning core CS concepts like Data Structures, Algorithms, OS, DBMS while building hands-on projects."
  },
];

const About = () => {
  const [showSkills, setShowSkills] = useState(false);
  return (
    <section id="about" className="min-h-screen py-20 bg-black text-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
        <motion.div
          className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg shadow-cyan-400/40 hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/mypic.jpeg"
            alt="Aryan Karfa"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          I'm a frontend-focused developer with a passion for turning ideas into interactive, user-first digital experiences. Whether it's building a YouTube Transcript Visualizer to simplify content analysis, crafting a dynamic portfolio to showcase creative identity, or designing intuitive features for a streaming recommender app — I thrive at the intersection of function, design, and purpose.

          Driven by curiosity and a builder’s mindset, I take pride in solving real-world problems through clean UI, scalable code, and thoughtful user flows. I move fast, learn faster, and bring energy to every project — from polished production work to experimental side builds.

          Currently exploring opportunities where I can grow, contribute meaningfully, and push the boundaries of what the frontend can do.
        </p>

        {/* Skill Tags */}
        <motion.div className="mt-16 w-full text-center">
          <button
            onClick={() => setShowSkills(!showSkills)}
            className="text-cyan-400 font-semibold tracking-wide border border-cyan-600 rounded-full px-5 py-2 hover:bg-cyan-400 hover:text-black transition-all"
          >
            {showSkills ? "Enough skills? 🔒" : "Wanna see my skill set? ▾"}
          </button>

          <AnimatePresence>
            {showSkills && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 text-left"
              >
                {skillGroups.map((group, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4 underline underline-offset-4">
                      {group.title}
                    </h3>
                    <div className="space-y-5">
                      {group.skills.map((skill, j) => (
                        <div key={j}>
                          <div className="flex justify-between text-sm mb-1 text-gray-300">
                            <span>{skill.name}</span>
                            <span className="text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-cyan-900/20 h-[4px] rounded">
                            <div
                              className="bg-cyan-400 h-[4px] rounded transition-all duration-700 ease-in-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Timeline */}
        <div className="mt-10 space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-cyan-400 pl-6 relative"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[10px] top-1.5"></div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <span className="text-sm text-cyan-300">{item.place}</span>
              <p className="text-sm text-gray-400 italic mb-2">{item.date}</p>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Learning & Goals */}
        <div className="mt-14 text-left">
          <motion.h3
            className="text-2xl font-semibold text-cyan-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Currently Learning 📚
          </motion.h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>TypeScript & Next.js</li>
            <li>Tailwind Component Patterns</li>
            <li>Core Concepts of JAVA and C++</li>
            <li>How to build MVPs fast 🔥</li>
          </ul>

          <motion.h3
            className="text-2xl font-semibold text-cyan-400 mt-10 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Goals 🏆
          </motion.h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Land a kickass Frontend role</li>
            <li>Build a personal SaaS project</li>
            <li>Open-source contributions</li>
            <li>Build my dev brand 🔥</li>
          </ul>
        </div>

      </motion.div>
    </section>
  );
};

export default About;
