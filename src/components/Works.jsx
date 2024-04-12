import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  Links
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      > 
       {
       /*
       <img src={github}
            alt='source code'
            className='w-1/2 h-1/2 object-contain'
              />
        */
       } 

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3> 
          <p className='mt-2 text-secondary text-[15px]'>{description}</p>
        </div>

        <div className='mt-4 flex items-center'>
        <span className='text-customPurple text-[17px] mr-24'>Git Links:</span>
        <img src={github}
            alt='source code'
            className='w-1/6 h-1/2 object-contain'
        />
         </div>


         <div className='mt-4'>
        {Object.keys(Links).map((key) => (
          <div key={key}>
            <a href={Links[key]} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 block">{key}</a>
          </div>
        ))}
      </div>




        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );  
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        className='mt-3 text-customGray text-[18px] max-w-3xl leading-[30px]'
      >
        This curated selection of projects from my university tenure and personal endeavors demonstrates my proficiency in tackling complex technical challenges and managing diverse technologies. Each featured project, a testament to my hands-on experience and problem-solving capabilities, is detailed with links to code repositories and live demos where applicable. For a broader perspective on my work, feel free to explore additional projects on
        {' '}
        <Link to="https://github.com/Ibrahim-krimi" className="text-blue-500 hover:text-blue-700">my GitHub profile</Link>.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "Projects");
