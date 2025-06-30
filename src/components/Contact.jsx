import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-8">Let’s Connect 🤝</h2>
        <form
          action="https://formspree.io/f/mwkgenpj" // Replace with your Formspree or Netlify form link
          method="POST"
          className="space-y-6"
        >
          {["name", "email", "message"].map((field, i) => (
            <div className="relative" key={i}>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-cyan-700 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder={field}
                />
              ) : (
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-cyan-700 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="message"
                ></textarea>
              )}
              <label className="absolute left-4 top-2 text-sm text-cyan-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-cyan-600 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300 capitalize">
                {field}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-md transition-all"
          >
            Send Message →
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;