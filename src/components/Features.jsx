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
                <div className="w-[55%] flex justify-center">
                  <motion.div variants={textVariant()}>
                      <h2 className={`${styles.sectionHeadText} text-center text-white pt-10`}>
                      How It Works?
                      </h2>
                  </motion.div>
                </div>
                {/* <div className='mt-10 flex flex-wrap justify-center gap-5'>
                    {features.map((feature, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...feature} />
                    ))}
                </div> */}
              <div className=' flex flex-row flex-wrap justify-center'>
                  <div class="w-[23%] h-[500px] text-[40px] font-normal text-white bg-transparent border-4 border-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white  text-center">
                      <button aria-current="true" type="button" class="w-full h-[25%] px-4 py-2 text-white border-b-8 border-white cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-100 hover:text-[#05668D]
                      focus:bg-white focus:text-[#05668D]">
                          FEATURE #1
                      </button>
                      <button type="button" class="w-full h-[25%] px-4 py-2 text-white border-b-4 border-white cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-100 hover:text-[#05668D]
                      focus:bg-white focus:text-[#05668D]">
                        FEATURE #2
                      </button>
                      <button type="button" class="w-full h-[25%] px-4 py-2 text-white border-b-4 border-white cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-100 hover:text-[#05668D]
                      focus:bg-white focus:text-[#05668D]">
                        FEATURE #3
                      </button>
                      <button type="button" class="w-full h-[25%] px-4 py-2 text-white border-white cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-100 hover:text-[#05668D]
                      focus:bg-white focus:text-[#05668D]">
                        FEATURE #4
                      </button>
                  </div>
                <div className="bg-transparent w-[50%] text-white min-w-[580px] border-b-4 border-r-4 border-t-4 border-white">
                  <div>
                    Hello
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default SpecSectionWrapper(Features,"features");