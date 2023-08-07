import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SpecSectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#05668D",
          color: "#05668D",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #05668D" }}
        iconStyle={{ background: "#05668D", color: "#05668D" }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[100%] h-[100%] object-contain'
            />
          </div>
        }
      >
        <div className="flex justify-center items-center">
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
  
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
        <div className="h-screen bg-hero-pattern bg-center bg-cover bg-no-repeat grid grid-cols-2">
            <div className="flex items-center">
            <VerticalTimeline lineColor={"#1D455F"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
            </div>
            <div></div>
        </div>
    )
}

export default SpecSectionWrapper(Steps,"steps");