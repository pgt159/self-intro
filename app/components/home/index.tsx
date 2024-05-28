import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-row h-[55rem]">
      <div className="bg-background h-full flex-1 flex justify-center items-end relative">
        <img
          src="/beige_background.jpg"
          alt="background"
          className="object-cover h-full w-full  absolute"
        />
        <div className="w-[75%] h-[100%] relative overflow-auto flex items-end justify-end ml-[20%]">
          <img
            src="/avatar.png"
            alt="avatar"
            className="object-cover w-full max-w-[550px]"
          />
        </div>
      </div>
      <div className="bg-[#f8f8f8] h-full flex-1 px-[50px] justify-center flex flex-col gap-[10px] relative">
        <span className={"text-[40px]"}>Hello!</span>
        <span className={"text-[60px]"}>I'm NGUYET</span>
        <span className={"text-[16px]"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, proin
          dolor maecenas cras ultrices. Urna mauris, sit vitae morbi viverra
          enim sit proin. Tortor, etiam pellentesque nulla nunc.
        </span>
        <div className="bg-brown hover:bg-neutral transition-all w-min py-[12px] px-[40px] rounded-[40px] cursor-pointer mt-[15px] shadow-md">
          <span className="text-[#fff] font-bold text-[20px]">More</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
