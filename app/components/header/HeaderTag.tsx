// @ts-nocheck
"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const HeaderTag = ({
  current,
  tag,
  setCurrent,
}: {
  current: string;
  tag: string;
  setCurrent: Dispatch<SetStateAction<string>>;
}) => {
  const isCurrentTag = current === tag;
  const underlineRef = useRef(null);
  return (
    <ScrollLink
      to={tag}
      spy={true}
      smooth={false}
      duration={50}
      onSetActive={() => {
        setCurrent(tag);
      }}
    >
      <motion.div
        className={`button rounded-[25px] relative ${
          isCurrentTag ? "bg-brown" : ""
        } text-[18px] h-min px-[15px] py-[10px] cursor-pointer transition-all duration-150 
        ${
          isCurrentTag
            ? ""
            : "inline after:w-0 after:absolute after:transition-all hover:after:absolute hover:after:w-full hover:after:border-b-[2px] after:bottom-[-5px] after:border-b-brown after:left-0 w-fit"
        }
         
      `}
        onClick={(e) => {
          if (underlineRef.current) {
            underlineRef.current.setAttribute("style", "width:0%; ");
          }
          setCurrent(tag);
        }}
      >
        <span
          className={`${isCurrentTag ? "font-bold" : ""} ${
            isCurrentTag ? "text-[#fff]" : ""
          } uppercase transition-all duration-150`}
        >
          {tag}
        </span>
        <div
          ref={underlineRef}
          className="absolute bottom-0 left-0 transition-all duration-200 border-b-[2px] border-solid"
        />
      </motion.div>
    </ScrollLink>
  );
};

export default HeaderTag;
