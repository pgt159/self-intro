import { Box, IconButton, Paper, Slide, styled } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import React, { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";
import MobileHeaderTag from "./MobileHeaderTag";

const HeaderMobile = ({
  current,
  setCurrent,
}: {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);

  const onToggleMenu = (): void => {
    setIsToggleMenu(!isToggleMenu);
  };

  const SlidingMenu = styled(Paper)(({ theme }) => ({
    minWidth: "300px",
    maxWidth: "500px",
    height: "100vh",
    position: "fixed",
    right: 0,
    top: 0,
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    zIndex: 9999,
  }));

  return (
    <Box
      className={
        "flex md:hidden fixed w-full justify-end bg-[#fff] z-50 h-[50px]"
      }
    >
      {!isToggleMenu ? (
        <IconButton onClick={onToggleMenu}>
          <MenuRoundedIcon sx={{ fontSize: "25px" }} />
        </IconButton>
      ) : null}
      <Slide direction="left" in={isToggleMenu} mountOnEnter unmountOnExit>
        <SlidingMenu
          variant="elevation"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex height-full flex-1 flex-col justify-between relative pt-[50px] box-border">
            <div className="w-full flex justify-end absolute right-0 top-0">
              <IconButton onClick={onToggleMenu}>
                <CloseRoundedIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </div>

            <div className="mt-[1rem] flex flex-col gap-[1rem]">
              <MobileHeaderTag
                current={current}
                tag={"home"}
                setCurrent={setCurrent}
                setIsToggleMenu={setIsToggleMenu}
                vi="Trang đầu"
              />
              <MobileHeaderTag
                current={current}
                tag={"about"}
                setCurrent={setCurrent}
                setIsToggleMenu={setIsToggleMenu}
                vi={"Giới thiệu"}
              />
              <MobileHeaderTag
                current={current}
                tag={"programs"}
                setCurrent={setCurrent}
                setIsToggleMenu={setIsToggleMenu}
                vi={"Chương trình"}
              />
              <MobileHeaderTag
                current={current}
                tag={"course"}
                setCurrent={setCurrent}
                setIsToggleMenu={setIsToggleMenu}
                vi={"Khoá học"}
              />
              <MobileHeaderTag
                current={current}
                tag={"feedback"}
                setCurrent={setCurrent}
                setIsToggleMenu={setIsToggleMenu}
                vi={"Nhận xét"}
              />
              <MobileHeaderTag
                current={current}
                tag={"contact"}
                setCurrent={setCurrent}
                setIsToggleMenu={setIsToggleMenu}
                vi="Liên hệ"
              />
            </div>
          </div>
        </SlidingMenu>
      </Slide>
    </Box>
  );
};

export default HeaderMobile;
