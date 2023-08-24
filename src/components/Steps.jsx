import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SpecSectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import arrow from "../assets/Arrow-Down.gif";
import mobile from "/src/assets/mockupphone.svg";
import app_store from "/src/assets/app_store.svg";
import play_store from "/src/assets/play_store.svg";
import React, { useState } from 'react';


function ExperienceAccordion({ experience, playstore, appstore }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col rounded-lg" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <h3 className="text-white text-25px p-0 m-0">
        {experience.title}
      </h3>
      {experience.title === "Download" && !isHovered && (
        <div className="tooltip text-black">
          <img src={arrow} alt="Arrow Icon" width="50rem"/>
        </div>
      )}
      {experience.title === "Download" && isHovered && (
        <div className="grid grid-cols-12">
          <div className="col-span-6 p-4 text-white flex items-center">
            <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">
              <img src={playstore} width="30rem" alt="Play Store"/>
            </a>
          </div>
          <div className="col-span-6 p-4 flex items-center">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appstore} width="30rem" alt="App Store"/>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#05668D",
        color: "#FFFFFF", 
        paddingLeft: "2rem", 
        paddingRight: "2rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        borderRadius: "3rem",
      }}
      contentArrowStyle={{ borderRight: "0px solid  #05668D", paddingTop: "0.5rem"}}
      iconStyle={{ background: "#05668D", color: "#05668D" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
    <ExperienceAccordion experience={experience} playstore={playstore} appstore={appstore} />

      {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  );
};

const Steps = () => {

  return (
    <div className="h-screen bg-hero-pattern bg-center bg-cover bg-no-repeat flex items-end justify-center">
      
      <div className="flex justify-center h-full">
        <div className="justify-center timeline flex flex-col md:place-content-center items-center ml-20">
          <div>
            <p className="font-extrabold text-[1.05rem] md:text-[32px] text-[#05668D]">COMPLETE YOUR JOURNEY BY</p>
            <p className="font-extrabold text-[2.10rem] md:text-[75px] leading-snug">Following three <br /> Simple Steps</p>
            <p className="font-light text-[0.70rem] md:text-[28px] mt-4">Download, Register, Experience: Your Journey <br /> to Our App in Three Simple Steps!</p>
          </div>
          <div className="md:flex mt-4 gap-6">
            <button className="bg-[#05668D] border-4 border-transparent hover:border-[#05668D] hover:bg-white hover:text-[#05668D] mt-4 items-center justify-center flex gap-5 text-white font-semibold text-[26px] px-12 md:px-10 py-4 rounded-[150px] text-center hover:svg-fill-[#05668D]">
              Download
              <img src={play_store} alt="" />
            </button>
            <button className="bg-[#05668D] border-4 border-transparent hover:border-[#05668D] hover:bg-white hover:text-[#05668D] mt-4 items-center justify-center flex gap-5 text-white font-semibold text-[26px] px-12 md:px-10 py-4 rounded-[150px] text-center hover:svg-fill-[#05668D]">
              Download
              <img src={app_store} alt="" />
            </button>
          </div>
        </div>
        <motion.div variants={fadeIn("top", "", 0.1, 2)} className="h-full phone lg:col-span-3 hidden lg:block">
          <div className="mt-0 h-full flex items-end">
            <img src={mobile} className=" imageC h-5 lg:h-[12%] mb-2" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecSectionWrapper(Steps, "steps");
