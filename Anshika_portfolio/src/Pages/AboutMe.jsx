import React from 'react'
import logo1 from "../assets/Anshika's imag.jpg"
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import {
  Pencil,
  Code2,
  LineChart,
  Mic,
} from 'lucide-react';
function AboutMe({ isOpen }) {
  return (
  <div style={{ paddingLeft: isOpen ? '19rem' : '0' }} className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white transition-all duration-300 pt-10">
      <div className="container max-w-5xl mx-auto py-12">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base opacity-70 mb-1">
            <span className="text-green-700 dark:text-green-400 text-xl font-semibold">Hello...</span>
          </p>
          <TypeAnimation
            sequence={[
              'A little bit about me...',
            ]}
            wrapper="h1"
            speed={200}
            repeat={0}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-tech text-neutral-900 dark:text-white"

          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-16">
          <div className="flex justify-center mt-20">
            <img
              src={logo1}
              alt="Anshika"
              className="w-48 h-48 object-cover rounded-lg shadow-md md:w-56 md:h-56"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <span className="bg-green-200 text-green-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wide w-fit mx-auto md:mx-0">
                Full Stack Developer | Computer Science Student
              </span>
              <div className="flex flex-col items-center md:items-end text-gray-400 text-sm space-y-1">
                <div className="flex items-center gap-1">
                  📍 <span>Uttar Pradesh, India</span>
                </div>
                <a
                  href="mailto:anshikamittal.2608@gmail.com"
                  className="hover:text-green-400 transition-colors"
                >
                  anshikamittal.2608@gmail.com
                </a>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-lg space-y-4 text-gray-800 dark:text-gray-50 text-lg">
              <p>
                I am a passionate MERN stack developer skilled in JavaScript,
                React, Node.js, and MongoDB, focused on building dynamic and
                scalable web applications.
              </p>
              <p>
                With over 100 problems solved on LeetCode, I have strengthened
                my problem-solving abilities, ensuring efficient solutions to
                complex challenges.
              </p>
              <p>
                I am also deeply enthusiastic about AI/ML, consistently
                expanding my knowledge and integrating intelligent models into
                applications to enhance functionality.
              </p>
              <p>I look forward to collaborating with you!</p>
            </div>
          </div>
        </div>

        <div className='px-4 sm:px-0'>
          <h2 className="text-2xl font-tech text-green-700 dark:text-green-400 border-l-4 border-primary pl-4 mb-8">
            Personal interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {[
              {
                title: 'Drawing',
                icon: <Pencil className="h-8 w-8 text-green-700 dark:text-green-500" />,
                desc: 'Sketching and creating art to express my creativity.',
              },
              {
                title: 'Coding challenges',
                icon: <Code2 className="h-8 w-8 text-green-700 dark:text-green-500" />,
                desc: 'Solving algorithmic problems to sharpen my programming skills.',
              },
              {
                title: 'Investing',
                icon: <LineChart className="h-8 w-8 text-green-700 dark:text-green-500" />,
                desc: 'Learning the basics of stocks and personal finance.',
              },
              {
                title: 'Podcasts & Audio Learning',
                icon: <Mic className="h-8 w-8 text-green-700 dark:text-green-500" />,
                desc: 'Love tech podcasts—learns startups, AI, and dev journeys while commuting.',
              },
            ].map(({ title, icon, desc }, index) => {
              const controls = useAnimation();
              const [ref, inView] = useInView({ triggerOnce: true });

              useEffect(() => {
                if (inView) {
                  controls.start('visible');
                }
              }, [controls, inView]);

              return (
                <motion.div
                  key={title}
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="rounded-lg border border-gray-400 shadow-sm  backdrop-blur-sm  hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 flex items-center gap-4">
                    <div className="bg-green-600/10 p-3 rounded-full">{icon}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-black dark:text-white">{title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

