"use client";
import React, { useState } from "react";
import AboutBoardContent from "./AboutBoardContent";
import { motion } from "framer-motion";

const AboutBoard = () => {
  const [activeMenu, setActiveMenu] = useState<string>("CERT");

  return (
    <div className="flex flex-col md:flex-row gap-[20px] w-full bg-lightPink rounded-[10px] md:rounded-l-[20px] p-[15px] md:p-[25px]">
      <div className="md:pt-[10%] md:w-[30%] flex flex-row md:flex-col gap-[15px] md:gap-[30px] ">
        <button
          className={`py-[14px] px-[15px] rounded-[40px] transition-all duration-300 ${
            activeMenu === "CERT"
              ? "bg-brown md:hover:bg-neutral shadow-md"
              : ""
          }`}
          onClick={() => {
            if (activeMenu === "CERT") return;
            setActiveMenu("CERT");
          }}
        >
          <motion.span
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            className={`text-[15px] md:text-[18px] font-bold ${
              activeMenu === "CERT" ? "text-[#fff] " : "text-button"
            }`}
          >
            Bằng cấp
          </motion.span>
        </button>
        <button
          className={`py-[14px] px-[15px] rounded-[40px] transition-all ${
            activeMenu === "EXP" ? "bg-brown md:hover:bg-neutral shadow-md" : ""
          }`}
          onClick={() => {
            if (activeMenu === "EXP") return;
            setActiveMenu("EXP");
          }}
        >
          <motion.span
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            className={`text-[15px] md:text-[18px] font-bold ${
              activeMenu === "EXP" ? "text-[#fff] " : "text-button"
            }`}
          >
            Kinh Nghiệm
          </motion.span>
        </button>
      </div>
      <div className="relative flex flex-row w-full">
        <AboutBoardContent
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          menu="CERT"
        />
        <AboutBoardContent
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          menu="EXP"
        />
      </div>
    </div>
  );
};

export default AboutBoard;
