"use client";
import Header from "./components/header/Header";
import { Box, Skeleton } from "@mui/material";
import { useState } from "react";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import ProgramCourse from "./components/programCourse";
import Feedback from "./components/Feedback";
import Contact from "./components/contact";

export default function Home() {
  const [current, setCurrent] = useState<string>("home");

  return (
    <div className="relative flex flex-col gap-[40px] md:gap-[70px]">
      <Header current={current} setCurrent={setCurrent} />
      <HomePage />
      <AboutPage />
      <ProgramCourse type="PROGRAMS" />
      <ProgramCourse type="COURSE" />
      <Feedback />
      <Contact />
    </div>
  );
}
