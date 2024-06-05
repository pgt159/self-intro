import React from "react";
import AboutBoard from "./AboutBoard";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const AboutPage = () => {
  const isVI = true;
  return (
    <Element name="about">
      <div className="flex md:flex-row flex-col px-[20px] md:pl-[70px] gap-[35px] pt-[70px] md:pt-[120px]">
        <div className="flex flex-col md:w-[35%] md:pt-[40px] gap-[15px]">
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
            {isVI ? "Về mình" : "About"}
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
              {isVI ? "Là một giáo viên tiếng Anh," : "As an English teacher,"}
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
              {isVI
                ? `Mình có hơn 5 năm kinh nghiệm đứng lớp ở các trung tâm, trường tư thục, giảng dạy cho học viên đa dạng các độ tuổi. Bên cạnh đó, mình đã giảng dạy các khóa Tiếng Anh giao tiếp, luyện thi các chứng chỉ Cambridge và IELTS đem lại kết quả mà học viên mong đợi.`
                : ""}
            </motion.span>
          </div>

          <div className="justify-center mt-[50px] md:flex hidden relative">
            <motion.button
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              className="bg-brown md:hover:bg-neutral transition-all w-min py-[17px] px-[60px] rounded-[40px] cursor-pointer shadow-md "
            >
              <ScrollLink
                to={"programs"}
                spy={true}
                smooth={true}
                duration={300}
                className="w-full h-full block absolute inset-0"
              ></ScrollLink>
              <span className="text-[#fff] font-bold text-[20px] whitespace-nowrap">
                Xem tiếp
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
