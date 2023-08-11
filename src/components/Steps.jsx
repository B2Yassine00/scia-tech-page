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

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#05668D",
        color: "#FFFFFF", 
        paddingLeft: "2rem", 
        paddingRight: "2rem",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem"
      }}
      contentArrowStyle={{ borderRight: "3px solid  #05668D" }}
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
      <div className="flex justify-center items-center flex-col"> 
        <h3 className='text-white text-[25px]'> 
          {experience.title}
        </h3>
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
    <div className="h-screen bg-hero-pattern bg-center bg-cover bg-no-repeat">
      <h2 className={`${styles.sectionHeadText} text-center text-[1D455F] pt-10`}>
        Next Steps?
      </h2>
      <br />
      <div className="flex justify-center lg:grid lg:grid-cols-12">
        <div className="flex justify-center timeline md:col-span-9 flex items-center ml-20">
          <VerticalTimeline lineColor={"#1D455F"}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
        <motion.div variants={fadeIn("top", "", 0.1, 2)} className="phone lg:col-span-3 hidden lg:block">
          <div className="mt-0">
            <img src="/src/assets/mobile-hand.png" className=" imageC h-5 lg:h-[13%] pt-10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecSectionWrapper(Steps, "steps");
