import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const HomePage = () => {
  return (
    <Element name="home">
      <div
        className="flex md:flex-row flex-col h-[45rem] md:h-[55rem]"
        id="home"
      >
        <div className="bg-background h-full flex-1 flex justify-center items-end relative">
          <img
            src="/beige_background.jpg"
            alt="background"
            className="object-cover h-full w-full  absolute"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.8 }}
            className="w-[75%] h-[100%] relative overflow-auto flex items-end justify-end ml-[20%]"
          >
            <img
              src="/avatar.PNG"
              alt="avatar"
              className="object-cover w-full max-w-[550px]"
            />
          </motion.div>
        </div>
        <div className="bg-[#f8f8f8] h-full flex-1 px-[15px] md:px-[50px] justify-center flex flex-col gap-[10px] relative">
          <motion.span
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.8 }}
            className={"text-[25px] md:text-[40px]"}
          >
            Hello!
          </motion.span>
          <motion.span
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.8 }}
            className={"text-[40px] md:text-[60px]"}
          >
            I'm NGUYET
          </motion.span>
          <motion.span
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.8 }}
            className={"text-[12px] md:text-[16px]"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, proin
            dolor maecenas cras ultrices. Urna mauris, sit vitae morbi viverra
            enim sit proin. Tortor, etiam pellentesque nulla nunc.
          </motion.span>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className="bg-brown md:hover:bg-neutral transition-all w-min py-[12px] px-[40px] rounded-[40px] cursor-pointer mt-[15px] shadow-md hidden md:flex relative"
          >
            <ScrollLink
              to={"about"}
              spy={true}
              smooth={true}
              duration={300}
              className="w-full h-full block absolute inset-0"
            ></ScrollLink>
            <span className="text-[#fff] font-bold text-[20px]">More</span>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default HomePage;
