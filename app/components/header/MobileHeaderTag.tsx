"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

const MobileHeaderTag = ({
  current,
  tag,
  setCurrent,
  setIsToggleMenu,
}: {
  current: string;
  tag: string;
  setCurrent: Dispatch<SetStateAction<string>>;
  setIsToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isCurrentTag = current === tag;
  return (
    <div>
      <ScrollLink
        to={tag}
        spy={true}
        smooth={true}
        duration={300}
        onSetActive={() => {
          setCurrent(tag);
        }}
      >
        <div
          className={`button rounded-[25px] relative`}
          onClick={(e) => {
            setCurrent(tag);
            setIsToggleMenu(false);
          }}
        >
          <span className={`font-bold uppercase transition-all duration-150`}>
            {tag}
          </span>
          <div className="absolute bottom-0 left-0 transition-all duration-200 border-b-[2px] border-solid" />
        </div>
      </ScrollLink>
    </div>
  );
};

export default MobileHeaderTag;
