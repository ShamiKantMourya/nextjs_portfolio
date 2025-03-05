import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import ParticleBackground from "../ParticleBackground";
import { useScrollTo } from "../../hooks/useScrollTo";

const Home = () => {
  const scrollTo = useScrollTo();

  return (
    <section id="home" className="relative h-screen flex items-center">
      <ParticleBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.p
            className="text-primary-light dark:text-primary-dark font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, my name is
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Shami Kant Mourya
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I build modern, responsive web applications with React, Next.js, and
            Node.js. Passionate about creating seamless user experiences with
            clean, maintainable code.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("projects")}
            >
              View My Projects
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo("about")}
            >
              More About Me
            </button>
          </motion.div>

          <motion.div
            className="flex mt-12 space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark"
            >
              <FiTwitter size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
