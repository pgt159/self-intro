import React from "react";
import { Email, Facebook, Phone } from "./svg";

const Contact = () => {
  return (
    <div className="flex flex-col px-[25px] md:px-[70px] gap-[30px] md:gap-[80px] pb-[20px] md:pb-[70px]">
      <div className="flex flex-col gap-[10px]">
        <span className="text-[30px] md:text-[46px] text-lightPink">
          Contact
        </span>
        <span className="text-[12px] md:text-[20px] pl-[10px]">
          Contact me for business
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-center">
        <div className="flex flex-row md:flex-col gap-[10px] md:gap-[35px] py-[10px] md:p-[15px] justify-start md:justify-center items-center w-full">
          <div className="scale-50 md:scale-0">
            <Phone />
          </div>
          <span className="font-sanchez text-[14px] text-brown">
            (+84) 089 837 3112
          </span>
        </div>
        <div className="flex flex-row md:flex-col gap-[10px] md:gap-[35px] py-[10px] md:p-[15px] justify-start md:justify-center items-center w-full">
          <div className="scale-50 md:scale-0">
            <Email />
          </div>
          <span className="font-sanchez text-[14px] text-brown">
            nguyetpttt2111@gmail.com
          </span>
        </div>
        <div className="flex flex-row md:flex-col gap-[10px] md:gap-[35px] py-[10px] md:p-[15px] justify-start md:justify-center items-center w-full">
          <div
            className="cursor-pointer scale-50 md:scale-0"
            onClick={() => {
              window.open("https://www.facebook.com/nguytphann");
            }}
          >
            <Facebook />
          </div>
          <a
            className="font-sanchez text-[14px] text-brown"
            href="https://www.facebook.com/nguytphann"
            target="_blank"
          >
            https://www.facebook.com/nguytphann
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
