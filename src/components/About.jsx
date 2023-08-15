import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState } from "react";
import { about, slides } from "../constants";

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
            <div className="h-screen">
                <div className="flex flex-col lg:grid lg:grid-cols-2">
                    <div className="">
                        <motion.div variants={textVariant()}>
                            <h2 className={styles.sectionHeadText}>{about.big_title}</h2>
                        </motion.div>

                        <motion.p
                            variants={fadeIn("", "", 0.1, 1)}
                            className='mt-4 text-[#05668D] font-light text-left text-[14px] md:text-[32px] max-w-3xl leading-tight'>
                                {about.description}
                        </motion.p>
                    </div>
                    <div className="hidden lg:flex">
                        <div className='max-w-[800px] h-full w-[80%] m-auto py-16 px-4 relative group'>
                            <div
                                style={{ backgroundImage: `url(${slides[currentIndex].url}` }}
                                className='w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500'
                            ></div>
                            {/* Left Arrow */}
                            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                <BsChevronCompactLeft onClick={prevSlide} size={30} />
                            </div>
                            {/* Right Arrow */}
                            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                <BsChevronCompactRight onClick={nextSlide} size={30} color="#05668D" />
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");