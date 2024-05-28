import React, { Dispatch, SetStateAction } from "react";
import HeaderTag from "./HeaderTag";

const Header = ({
  current,
  setCurrent,
}: {
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="fixed top-[33px] w-full px-[70px] z-50">
      <div className="bg-[#fff]  rounded-[80px] px-[50px] py-[24px] flex flex-row justify-between shadow-md w-full">
        <div className="font-oregano flex flex-col">
          <span className="text-brown text-[20px]">PPE.</span>
          <span className="text-[12px]">Pi Phan English</span>
        </div>
        <div className="flex flex-row items-center justify-end gap-[5px]">
          <HeaderTag current={current} tag={"home"} setCurrent={setCurrent} />
          <HeaderTag current={current} tag={"about"} setCurrent={setCurrent} />
          <HeaderTag
            current={current}
            tag={"feedback"}
            setCurrent={setCurrent}
          />
          <HeaderTag current={current} tag={"course"} setCurrent={setCurrent} />
          <HeaderTag
            current={current}
            tag={"programs"}
            setCurrent={setCurrent}
          />
          <HeaderTag
            current={current}
            tag={"contact"}
            setCurrent={setCurrent}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
