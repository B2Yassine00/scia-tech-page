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
            <button className="bg-[#05668D] border-4 border-transparent hover:border-[#05668D] hover:bg-white hover:text-[#05668D] mt-4 items-center justify-center flex gap-5 text-white font-semibold text-[26px] px-12 md:px-10 py-2 md:py-4 rounded-[150px] text-center hover:svg-fill-[#05668D] transition-all ease-out duration-300">
              Download
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_356_1307)">
              <path d="M0.815469 1.97309C0.341797 2.59903 0.078125 3.36903 0.078125 4.19301V36.8065C0.078125 37.5719 0.306406 38.2909 0.71875 38.8915L18.4641 20.3819L0.815469 1.97309ZM20.0888 18.687L25.8456 12.6823L5.60969 0.99942C4.73156 0.492076 3.72383 0.371842 2.78359 0.636138L20.0888 18.687ZM20.0888 22.0766L2.60859 40.3096C2.98147 40.4354 3.37233 40.4997 3.76586 40.5C4.39914 40.5 5.03266 40.3334 5.60977 40.0002L25.9912 28.2329L20.0888 22.0766ZM33.8538 17.3061L27.9377 13.8903L21.7139 20.3817L28.0829 27.0253L33.8538 23.6934C35.0085 23.0269 35.698 21.8328 35.698 20.4997C35.698 19.1665 35.0085 17.9725 33.8538 17.3061Z" fill="currentColor"/>
              </g>
              <defs>
              <clipPath id="clip0_356_1307">
              <rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
              </defs>
              </svg>
            </button>
            <button className="bg-[#05668D] border-4 border-transparent hover:border-[#05668D] hover:bg-white hover:text-[#05668D] mt-4 items-center justify-center flex gap-5 text-white font-semibold text-[26px] px-12 md:px-10 py-2 md:py-4 rounded-[150px] text-center hover:svg-fill-[#05668D] svg-fill-white transition-all ease-out duration-300">
              Download
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_356_1315)">
              <path d="M31.7969 0.5H8.20312C3.67992 0.5 0 4.17992 0 8.70312V32.2969C0 36.8201 3.67992 40.5 8.20312 40.5H31.7969C36.3201 40.5 40 36.8201 40 32.2969V8.70312C40 4.17992 36.3201 0.5 31.7969 0.5ZM12.3163 31.3215C11.955 31.9473 11.2971 32.2976 10.6216 32.2977C10.2798 32.2978 9.94405 32.2076 9.64828 32.0364C8.71562 31.498 8.39492 30.3011 8.93336 29.3684L9.3175 28.7031H13.828L12.3163 31.3215ZM8.63281 27.1406C7.55586 27.1406 6.67969 26.2645 6.67969 25.1875C6.67969 24.1105 7.55586 23.2344 8.63281 23.2344H12.4748L17.7447 14.1067L16.3165 11.633C15.778 10.7003 16.0987 9.50344 17.0313 8.96492C17.964 8.42648 19.1609 8.74727 19.6994 9.67984L20 10.2005L20.3006 9.67992C20.8393 8.74719 22.0362 8.42656 22.9686 8.965C23.4204 9.22586 23.7436 9.64703 23.8786 10.1509C24.0137 10.6548 23.9443 11.1813 23.6834 11.633L16.9854 23.2344H21.2103L23.4656 27.1406H8.63281ZM31.3672 27.1406H29.7804L31.0666 29.3684C31.6051 30.3009 31.2844 31.4978 30.3518 32.0363C30.0508 32.2101 29.7167 32.2989 29.3783 32.2989C29.2086 32.2989 29.038 32.2766 28.8696 32.2315C28.3656 32.0964 27.9445 31.7732 27.6836 31.3213L20.902 19.5754L23.1573 15.6691L27.5252 23.2344H31.3672C32.4441 23.2344 33.3203 24.1105 33.3203 25.1875C33.3203 26.2645 32.4441 27.1406 31.3672 27.1406Z" fill="currentColor"/>
              </g>
              <defs>
              <clipPath id="clip0_356_1315">
              <rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
              </defs>
              </svg>
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
