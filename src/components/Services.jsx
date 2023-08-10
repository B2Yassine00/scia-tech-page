import { motion } from "framer-motion";
import { styles } from "../styles";
import { SpecSectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";

const ServiceCard = ({ index, title, icon, description }) => (
    <Tilt className='xs:w-[450px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full bg-transparent p-[1px] rounded-[60px] shadow-2xl'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-white rounded-[60px] py-12 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-[6rem] h-[6rem] object-contain'
          />
  
          <h3 className='text-[#05668D] text-[20px] mt-8 font-bold text-center'>
            {title}
          </h3>

          <h3 className='text-[#05668D] text-[20px] mt-8 font-normal text-center w-[120%] pl-8 pr-8 text-justify text-interword'>
            {description}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  );

const Services = () => {
    return (
        <div className="md:h-screen bg-white lg:bg-services-pattern bg-contain md:bg-cover mb-20 lg:mb-0 pt-36 ml-6 mr-6 ">
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText} text-center pt-4 mt-10`}>
                  What We Offer?
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap justify-center gap-10'>
                {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    )
}

export default SpecSectionWrapper(Services,"services");