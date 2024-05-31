import React from "react";
import AboutBoard from "./AboutBoard";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <Element name="about">
      <div className="flex md:flex-row flex-col px-[20px] md:pl-[70px] gap-[35px] pt-[50px] md:pt-[120px]">
        <div className="flex flex-col md:w-[35%] md:pt-[40px] gap-[30px] md:gap-[60px]">
          <motion.span
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className="text-[30px] md:text-[46px] text-lightPink"
          >
            About
          </motion.span>
          <div className="flex flex-col gap-[10px]">
            <motion.span
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className="text-[20px] md:text-[30px]"
            >
              I can help you improve your English and prepare for your upcoming
              exams
            </motion.span>
            <motion.span
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className="text-[13px] md:text-[16px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis et,
              elementum, eu quis morbi arcu lectus. Vivamus est nibh id
              curabitur urna cursus amet. Sagittis tempor enim at montes, quis
              id pretium. Ac fermentum enim euismod non.
            </motion.span>
          </div>

          <div className="justify-center mt-[50px] md:flex hidden">
            <motion.button
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              className="bg-brown md:hover:bg-neutral transition-all w-min py-[17px] px-[60px] rounded-[40px] cursor-pointer shadow-md"
            >
              <span className="text-[#fff] font-bold text-[20px] whitespace-nowrap">
                Learn more
              </span>
            </motion.button>
          </div>
        </div>
        <div className="flex flex-row flex-1 ">
          <AboutBoard />
        </div>
      </div>
    </Element>
  );
};

export default AboutPage;
