import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState } from "react";
import { about, slides } from "../constants";
import { EarthCanvas } from "./canvas";

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="h-screen pt-0">
                <div className="flex flex-col lg:grid gap-12 lg:grid-cols-2">
                    <div className="">
                        <motion.div variants={textVariant()}>
                            <h2 className={styles.sectionHeadText}>{about.big_title}</h2>
                        </motion.div>

                        <motion.p
                            variants={fadeIn("", "", 0.1, 1)}
                            className='mt-4 text-[#05668D] font-extralight text-[18px] md:text-[18px] max-w-3xl leading-normal text-justify text-align'>
                            {about.description}
                        </motion.p>
                    </div>
                    <div className="hidden lg:flex w-[100%] h-[540px]">
                        <EarthCanvas />
                        {/*<div className=' max-w-[1000px] min-h-[400px] h-full w-[100%] -mt-10 m-auto px-20 relative group'>
                            <div
                                style={{ backgroundImage: `url(${slides[currentIndex].url}` }}
                                className='w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500'
                            ></div>
                            
                            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#05668D] text-white cursor-pointer'>
                                <BsChevronCompactLeft onClick={prevSlide} size={30} />
                            </div>

                            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#05668D] text-white cursor-pointer'>
                                <BsChevronCompactRight onClick={nextSlide} size={30} />

                            </div>
                            <div className='flex top-4 justify-center py-2'>
                                {slides.map((slide, slideIndex) => (
                                    <div
                                        key={slideIndex}
                                        onClick={() => goToSlide(slideIndex)}
                                        className='text-2xl cursor-pointer'
                                    >
                                        <RxDotFilled />
                                    </div>
                                ))}
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");
