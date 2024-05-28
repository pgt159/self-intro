import React from "react";
import { Email, Facebook, Phone } from "./svg";

const Contact = () => {
  return (
    <div className="flex flex-col px-[70px] gap-[80px] pb-[70px]">
      <div className="flex flex-col gap-[10px]">
        <span className="text-[46px] text-lightPink">Contact</span>
        <span className="text-[20px] pl-[10px]">Contact me for business</span>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-[35px] p-[15px] justify-center items-center">
          <Phone />
          <span className="font-sanchez text-[22px] text-brown">
            (+84) 098 937 3112
          </span>
        </div>
        <div className="flex flex-col gap-[35px] p-[15px] justify-center items-center">
          <Email />
          <span className="font-sanchez text-[22px] text-brown">
            nguyetpttt2111@gmail.com
          </span>
        </div>
        <div className="flex flex-col gap-[35px] p-[15px] justify-center items-center">
          <div
            className="cursor-pointer"
            onClick={() => {
              window.open("https://www.facebook.com/nguytphann");
            }}
          >
            <Facebook />
          </div>
          <a
            className="font-sanchez text-[22px] text-brown"
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
