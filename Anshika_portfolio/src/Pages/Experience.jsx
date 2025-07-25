import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function Experience({ isOpen }) {
  const expRef = useRef(null);
  const isExpInView = useInView(expRef, { once: true });

  const meetkatsLineControls = useAnimation();
  const meetkatsCardControls = useAnimation();
  const meetkatsListControls = useAnimation();

  const otherLineControls = useAnimation();
  const otherCardControls = useAnimation();
  const otherListControls = useAnimation();

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: {},
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const runAnimations = async () => {
      if (isExpInView) {
        await Promise.all([
          meetkatsLineControls.start({ height: '100%', transition: { duration: 1 } }),
          meetkatsCardControls.start({ opacity: 1, y: 0, transition: { duration: 1 } })
        ]);
        await meetkatsListControls.start('visible');
        await Promise.all([
          otherLineControls.start({ height: '100%', transition: { duration: 1 } }),
          otherCardControls.start({ opacity: 1, y: 0, transition: { duration: 1 } })
        ]);

        await otherListControls.start('visible');
      }
    };
    runAnimations();
  }, [isExpInView]);


  return (
    <div style={{ paddingLeft: isOpen ? '19rem' : '0' }} className="min-h-screen bg-white dark:bg-black transition-all duration-300 pt-10">
      <div className="container max-w-5xl mx-auto py-12 px-8 md:px-2 lg:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm md:text-base opacity-70 mb-1">
            <span className="text-primary text-xl font-semibold">Work Journey</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-tech text-gray-900 dark:text-white">
            Experience
          </h1>

        </motion.div>

        <div className="mb-16">
          <h2 className="text-3xl font-tech text-primary mb-8 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-briefcase mr-2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 3h-8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
            </svg>
            Internships
          </h2>

          {/* First Internship */}
          <div className="relative pl-8 mb-16" ref={expRef}>
            <motion.div
              initial={{ height: 0 }}
              animate={meetkatsLineControls}
              className="absolute left-[8px] -translate-x-1/2 top-0 w-0.5 bg-green-600 dark:bg-gray-400 h-full z-0"
            />
            <div className="absolute left-[8px] -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary z-10"></div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={meetkatsCardControls}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-lg p-6 shadow-md border border-border relative z-10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Node.js Intern</h3>
                  <p className="text-gray-700 dark:text-gray-400 text-lg">Celebal Technologies (Remote)</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-sm  text-gray-700 dark:text-gray-400">
                  May 2025 - July 2025
                </div>
              </div>
              <h4 className="text-lg mt-6 mb-2 text-black dark:text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-400">
                {["Node.js", "Express.js", "MongoDB", "JWT", "Socket.io"].map(tech => (
                  <span key={tech} className="px-2 py-0.5  text-xs rounded-md">{tech}</span>
                ))}
              </div>
              <h4 className="text-lg mb-2 text-black dark:text-white mt-4">Key Responsibilities:</h4>
              <motion.ul
                className="list-disc list-inside text-base space-y-1 text-gray-700 dark:text-gray-400"
                variants={listVariants}
                initial="hidden"
                animate={meetkatsListControls}
              >
                {[
                  "Created an appointment booking website with real-time availability and calendar integration.",
                  "Implemented secure authentication using JWT for users and admins.",
                  "Built REST APIs for managing appointments with CRUD and rescheduling support.",
                  "Used MongoDB for data handling and efficient querying.",
                  "Enabled notification system for upcoming bookings using Socket.io.",
                ].map((point, index) => (
                  <motion.li key={index} variants={itemVariants}>{point}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Second Internship */}
          <div className="relative pl-8">
            <motion.div
              initial={{ height: 0 }}
              animate={otherLineControls}
              className="absolute left-[8px] -translate-x-1/2 top-0 w-0.5 bg-green-600 dark:bg-gray-400 h-full z-0"
            />
            <div className="absolute left-[8px] -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-green-600 dark:bg-primary z-10"></div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={otherCardControls}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-lg p-6 shadow-md border border-border relative z-10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Web development Intern</h3>
                  <p className="text-gray-700 dark:text-gray-400 text-lg">Meetkats (Remote)</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-sm text-gray-700 dark:text-gray-400">
                  March 2025 - June 2025
                </div>
              </div>
              <h4 className="text-lg mt-6 mb-2 text-black dark:text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-400">
                {["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Mongoose", "JWT", "Context API"].map(tech => (
                  <span key={tech} className="px-2 py-0.5 bg-secondary text-xs rounded-md">{tech}</span>
                ))}
              </div>
              <h4 className="text-lg mb-2 text-black dark:text-white mt-4">Key Responsibilities:</h4>
              <motion.ul
                className="list-disc list-inside text-base space-y-1 text-gray-700 dark:text-gray-400"
                variants={listVariants}
                initial="hidden"
                animate={otherListControls}
              >
                {[
                  "Developed and maintained a full-stack event management and networking platform.",
                  "Built an employee management dashboard with role-based access control (Admin/Employee).",
                  "Implemented authentication and authorization using JWT and secure password hashing.",
                  "Integrated CRUD operations for managing events, users, and internal tasks.",
                  "Designed and developed interactive UI components using React.js and Tailwind CSS.",
                  "Created RESTful APIs in Node.js/Express for data interaction with MongoDB.",
                  "Used MongoDB with Mongoose for efficient schema design and database operations.",
                  "Handled state management using React Context and useReducer patterns.",
                  "Collaborated with a small team following Agile development principles.",
                ].map((point, index) => (
                  <motion.li key={index} variants={itemVariants}>{point}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
