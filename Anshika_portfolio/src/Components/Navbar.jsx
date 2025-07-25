import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    FaUser,
    FaGraduationCap,
    FaBell,
    FaTools,
    FaProjectDiagram,
    FaBriefcase,
    FaFileAlt,
    FaEnvelope,

} from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { LuPanelLeftOpen } from "react-icons/lu";
import logo from "../assets/Anshika's.png"

function Navbar({ isOpen, setIsOpen }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const listItems = [
        { "title": "About me", "icon": <FaUser />, "path": "/" },
        { "title": "Education", "icon": <FaGraduationCap />, "path": "/education" },
        { "title": "Experience", "icon": <FaBriefcase />, "path": "/experience" },
        { "title": "Skills", "icon": <FaTools />, "path": "/skills" },
        { "title": "Projects", "icon": <FaProjectDiagram />, "path": "/projects" },
        // { "title": "Updates", "icon": <FaBell />, "path": "/updates" },
        { "title": "Resume", "icon": <FaFileAlt />, "path": "/resume" },
        { "title": "Contact", "icon": <FaEnvelope />, "path": "/contact" },
    ]
    return (

        <>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className='fixed top-4 left-4 z-100 text-white bg-black p-2 rounded-full hover:bg-gray-800 cursor-pointer'
            >
                <LuPanelLeftOpen size={22} />
            </button>
          <div
        className={`fixed z-50 top-0 left-0 bg-white dark:bg-black w-80 sm:w-60 min-h-screen transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-gray-200 dark:border-gray-700`}
      >
                <div className='flex flex-col items-center justify-center px-8  pt-12 '>
                    <img src={logo} alt="image" className='rounded-full h-36 w-36 border-4 border-green-600' />
                    <h1 className=' text-green-400 dark:text-white text-xl font-semibold mt-3 font-tech'>Anshika mittal</h1>
                    <h2 className='text-gray-700 dark:text-gray-300 '>Full Stack Developer</h2>
                    <button
                        onClick={toggleTheme}
                        className="mt-4 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition cursor-pointer"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>

                </div>
                <hr className="w-full  border-t border-gray-700  mt-3" />
                <ul className='flex flex-col px-6 mt-4'>
                    {
                        listItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    className=" flex gap-5 text-black dark:text-white text-base cursor-pointer hover:text-white hover:bg-gray-700  p-2  rounded-xl w-50"
                                    to={item.path}
                                >
                                    <span className='mt-1'>{item.icon}</span>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>




        </>
    )
}

export default Navbar