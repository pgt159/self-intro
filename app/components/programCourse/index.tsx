// @ts-nocheck
"use client";
import React, { useState } from "react";
import NavigateBoard from "./NavigateBoard";
const listContentPro = {
  EN: {
    ielts: {
      key: "IELTS",
      title: "IELTS PREPARATION",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    com: {
      key: "COM",
      title: "COMMUNICATIVE ENGLISH",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    cam: {
      key: "CAM",
      title: "CAMBRIDGE TEST COACHING",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    school: {
      key: "SCHOOL",
      title: "SCHOOL ENGLISH",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    grad: {
      key: "GRAD",
      title: "GRADUATION EXAM PREPARATION",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
  },
  VI: {
    ielts: {
      key: "IELTS",
      title: "LUYỆN THI IELTS",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    com: {
      key: "COM",
      title: "TIẾNG ANH GIAO TIẾP",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    cam: {
      key: "CAM",
      title: "LUYỆN THI CHỨNG CHI CAMBRIDGE",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    school: {
      key: "SCHOOL",
      title: "TIẾNG ANH PHỔ THÔNG",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    grad: {
      key: "GRAD",
      title: "LUYỆN THI THPTQG",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
  },
};
const listContentCourse = {
  EN: {
    one: {
      key: "1-1",
      title: "1-1 CLASSROOM",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    small: {
      key: "SMALL",
      title: "SMALL GROUP (2 - 5 STUDENTS)",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    onl: {
      key: "ONL",
      title: "ONLINE CLASSROOM",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
  },
  VI: {
    one: {
      key: "1-1",
      title: "LỚP HỌC 1 KÈM 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    small: {
      key: "SMALL",
      title: "HỌC THEO NHÓM (2 - 5 HỌC SINH)",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
    onl: {
      key: "ONL",
      title: "LỚP HỌC ONLINE",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tincidunt vitae nunc pharetra. Ac ac in ut nisl, ut. Ut sit facilisis eu, ipsum sed. In cum at dignissim faucibus orci porttitor.",
    },
  },
};
const ProgramCourse = ({ type }: { type: "PROGRAM" | "COURSE" }) => {
  const title = type[0] + type.toLowerCase().slice(1, type.length);
  const [currentData, setCurrentData] = useState(
    type === "PROGRAM" ? listContentPro.VI : listContentCourse.VI
  );
  const [currentKey, setCurrentKey] = useState<string>(
    type === "PROGRAM" ? "ielts" : "one"
  );
  return (
    <div
      className={`${
        type === "PROGRAM" ? "flex-row" : "flex-row-reverse"
      } flex px-[70px]`}
    >
      <div className="flex flex-col justify-center gap-[20px] w-[50%] items-center">
        <div className="flex w-[450px] relative ">
          <img
            src="/test_pic1.png"
            alt="test"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-row gap-[25px]">
          <div className="w-[300px] aspect-square relative">
            <img
              src="/test_pic1.png"
              alt="test"
              className="w-full object-cover"
            />
          </div>
          <div className="w-[300px] aspect-square relative">
            <img
              src="/test_pic1.png"
              alt="test"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-[55px] px-[8%] justify-between">
        <span className="text-[46px] text-lightPink">{title}</span>
        <span className="w-[80%]">{currentData[currentKey].content}</span>
        <NavigateBoard
          type={type}
          data={currentData}
          currentKey={currentKey}
          setCurrentKey={setCurrentKey}
        />
      </div>
    </div>
  );
};

export default ProgramCourse;
