import React from 'react';
import axios from 'axios';
import {toast} from 'sonner';
import { Github, Linkedin, Instagram } from 'lucide-react';
function Contact({ isOpen }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await axios.post("https://anshikaportfolio.onrender.com/contact", formData);
      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      console.error("Error submitting form:", err);
      const errorMessage = err.response?.data?.error || "Something went wrong!";
      toast.error(`Failed: ${errorMessage}`);
    }
  };

  return (
    <div
      style={{ paddingLeft: isOpen ? '19rem' : '0' }}
      className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-300 pt-10"
    >    <div className="container max-w-5xl mx-auto py-12 ">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base opacity-70 mb-1">
            <span className="text-green-700 dark:text-primary">Get in Touch</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-tech">
            Contact <span className="text-green-700 dark:text-primary">Me</span>
          </h1>
          <p className="text-lg mt-3 opacity-80 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-tech text-green-700 dark:text-primary mb-6">Contact Information</h2>
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:anshikamittal.2608@gmail.com@gmail.com"
                  className="flex items-start hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-1 mr-3">
                    <svg
                      className="lucide lucide-mail w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      anshikamittal.2608@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919528884767"
                  className="flex items-start hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-1 mr-3">
                    <svg
                      className="lucide lucide-phone w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.15.95.41 1.88.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.93.29 1.86.55 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">+91 9528884767</p>
                  </div>
                </a>

                {/* Location */}
                <a
                  className="flex items-start hover:text-green-700 dark:hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-1 mr-3">
                    <svg
                      className="lucide lucide-map-pin w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      Firozabad, Uttar Pradesh, India
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-tech text-green-700 dark:text-primary mb-6">Connect with Me</h2>
              <div className="flex flex-wrap gap-4 text-white">
                {/* GitHub */}
                <a
                  href="https://github.com/Anshika2608"
                  className="w-10 h-10 bg-gray-200 text-black dark:bg-charcoal dark:text-white flex items-center justify-center rounded-full 
             hover:bg-black hover:text-white dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/anshika-mittal-b976791a4"
                  className="w-10 h-10 bg-gray-200 text-black dark:bg-charcoal dark:text-white flex items-center justify-center rounded-full 
             hover:bg-black hover:text-white dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/anshimit/"
                  className="w-10 h-10 bg-gray-200 text-black dark:bg-charcoal dark:text-white flex items-center justify-center rounded-full 
             hover:bg-black hover:text-white dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    className="w-5 h-5"
                  />
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/i_.anshika26"
                  className="w-10 h-10 bg-gray-200 text-black dark:bg-charcoal dark:text-white flex items-center justify-center rounded-full 
             hover:bg-black hover:text-white dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-tech text-green-700 dark:text-primary mb-4">Availability</h2>
              <p className="text-gray-700 dark:text-gray-400 mb-2">
                Currently available for Internship opportunities.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-700 dark:bg-primary rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-tech text-green-700 dark:text-primary mb-6">Send Me a Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 h-10 text-sm font-medium transition-colors text-black"
                >
                  Send Message
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
