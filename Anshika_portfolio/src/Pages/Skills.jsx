import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import {
  FaCode, FaCubes, FaLayerGroup, FaDatabase, FaCodeBranch, FaToolbox,
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs,
  FaGitAlt, FaGithub, FaJava, FaStripeS, FaCuttlefish, FaBook
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiTypescript
} from 'react-icons/si';

const skillData = [
  {
    title: "Languages",
    icon: <FaCode className="text-2xl text-black dark:text-white " />,
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "C++", icon: <FaCuttlefish /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    title: "Libraries",
    icon: <FaLayerGroup className="text-2xl text-black dark:text-white" />,
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    title: "Frameworks",
    icon: <FaCubes className="text-2xl text-black dark:text-white" />,
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "RESTful APIs", icon: <FaCode /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-2xl text-black dark:text-white" />,
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Version Control",
    icon: <FaCodeBranch className="text-2xl text-black dark:text-white" />,
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
  {
    title: "Tools & Services",
    icon: <FaToolbox className="text-2xl text-black dark:text-white" />,
    items: [
      { name: "Stripe API", icon: <FaStripeS /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    title: "Coursework",
    icon: <FaBook className="text-2xl text-black dark:text-white" />,
    items: [
      { name: "DBMS", icon: <FaDatabase /> },
      { name: "Operating System", icon: <FaCubes /> },
      { name: "Computer Networks", icon: <FaCodeBranch /> },
      { name: "OOPs", icon: <FaCode /> },
    ],
  }

];

function Skills({ isOpen }) {
  return (
    <div style={{ paddingLeft: isOpen ? '19rem' : '0' }} className="min-h-screen bg-white dark:bg-black transition-all duration-300 pt-10">


      <div className="container max-w-6xl mx-auto py-12 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base opacity-70 mb-1">
            <span className="text-green-700 dark:text-primary text-xl font-semibold">What I Know</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-tech dark:text-white">
            <span>Skills</span>
            <span> <span className=" text-green-700 dark:text-primary  font-tech">&amp;</span></span>
            <span> Expertise</span>
          </h1>
        </motion.div>

        <div className="space-y-14">
          {skillData.map((section, index) => {
            const iconRef = useRef(null);
            const isInView = useInView(iconRef, { once: true });

            useEffect(() => {
              if (isInView && iconRef.current) {
                gsap.fromTo(
                  iconRef.current,
                  { rotateY: 0, scale: 1 },
                  {
                    rotateY: 360,
                    scale: 1.2,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    delay: index * 0.2,
                  }
                );
              }
            }, [isInView]);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-tech text-green-700 dark:text-primary mb-8 border-l-4 border-green-700 dark:border-primary pl-4 flex items-center gap-4">
                  <div ref={iconRef} className=''>{section.icon}</div>
                  {section.title}
                </h2>

                <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] w-full">
                  {section.items.map((skill, i) => (
                    <div
                      key={i}
                      className="w-full transition-opacity duration-300 ease-in-out inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3 text-base font-medium 
             bg-primary text-white dark:bg-primary/10 hover:bg-green-600 dark:hover:bg-primary/20 justify-center"
                    >
                      {skill.icon}
                      {skill.name}
                    </div>

                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>

  );
}
export default Skills
