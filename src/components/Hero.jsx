import { SectionWrapper, SpecSectionWrapper } from "../hoc";
import footHero from "/src/assets/footHero.png";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { home } from "../constants";
import foot from "../assets/footHero.png";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start`}>
                <div className="grid lg:grid-cols-2 lg:overflow-visible">
                    <div className="lg:w-[130%] text-center lg:text-left">
                        <h1 className="text-[3rem] md:text-[4rem] pr-4 leading-tight font-extrabold text-[#142F48]">{home.first_text}</h1>
                        <h3 className="mt-4 text-[1.5rem] font-bold text-[#142F48]">{home.second_text}</h3>
                        <h3 className=" text-[1.5rem] font-bold text-[#142F48]">{home.third_text}</h3>
                        <div className="flex justify-center lg:block">
                        
                        <a href="#steps">
                          <br />
                          <button className="bg-[#05668D] border-4 border-transparent hover:border-[#05668D] hover:bg-white hover:text-[#05668D] mt-4 items-center flex gap-5 text-white font-semibold text-2xl pl-10 py-2 pr-5 rounded-[150px] text-center hover:svg-fill-[#05668D]">
                            Get Started
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M20 0.728241C8.97164 0.728241 0 9.69988 0 20.7282C0 31.7566 8.97164 40.7282 20 40.7282C31.0284 40.7282 40 31.7566 40 20.7282C40 9.69988 31.0284 0.728241 20 0.728241ZM26.1784 21.9066L17.845 30.2399C17.6904 30.3949 17.5068 30.5178 17.3045 30.6016C17.1023 30.6854 16.8855 30.7284 16.6666 30.7282C16.4477 30.7284 16.231 30.6854 16.0288 30.6016C15.8265 30.5178 15.6429 30.3949 15.4883 30.2399C14.8366 29.5882 14.8366 28.5349 15.4883 27.8832L22.6434 20.7282L15.4884 13.5732C14.8367 12.9216 14.8367 11.8682 15.4884 11.2166C16.14 10.565 17.1934 10.565 17.845 11.2166L26.1784 19.55C26.83 20.2016 26.83 21.2549 26.1784 21.9066Z"
                                fill="currentColor"
                              />
                            </svg>

                          </button>
                        </a>
                        </div>
                    </div>
                    <img src={foot} alt="foot" className="hidden lg:flex mt-[-10rem] w-full" />
                </div>
            </div>
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-start'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#05668D] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#05668D] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
    )
}

export default  SpecSectionWrapper(Hero,"home");