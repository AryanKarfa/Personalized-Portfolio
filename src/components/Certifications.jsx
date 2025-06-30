import { motion } from "framer-motion";

const certifications = [
  {
    title: "Programming in C",
    platform: "Coursera · University of Michigan",
    link: "https://coursera.org/share/aac4fa5f78d5f4bf1990379804bfbc1e",
  },
  {
    title: "Active Listening: Enhancing Communication Skills",
    platform: "Coursera",
    link: "https://coursera.org/share/b4ef4c63cfc42dbbd171bd992d0078ac",
  },
  {
    title: "Introduction to Microprocessors",
    platform: "Coursera · Arm",
    link: "https://coursera.org/share/984a940f47b6991d2f1ef0eafd98452b",
  },
  {
    title: "CSS (Basic)",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/d0fbd8832300",
  },
  {
    title: "JavaScript (Basic)",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/54c65843d99f",
  },
  {
    title: "Python (Basic)",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/b67f6c6a80f5",
  },
  {
    title: "Software Engineering Job Simulation",
    platform: "Forage · Electronic Arts",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_Z2826BK5wGArnoR22_1748444257289_completion_certificate.pdf",
  },
  {
    title: "Explore Digital Technology Job Simulation",
    platform: "Forage · GE Aerospace",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ay2tsYxaTif7Nt6z7/fjk7MFbQbedPXb3ws_ay2tsYxaTif7Nt6z7_Z2826BK5wGArnoR22_1749397162065_completion_certificate.pdf",
  },
  {
    title: "Cyber Job Simulation",
    platform: "Forage · Deloitte Australia",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_Z2826BK5wGArnoR22_1750925554166_completion_certificate.pdf",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-black text-white px-6">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
        Certifications 📜
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-cyan-700 bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-cyan-500/10 transition-all"
          >
            <h3 className="text-lg font-semibold text-cyan-300 mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{cert.platform}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-cyan-400 hover:underline border border-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-black transition"
            >
              View Certificate →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
