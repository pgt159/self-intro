import React from "react";
import { Email, Facebook, Phone } from "./svg";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const Contact = () => {
  const isVI = true;
  return (
    <Element name="contact">
      <div className="flex flex-col px-[25px] md:px-[70px] gap-[30px] md:gap-[80px] pb-[70px] md:pb-[120px] pt-[50px]">
        <div className="flex flex-col gap-[10px]">
          <motion.span
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className="text-[30px] md:text-[46px] text-lightPink"
          >
            {isVI ? "Liên hệ" : "Contact"}
          </motion.span>
          <motion.span
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className="text-[12px] md:text-[20px] pl-[10px]"
          >
            {isVI ? "Liên hệ công việc" : "Contact me for business"}
          </motion.span>
        </div>
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center">
          <div className="flex flex-row md:flex-col gap-[10px] md:gap-[35px] py-[10px] md:p-[15px] justify-start md:justify-center items-center w-full">
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="scale-50 md:scale-100"
            >
              <Phone />
            </motion.div>
            <motion.span
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className="font-sanchez text-[14px] text-brown"
            >
              (+84) 089 837 3112
            </motion.span>
          </div>
          <div className="flex flex-row md:flex-col gap-[10px] md:gap-[35px] py-[10px] md:p-[15px] justify-start md:justify-center items-center w-full">
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="scale-50 md:scale-100"
            >
              <Email />
            </motion.div>
            <motion.span
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className="font-sanchez text-[14px] text-brown"
            >
              nguyetpttt2111@gmail.com
            </motion.span>
          </div>
          <div className="flex flex-row md:flex-col gap-[10px] md:gap-[35px] py-[10px] md:p-[15px] justify-start md:justify-center items-center w-full">
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="cursor-pointer scale-50 md:scale-100"
              onClick={() => {
                window.open("https://www.facebook.com/nguytphann");
              }}
            >
              <Facebook />
            </motion.div>
            <motion.a
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              className="font-sanchez text-[14px] text-brown"
              href="https://www.facebook.com/nguytphann"
              target="_blank"
            >
              https://www.facebook.com/nguytphann
            </motion.a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
