import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import AboutMe from "./Pages/AboutMe"
import Experience from './Pages/Experience';
import Resume from './Pages/Resume';
import Updates from './Pages/Updates';
import Contact from './Pages/Contact';
import Projects from "./Pages/Projects"
import { Toaster } from 'sonner';
function App() {
    const [isOpen, setIsOpen] = useState(true);
    return (
       
        <div className="flex overflow-x-hidden">
            <Toaster richColors position="top-right" />
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<AboutMe isOpen={isOpen} />} />
                    <Route path="/education" element={<Education isOpen={isOpen} />} />
                    <Route path="/skills" element={<Skills isOpen={isOpen} />} />
                    <Route path="/experience" element={<Experience isOpen={isOpen} />} />
                    <Route path="/resume" element={<Resume isOpen={isOpen}/>} />
                    {/* <Route path="/updates" element={<Updates />} /> */}
                    <Route path="/contact" element={<Contact isOpen={isOpen} />} />
                    <Route path="/projects" element={<Projects isOpen={isOpen}/>} />

                </Routes>
            </div>
        </div>

    );
}

export default App;
