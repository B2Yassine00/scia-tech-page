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


    return (
        <div className="md:h-screen bg-[#05668D] bg-contain lg:bg-feature-pattern lg:bg-cover lg:bg-no-repeat mb-20 lg:mb-0">
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText} text-center text-white pt-10`}>
                How It Works?
                </h2>
            </motion.div>
            <div className="container"> 
                <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
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
            {features.map((feature, index)=>(
                <SwiperSlide>
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}>
                    <div className="div-content bg-feature-pattern flex items-center shadow-2xl">
                      <img src={feature.image} className="hidden md:flex md:w-48 object-contain" alt="slide_image" />
                      <div className="flex flex-col gap-5 items-center place-content-start p-4">  
                        <h3 className="text-white uppercase font-light text-[40px] text-center">{feature.name}</h3>
                        <p className="mt-2 text-white text-center text-[14px]">{feature.description}</p>
                      </div>              
                    </div>
                  </Tilt>
                  </SwiperSlide>
            ))}
            

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
          </div>              
        </div>
    )
}

export default SpecSectionWrapper(Features,"features");