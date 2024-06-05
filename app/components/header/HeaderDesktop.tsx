import React from "react";
import HeaderTag from "./HeaderTag";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const HeaderDesktop = ({
  current,
  setCurrent,
}: {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <motion.div className="fixed top-[10px] w-full px-[70px] z-50 hidden md:flex ">
      <div className="bg-[#fff] rounded-[80px] px-[50px] py-[24px] flex flex-row justify-between shadow-md w-full">
        <div className="font-oregano flex flex-col pointer-events-none">
          <span className="text-brown text-[20px]">MLE.</span>
          <span className="text-[14px]">Moonlit English</span>
        </div>
        <div className="flex flex-row items-center justify-end gap-[5px]">
          <HeaderTag
            current={current}
            tag={"home"}
            setCurrent={setCurrent}
            vi="Trang đầu"
          />
          <HeaderTag
            current={current}
            tag={"about"}
            setCurrent={setCurrent}
            vi={"Giới thiệu"}
          />
          <HeaderTag
            current={current}
            tag={"programs"}
            setCurrent={setCurrent}
            vi={"Chương trình"}
          />
          <HeaderTag
            current={current}
            tag={"course"}
            setCurrent={setCurrent}
            vi={"Khoá học"}
          />

          <HeaderTag
            current={current}
            tag={"feedback"}
            vi={"Nhận xét"}
            setCurrent={setCurrent}
          />
          <HeaderTag
            current={current}
            tag={"contact"}
            setCurrent={setCurrent}
            vi="Liên hệ"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderDesktop;
