// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NavigateBoard = ({
  type,
  data,
  currentKey,
  setCurrentKey,
}: {
  type: "PROGRAM" | "COURSE";
  data: any;
  currentKey: string;
  setCurrentKey: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const spanRef = useRef(null);
  const markRef = useRef(null);
  useEffect(() => {
    if (!spanRef.current) return;
    const activeKey = document.getElementById(currentKey);
    markRef.current.setAttribute(
      "style",
      `height: ${spanRef.current.getBoundingClientRect().height + 8}px; top: ${
        activeKey?.offsetTop || 35
      }px`
    );
  }, [spanRef, currentKey]);
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      className="border-[1px] border-brown rounded-[16px] md:rounded-[32px] md:py-[35px] p-[20px] md:p-[25px] flex relative w-fit flex-col gap-[20px] shadow-md md:h-auto h-fit"
    >
      <motion.div
        ref={markRef}
        className={`absolute w-[5px] bg-brown transition-all left-0 rounded-tr-sm rounded-br-sm`}
      />
      {Object.keys(data).map((item, index) => (
        <motion.span
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          ref={spanRef}
          key={index}
          className={`${
            item === currentKey ? "font-bold text-brown" : ""
          } inline cursor-pointer relative transition-all after:w-0 after:absolute after:transition-all hover:after:absolute hover:after:w-full hover:after:border-b-[2px] after:bottom-[-5px] after:border-b-brown after:left-0 w-fit md:text-[16px] text-[12px]`}
          onClick={(e) => {
            setCurrentKey(item);
          }}
          id={item}
        >
          {data[item].title}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default NavigateBoard;
