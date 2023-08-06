import { SpecSectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { features } from "../constants";
import { Tilt } from "react-tilt";

const ProjectCard = ({
    index,
    name,
    description,
    image,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-transparent border-2 border-white p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-contain rounded-2xl'
            />
  
            
          </div>
  
          <div className='mt-5'>
            <h3 className='text-white uppercase font-light text-[40px] text-center'>{name}</h3>
            <p className='mt-2 text-white text-center text-[14px]'>{description}</p>
          </div>
  
          
        </Tilt>
      </motion.div>
    );
  };

const Features = () => {


    return (
        <div className="md:h-screen bg-[#05668D] bg-contain lg:bg-feature-pattern lg:bg-cover lg:bg-no-repeat mb-20 lg:mb-0">
            <div className="">
                    <div className="">
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionHeadText} text-center text-white pt-10`}>
                    How It Works?
                    </h2>
                </motion.div>
                </div>
                <div className='mt-10 flex flex-wrap justify-center gap-5'>
                    {features.map((feature, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpecSectionWrapper(Features,"features");