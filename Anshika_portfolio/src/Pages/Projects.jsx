import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import weefashion from "../assets/weefashion.png"
import shortify from "../assets/shortify.png"
import headBall from "../assets/headBall.png"
import portfolio from "../assets/portfolio.png"
import { Github } from 'lucide-react';
const projectData = [
  {
    name: "Weefashion ",
    image: weefashion,
    description:
      "A full-featured MERN e-commerce website with user authentication, cart, wishlist, order tracking, and admin panel for managing products and orders.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    github: "https://github.com/Anshika2608/weefashion_shopping",
    live: "https://weefashion-shopping-frontend.onrender.com",
  },
  {
    name: "Shortify",
    description: "A minimal and fast URL shortener built using the MERN stack. Users can shorten long URLs, track click stats, and manage their links through a dashboard.",
    image: shortify,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Anshika2608/Url_shortener",
    live: "https://shortify-opal-five.vercel.app"
  },
  {
    name: "Head Ball",
    description: "A two-player headball game built using HTML, CSS, and JavaScript. Players can control movement (left, right, jump, crouch) and compete to hit the ball using their heads.",
    image: headBall,
    technologies: ["HTML", "CSS", "javaScript"],
    github: "https://github.com/Anshika2608/game_animation",
    live: "https://game-animation-rho.vercel.app"
  },

  // {
  //   name: "Appointment Booking System",
  //   image: "/images/appointment.png",
  //   description: "A real-time appointment booking app with admin panel and notification system.",
  //   technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "JWT"],
  //   github: "https://github.com/yourusername/appointment-app",
  //   live: "https://appointment-app.vercel.app",
  // },

  // {
  //   name: "Movie Booking System",
  //   image: "/images/movie-booking.png",
  //   description: "A cinema ticket booking platform with QR ticket generation and seat layout.",
  //   technologies: ["React", "Node", "Express", "MongoDB", "Cloudinary"],
  //   github: "https://github.com/yourusername/movie-booking",
  //   live: "https://movie-booking.vercel.app",
  // },
  {
    name: "Portfolio",
    image: portfolio,
    description: "My personal developer portfolio showcasing projects, skills, and contact info.",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Anshika2608/anshikaPortfolio",
    live: "https://anshika-portfolio-seven.vercel.app",
  },
];

function Projects({ isOpen }) {
  return (
    <div
      style={{ paddingLeft: isOpen ? '19rem' : '0' }}
      className="min-h-screen bg-white dark:bg-black transition-all duration-300 pt-10"
    >
      <div className="container max-w-6xl mx-auto py-12 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base opacity-70 mb-1">
            <span className="text-primary text-xl font-semibold">Showcasing</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-tech text-white">
            Projects
          </h1>
        </motion.div>     
        <div className="grid gap-10 md:grid-cols-2">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-md w-full max-w-[430px] mx-auto "
            >

              <motion.div
                className="overflow-hidden rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-green-400 font-tech mb-2">{project.name}</h2>
                <p className="text-gray-400 text-base font-semibold mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-charcoal text-white text-sm h-6 font-semibold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-charcoal flex items-center justify-center text-white rounded-full hover:bg-green-950  transition-colors"
                  >
                    <Github />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-charcoal flex items-center justify-center text-white rounded-full hover:bg-green-950  transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
