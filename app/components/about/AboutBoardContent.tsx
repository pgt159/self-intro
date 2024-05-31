"use client";
import { TEXT } from "@/app/text";
import React from "react";
import { motion } from "framer-motion";
const AboutBoardContent = ({
  menu,
  activeMenu,
  setActiveMenu,
}: {
  menu: "CERT" | "EXP";
  activeMenu: string;
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const text = TEXT.ABOUT[menu];
  return (
    <div
      className={`relative px-[18px] py-[25px] rounded-[20px] transition-all flex flex-col gap-[25px] overflow-hidden ${
        activeMenu === menu ? "bg-[#fff] flex-1" : "hidden md:flex"
      }`}
    >
      <button
        className={` transition-all w-[30px] aspect-square hidden md:flex ${
          activeMenu === menu ? "bg-lightPink" : "bg-[#fff]"
        } hover:rotate-[45deg] hover:bg-button cursor-pointer rounded-md`}
        onClick={() => {
          setActiveMenu(menu);
        }}
      />
      <div className="relative">
        <div
          className={`flex flex-col gap-[20px] ${
            activeMenu === menu ? "" : "hidden"
          } `}
        >
          <motion.span
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className="text-[24px] font-bold"
          >
            {text.TITLE.VI}
          </motion.span>
          <div className="flex flex-col gap-[12px]">
            {text.CONTENT.VI.map((item, index) => (
              <motion.span
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                key={index}
                className=""
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBoardContent;
