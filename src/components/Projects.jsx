import { motion } from "framer-motion";

const projects = [
  {
    title: "YouTube Summarizer",
    tagline: "AI-powered transcript-to-summary tool",
    description:
      "Fetches YouTube video transcripts and summarizes them using Gemini AI — built for content digestion at scale.",
    tech: ["Python", "Gemini AI", "Transcript API"],
    github: "https://github.com/AryanKarfa/YouTube-Summarizer",
    demo: "#",
  },
  {
    title: "AI Portfolio",
    tagline: "Designed by mind, driven by minimalism",
    description:
      "A full creative portfolio built with HTML/CSS/JS, inspired by AI design patterns and aesthetic balance.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AryanKarfa/PORTFOLIO---by-aiwallah",
    demo: "#",
  },
  {
    title: "Song Gallery",
    tagline: "Musical. Aesthetic. Heartfelt.",
    description:
      "A melody-driven visual gallery that combines smooth animations, emotional gradients, and personal song selections — designed to convey stories through music and code.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AryanKarfa/SONG-GALLERY",
    demo: "#",
  },
  {
    title: "Love Gallery",
    tagline: "Personal. Emotional. Animated.",
    description:
      "A romantic visual experience with floating hearts, rotating photo gallery, and background music — made to express love through code.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AryanKarfa/LOVE-GALLERY",
    demo: "#",
  },
  {
    title: "ChainMint",
    tagline: "NFT minting experience — UI meets Web3",
    description:
      "A blockchain interface for minting NFTs, exploring the intersection of frontend and decentralized tech.",
    tech: ["JavaScript", "Web3", "Blockchain"],
    github: "https://github.com/AryanKarfa/ChainMint",
    demo: "#",
  },
  {
    title: "Weather App",
    tagline: "Live forecast, minimal UI",
    description:
      "Pulls real-time weather data using OpenWeather API, built with custom UI styling and responsive layout.",
    tech: ["JavaScript", "API", "HTML/CSS"],
    github: "https://github.com/AryanKarfa/Weather-App",
    demo: "#",
  },
  {
    title: "Tic-Tac-Toe",
    tagline: "Classic logic, fresh visuals",
    description:
      "Game logic built from scratch using JavaScript and DOM manipulation, with modern styling.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/AryanKarfa/Tic-Tac-Toe",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white px-6">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
        My Projects 🧩
      </h2>

      <div className="space-y-12 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-cyan-800/40 bg-white/5 rounded-xl p-6 backdrop-blur-md shadow-md hover:shadow-cyan-400/20 transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-1">
              {project.title}
            </h3>
            <p className="italic text-gray-400 mb-3">{project.tagline}</p>

            <p className="text-sm text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-cyan-800/20 border border-cyan-500 text-cyan-200 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-cyan-500 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-600 hover:text-black transition"
              >
                GitHub →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
