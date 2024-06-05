// @ts-nocheck
"use client";
import React, { useState } from "react";
import NavigateBoard from "./NavigateBoard";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
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
        "- Có các khóa luyện thi IELTS từ 0 đến 6.5.\n- Giáo viên theo sát tiến trình học, chia sẻ kinh nghiệm luyện thi và kĩ thuật ôn luyện cho từng kỹ năng để đạt mức điểm mong muốn. \n- Tài liệu được biên soạn bám sát với đề thi, cá nhân hóa theo nhu cầu và phong cách học của từng cá nhân.",
    },
    com: {
      key: "COM",
      title: "TIẾNG ANH GIAO TIẾP",
      content:
        "- Đa dạng các chủ đề giao tiếp, dễ áp dụng vào đời sống. \n- Học viên được rèn luyện kĩ năng phản xạ và nắm vững các kĩ thuật học từ vựng, cấu trúc để tối ưu hóa việc giao tiếp bằng tiếng Anh.",
    },
    cam: {
      key: "CAM",
      title: "LUYỆN THI CHỨNG CHI CAMBRIDGE",
      content:
        "- Bộ tài liệu bám sát đề thi.\n- Học viên được làm quen với bài thi Tiếng Anh chuẩn quốc tế, được rèn luyện đầy đủ 4 kỹ năng.\n- Giáo viên theo dõi sát sao tiến độ học tập và hỗ trợ bài tập 24/7.",
    },
    school: {
      key: "SCHOOL",
      title: "TIẾNG ANH PHỔ THÔNG",
      content:
        "- Bổ sung kiến thức cơ bản và nâng cao bám sát nội dung SGK.\n- Theo dõi sát sao tiến độ học tập của học viên và trao đổi với phụ huynh.",
    },
    grad: {
      key: "GRAD",
      title: "LUYỆN THI THPTQG",
      content:
        "- Bộ tài liệu bám sát đề thi.\n- Học viên nắm rõ các nội dung có trong bài thi THPTQG. Được cung cấp nguồn tài liệu khổng lồ để chuẩn bị tốt cho kì thi.\n- Giáo viên theo dõi sát sao tiến độ học tập và hỗ trợ bài tập 24/7.",
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
        "- Giờ học, địa điểm học linh hoạt.\n- Chương trình học được cá nhân hóa theo nhu cầu học viên.",
    },
    small: {
      key: "SMALL",
      title: "HỌC THEO NHÓM (2 - 5 HỌC SINH)",
      content:
        "- Số lượng ít, giáo viên theo sát học viên.\n- Có các bài kiểm tra định kì để nắm rõ mức độ theo bài của học viên.",
    },
    onl: {
      key: "ONL",
      title: "LỚP HỌC ONLINE",
      content:
        "- Thao tác dễ dàng.\n- Nhiều hoạt động thú vị.\n- Bổ sung kiến thức sử dụng các phần mềm phục vụ cho học tập.",
    },
  },
};
const ProgramCourse = ({ type }: { type: "PROGRAMS" | "COURSE" }) => {
  const isVI = true;
  const title = !isVI
    ? type[0] + type.toLowerCase().slice(1, type.length)
    : type === "PROGRAMS"
    ? "Chương trình"
    : "Khoá học";
  const [currentData, setCurrentData] = useState(
    type === "PROGRAMS" ? listContentPro.VI : listContentCourse.VI
  );
  const [currentKey, setCurrentKey] = useState<string>(
    type === "PROGRAMS" ? "ielts" : "one"
  );
  return (
    <Element name={type.toLowerCase()}>
      <div
        className={`${
          type === "PROGRAMS" ? "md:flex-row" : "md:flex-row-reverse"
        } flex md:px-[70px] md:pt-[120px] pt-[70px] flex-col-reverse px-[25px] md:gap-0 gap-[40px]`}
      >
        <div className="flex flex-col justify-center gap-[20px] md:w-[50%] items-center">
          <div className="flex md:w-[450px] relative ">
            <motion.img
              initial={{
                x: -100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              src="/test_pic1.png"
              alt="test"
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-row gap-[25px]">
            <div className="  w-full md:w-[300px] aspect-square relative">
              <motion.img
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                src="/test_pic1.png"
                alt="test"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-[300px] aspect-square relative ">
              <motion.img
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                src="/test_pic1.png"
                alt="test"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:py-[55px] md:px-[8%] justify-between gap-[15px] md:gap-0 md:w-[50%]">
          <motion.span
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            className="text-[30px] md:text-[46px] text-lightPink"
          >
            {title}
          </motion.span>
          <div className="flex md:flex-col flex-row md:gap-0 gap-[20px] flex-1 md:justify-around">
            <motion.span
              initial={{
                x: 100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="w-[80%] text-[14px] whitespace-pre-wrap break-words"
            >
              {currentData[currentKey].content}
            </motion.span>
            <NavigateBoard
              type={type}
              data={currentData}
              currentKey={currentKey}
              setCurrentKey={setCurrentKey}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ProgramCourse;
