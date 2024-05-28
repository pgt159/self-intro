import React from "react";
import AboutBoard from "./AboutBoard";

const AboutPage = () => {
  return (
    <div className="flex flex-row pl-[70px] gap-[35px] ">
      <div className="flex flex-col w-[35%] pt-[40px] gap-[60px]">
        <span className="text-[45px] text-lightPink">About</span>
        <div className="flex flex-col gap-[10px]">
          <span className="text-[30px]">
            I can help you improve your English and prepare for your upcoming
            exams
          </span>
          <span className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis et,
            elementum, eu quis morbi arcu lectus. Vivamus est nibh id curabitur
            urna cursus amet. Sagittis tempor enim at montes, quis id pretium.
            Ac fermentum enim euismod non.
          </span>
        </div>

        <div className="flex justify-center mt-[50px]">
          <button className="bg-brown hover:bg-neutral transition-all w-min py-[17px] px-[60px] rounded-[40px] cursor-pointer shadow-md">
            <span className="text-[#fff] font-bold text-[20px] whitespace-nowrap">
              Learn more
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-1 ">
        <AboutBoard />
      </div>
    </div>
  );
};

export default AboutPage;
