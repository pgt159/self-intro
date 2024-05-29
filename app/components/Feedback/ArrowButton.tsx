// @ts-nocheck
import React from "react";
import { Arrow } from "./svg";

const ArrowButton = ({
  direction,
  onClick,
  ...rest
}: {
  direction: "left" | "right";
  onClick?: () => void;
}) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div
      className={`rounded-[200px] bg-lightPink cursor-pointer md:hover:bg-neutral transition-all w-min aspect-square p-[15px] absolute hidden md:flex ${
        direction === "right" ? "right-0" : "rotate-180 left-0"
      }`}
      onClick={onClick}
    >
      <Arrow />
    </div>
  );
};

export default ArrowButton;
