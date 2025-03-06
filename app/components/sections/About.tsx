import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FiCode, FiServer, FiLayers, FiTool } from 'react-icons/fi';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: 'Frontend', icon: <FiCode />, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
    { name: 'Backend', icon: <FiServer />, items: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'SQL'] },
    { name: 'Design', icon: <FiLayers />, items: ['Figma', 'Responsive Design', 'UI/UX', 'Wireframing'] },
    { name: 'Tools', icon: <FiTool />, items: ['Git', 'Jest', 'Docker', 'CI/CD', 'Webpack'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div 
          ref={ref}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <div className="aspect-w-4 aspect-h-5 relative">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={500}
                height={625}
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-4"
            >
              Who I Am
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 mb-6"
            >
              I'm a Full Stack Developer with over 5 years of experience building web applications. 
              I specialize in JavaScript technologies across the entire stack, with a strong focus 
              on React, Next.js, Node.js, and modern front-end development practices.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 mb-8"
            >
              My passion is creating efficient, scalable, and user-friendly applications that solve 
              real-world problems. I'm constantly learning new technologies and methodologies to 
              improve my skills and deliver better solutions.
            </motion.p>
            
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-4"
            >
              My Skills
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-primary-light dark:text-primary-dark mr-3">
                      {skill.icon}
                    </span>
                    <h4 className="text-xl font-semibold">{skill.name}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-light dark:bg-primary-dark rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;