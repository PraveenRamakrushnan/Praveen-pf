import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

import { profile } from '../assets';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index,
          0.75)}
          className="w-full green-pink-gradient
          p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450,
          }}
          className="bg-teritary reounded-[20px]
          py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-start gap-10">
      <motion.div className="flex-1">
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-2 text-secondary text-[17px]
        max-w-3xl leading-[30px] text-justify mb-4'
      >
        
Hi, I'm R. Praveen, a final-year Bachelor of ICT (BICT) student at the University of Ruhuna. 
I'm deeply passionate about leveraging technology to address real-world challenges, with expertise in programming languages like Java and Python, 
and web development frameworks such as React, Spring Boot, and Laravel. I excel in collaborative environments and bring strong problem-solving and 
adaptability skills to every project. With a keen interest in AI, image processing, and full-stack development, 
I’m committed to learning, innovating, and contributing to meaningful projects that create a lasting impact.
      </motion.p>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "spring", 0.2, 1)}
        className="flex-2 flex justify-center items-center mb-6 lg:mb-0"
      >
        <img
          src={ profile } 
          alt="About Me"
          className="w-full lg:w-[300px] h-auto object-cover rounded-3xl shadow-lg"
        />
      </motion.div>
    </div>

      <div className="mt-22 flex  justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")