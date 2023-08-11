import { SpecSectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { features } from "../constants";
import { Tilt } from "react-tilt";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Features = () => {
  const firstFourFeatures = features.slice(0, 4);

  return (
    <div className=" h-screen bg-[#01425c] bg-contain lg:bg-feature-pattern lg:bg-cover lg:bg-no-repeat lg:mb-0">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          <p className="pt-14">How It Works?</p>
        </h2>
      </motion.div>
      <div className="container"> 
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <Swiper
            slidesPerView={1}
            navigation
            loop={true}
          >
            {firstFourFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                >
                  <div className="div-content border-white bg-[#05668D] flex items-center shadow-lg shadow-[#084b66]">
                    <img
                      src={feature.image}
                      className="hidden md:flex md:w-48 object-contain"
                      alt="slide_image"
                    />
                    <div className="flex flex-col gap-5 items-center place-content-start p-4">
                      <h3 className="featureName text-white uppercase font-light text-[40px] text-center">
                        {feature.name}
                      </h3>
                      <p className="featureDesc mt-2 text-white text-center text-[14px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
          <br />
          <br />
          <div className="slider-controler">
            {/* Left Arrow */}
            <div className="swiper-button-prev slider-arrow">
              <img src="/src/assets/left-arrow.png" alt="Left Arrow" />
            </div>

            {/* Right Arrow */}
            <div className="swiper-button-next slider-arrow">
              <img src="/src/assets/right-arrow.png" alt="Right Arrow" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>   
      {/* Small text for swipe instruction */}
      <p className="text-white text-center md:hidden">
        Swipe with your finger to see more features
      </p>           
    </div>
  );
};

export default SpecSectionWrapper(Features,"features");
