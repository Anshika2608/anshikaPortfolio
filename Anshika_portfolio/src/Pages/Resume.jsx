import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Resume({ isOpen }) {
  return (
    <div
      style={{ paddingLeft: isOpen ? '19rem' : '0' }}
      className="min-h-screen bg-white dark:bg-black transition-all duration-300 pt-10"
    >
      <div className="container max-w-5xl mx-auto py-12 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm md:text-base opacity-70 mb-1">
            <span className="text-green-700 dark:text-primary text-xl font-semibold">My Journey</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-tech dark:text-white">
            Resume
          </h1>
        </motion.div>

        
        <div className="w-full border rounded-lg overflow-hidden shadow-md mb-8">
          <object
            data="/resume_anshika_mittal.pdf"
            type="application/pdf"
            width="100%"
            height="1200px"
            className="rounded-lg"
          >
            <p className="text-white">
              Your browser doesn't support PDF viewing.
              <a href="/resume_anshika_mittal.pdf" target="_blank" className="text-primary underline">Download PDF</a>.
            </p>
          </object>
        </div>
        <div className="text-center">
          <a href="/resume_anshika_mittal.pdf" download="" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80 transition-colors">
            Download Resume (PDF)
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-down w-5 h-5">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M12 18v-6"></path>
              <path d="m9 15 3 3 3-3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;