import React from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
function Education({ isOpen }) {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });
  const btechLineControls = useAnimation();
  const interLineControls = useAnimation();
  const btechCardControls = useAnimation();
  const interCardControls = useAnimation();
  const certRef = useRef(null);
  const certInView = useInView(certRef, { once: true });
  const certControls = useAnimation();

  useEffect(() => {
    if (certInView) {
      certControls.start("visible");
    }
  }, [certInView]);

  useEffect(() => {
    if (isInView) {

      btechLineControls.start({ height: "100%", transition: { duration: 1 } });
      btechCardControls.start({ opacity: 1, y: 0 });
      setTimeout(() => {
        interLineControls.start({ height: "100%", transition: { duration: 1 } });
        interCardControls.start({ opacity: 1, y: 0 });
      }, 1000);
    }
  }, [isInView]);
  return (
    <div style={{ paddingLeft: isOpen ? '19rem' : '0' }} className="min-h-screen bg-white dark:bg-black transition-all duration-300 pt-10 ">
      <div className="container max-w-5xl mx-auto py-12 px-8 md:px-2 lg:px-0">

        <div className="text-center mb-12">
          <p className="text-sm md:text-base opacity-70 mb-1">
            <span className=" text-green-700 dark:text-primary text-xl font-semibold">Learning Journey</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-tech dark:text-white">
            <span>Education</span>
            <span> <span className=" text-green-700 dark:text-primary  font-tech">&amp;</span></span>
            <span> Certifications</span>
          </h1>
        </div>


        <div className="mb-16">
          <h2 className="text-3xl font-tech text-green-700  dark:text-primary mb-8 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-graduation-cap mr-2"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
              <path d="M22 10v6"></path>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>
            Formal Education
          </h2>
          <div className="relative pl-8 mb-16" ref={lineRef}>
            <motion.div
              initial={{ height: 0 }}
              animate={btechLineControls}
              className="absolute left-[8px] -translate-x-1/2 top-0 w-0.5 bg-gray-400 h-full z-0"
            />
            <div className="absolute left-[8px] -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-green-700 dark:bg-primary z-10"></div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={btechCardControls}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-lg p-6 shadow-md border border-border relative z-10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold  dark:text-white">Bachelor of Technology</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">Ajay Kumar Garg Engineering College, Ghaziabad, India</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-1" />
                  2022 - 2026
                </div>
              </div>
              <p className="mb-4 dark:text-white">Computer Science and Engineering</p>
              <div>
                <h4 className="text-lg mb-2 dark:text-white">Key Achievements:</h4>
                <ul className="list-disc list-inside text-base space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Maintained a GPA of 8.9 till 5th semester</li>
                  <li>Developed multiple academic projects involving full-stack development</li>
                  <li>Received faculty commendation for academic excellence</li>
                  <li>Shortlisted twice in SIH internal Hackathon</li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="relative pl-8">
            <motion.div
              initial={{ height: 0 }}
              animate={interLineControls}
              className="absolute left-[8px] -translate-x-1/2 top-0 w-0.5 bg-gray-400  h-full z-0"
            />
            <div className="absolute left-[8px] -translate-x-1/2 top-0 w-4 h-4 rounded-full  bg-green-700 dark:bg-primary z-10"></div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={interCardControls}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-lg p-6 shadow-md border border-border relative z-10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold dark:text-white ">Intermediate</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">St. John's School, Firozabad, India</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calendar w-4 h-4 mr-1"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  2020 - 2021
                </div>
              </div>
              <div>
                <h4 className="text- mb-2 dark:text-white">Key Achievements:</h4>
                <ul className="list-disc list-inside text-base space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Secured 95%</li>
                  <li>Led peer study groups and assisted classmates with exam preparation</li>
                  <li>Ranked among the top 5 students in the batch</li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-tech text-green-700 dark:text-primary mb-8 flex items-center mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award mr-2"
              >
                <circle cx="12" cy="8" r="6"></circle>
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              </svg>
              Professional Certifications
            </h2>
            <div ref={certRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "CSS Certification",
                  org: "HackerRank",
                  year: "2024",
                  skills: ["CSS", "Frontend Development", "Web development"],
                  url: "https://drive.google.com/file/d/1YIee1EKU19BaNeTon8BVkauvA7hgR_ht/view?usp=sharing"
                },
                {
                  title: "React.js Certification",
                  org: "HackerRank",
                  year: "2024",
                  skills: ["JavaScript", "React.js", "Web Development", "Frontend Development"],
                  url: "https://drive.google.com/file/d/1YJjanSaQVBEXzapwvM8JUz4ToFiKuOmH/view?usp=sharing"
                }
              ].map(({ title, org, year, skills, url }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: -50 }}
                  animate={certControls}
                  variants={{
                    visible: (i = 1) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.2,
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    })
                  }}
                  custom={index}
                  className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border dark:text-white"
                >
                  <div className="mb-4 pb-4 border-b border-border">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{org}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Issued:</span>
                      <span>{year}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="text-sm font-medium mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5  bg-gray-200 dark:bg-charcoal text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-4">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                      title="View Credential"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link w-5 h-5"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Education;



