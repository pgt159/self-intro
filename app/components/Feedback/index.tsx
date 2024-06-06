import React from "react";
import Carousel from "react-multi-carousel";
import ArrowButton from "./ArrowButton";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

import "./style.scss";

const Feedback = () => {
  const isVI = true;
  const images = [
    "/feedback/feedback_1.PNG",
    "/feedback/feedback_2.PNG",
    "/feedback/feedback_3.PNG",
    "/feedback/feedback_4.PNG",
    "/feedback/feedback_5.PNG",
    "/feedback/feedback_6.PNG",
    "/feedback/feedback_7.PNG",
    "/feedback/feedback_9.PNG",
    "/feedback/feedback_10.PNG",
    "/feedback/feedback_11.PNG",
    "/feedback/feedback_12.PNG",
    "/feedback/feedback_13.PNG",
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <Element name="feedback">
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="flex flex-col pt-[70px] px-[25px] md:p-[70px] gap-[20px] md:gap-[40px] md:pb-0 md:pt-[120px]"
      >
        <motion.span className="text-[30px] md:text-[46px] text-lightPink">
          {isVI ? "Nhận xét" : "Feedback"}
        </motion.span>
        <Carousel
          responsive={responsive}
          ssr
          showDots={true}
          containerClass="container-with-dots"
          itemClass="image-item"
          deviceType={""}
          autoPlay={true}
          customRightArrow={<ArrowButton direction="right" />}
          customLeftArrow={<ArrowButton direction="left" />}
          infinite
        >
          {images.map((image) => {
            return (
              <img
                key={image}
                draggable={false}
                style={{ width: "100%", height: "100%", position: "relative" }}
                src={image}
                alt={image}
              />
            );
          })}
        </Carousel>
      </motion.div>
    </Element>
  );
};

export default Feedback;
