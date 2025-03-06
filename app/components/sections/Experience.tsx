import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../../constants/experience";

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Experience</h2>

        <div ref={ref} className="mt-16 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row mb-12 md:mb-24 relative ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-light dark:bg-primary-dark z-10"></div>

              {/* Date */}
              <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                <div
                  className={`md:text-right ${
                    index % 2 !== 0 ? "md:text-left" : ""
                  }`}
                >
                  <span className="text-primary-light dark:text-primary-dark font-medium">
                    {experience.startDate} — {experience.endDate}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 md:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold">{experience.position}</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    {experience.company}
                  </h4>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-gray-700 dark:text-gray-300 flex"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-light dark:bg-primary-dark rounded-full mr-2 mt-2"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
