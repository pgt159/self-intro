"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import HeaderTag from "./HeaderTag";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = ({
  current,
  setCurrent,
}: {
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window?.innerWidth <= 767);
  }, []);

  return (
    <div>
      <HeaderMobile current={current} setCurrent={setCurrent} />
      <HeaderDesktop current={current} setCurrent={setCurrent} />
    </div>
  );
};

export default Header;
