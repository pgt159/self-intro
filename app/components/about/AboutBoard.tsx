"use client";
import React, { useState } from "react";
import AboutBoardContent from "./AboutBoardContent";

const AboutBoard = () => {
  const [activeMenu, setActiveMenu] = useState<string>("CERT");

  return (
    <div className="flex flex-row gap-[20px] w-full bg-lightPink rounded-l-[20px] px-[25px] py-[25px]">
      <div className="pt-[10%] w-[30%] flex flex-col gap-[30px] ">
        <button
          className={`py-[14px] px-[15px] rounded-[40px] transition-all duration-300 ${
            activeMenu === "CERT" ? "bg-brown hover:bg-neutral shadow-md" : ""
          }`}
          onClick={() => {
            if (activeMenu === "CERT") return;
            setActiveMenu("CERT");
          }}
        >
          <span
            className={`text-[18px] font-bold ${
              activeMenu === "CERT" ? "text-[#fff] " : "text-button"
            }`}
          >
            Bằng cấp
          </span>
        </button>
        <button
          className={`py-[14px] px-[15px] rounded-[40px] transition-all ${
            activeMenu === "EXP" ? "bg-brown hover:bg-neutral shadow-md" : ""
          }`}
          onClick={() => {
            if (activeMenu === "EXP") return;
            setActiveMenu("EXP");
          }}
        >
          <span
            className={`text-[18px] font-bold ${
              activeMenu === "EXP" ? "text-[#fff] " : "text-button"
            }`}
          >
            Kinh Nghiệm
          </span>
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
