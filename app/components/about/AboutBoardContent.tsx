// @ts-nocheck
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
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className="text-[24px] font-bold"
          >
            {text.TITLE.VI}
          </motion.span>
          <div
            className={`${
              menu === "CERT" ? "flex flex-col" : "grid grid-cols-2"
            } gap-[12px]`}
          >
            {text.CONTENT.VI.map((item, index) => (
              <motion.div
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
                {menu === "CERT" ? item : null}
                {menu === "EXP" ? (
                  <div className="flex flex-col">
                    <span className="font-bold text-[18px]">{item.title}</span>
                    <span className="font-raleway">{item.time}</span>
                    <span className="italic">{item.workplace}</span>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBoardContent;
