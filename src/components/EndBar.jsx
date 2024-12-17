import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Icons for social media

// Animation variants (optional)
const fadeIn = (direction = '', type = '', delay = 0.1, duration = 1) => ({
  hidden: {
    opacity: 0,
    x: direction === 'right' ? 50 : -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration, type },
  },
});

const EndBar = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.2, 1)}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-10"
    >
      <div className="max-w-screen-xl mx-auto flex lg:flex-row items-center justify-between text-white">
        {/* Left side: Details about you */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold">Praveen Ramakrushnan</h2>
          <p className="text-lg mt-2">Software Engineering Undergraduate</p>
          <p className="text-lg mt-2">BICT (Hons) | University of Ruhuna</p>
          <p className="mt-1 ">© 2024 All rights reserved by Praveen Ramakrushnan</p>
        </div>

        {/* Right side: Social links */}
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a
            href="https://github.com/PraveenRamakrushnan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-200 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-ramakrushnan-62041a27a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-200 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/paveeen_ram/profilecard/?igsh=MWF3Mnh4ZHJocjZ1YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-200 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EndBar;
