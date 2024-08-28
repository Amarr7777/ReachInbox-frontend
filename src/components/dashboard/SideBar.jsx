import React from "react";
import darkLogo from "../../assets/darkLogo.png";
import lightLogo from "../../assets/lightLogo.png";
import EmailIcon from "@mui/icons-material/EmailRounded";
import ViewListIcon from "@mui/icons-material/ViewListRounded";
import PersonSearchIcon from "@mui/icons-material/PersonSearchRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function SideBar() {
  return (
    <div className="h-svh w-[56px] bg-white dark:bg-[#101113] flex flex-col justify-evenly border boredr-[#D8D8D8] dark:border-[#343A40]">
      <div className="flex items-center justify-center h-[70px]">
        <img src={darkLogo} alt="logo" className="hidden dark:block" />
        <img src={lightLogo} alt="logo" className="block dark:hidden " />
      </div>
      {/* menu container */}
      <div className="flex flex-col justify-start items-center h-[calc(100%-(70px-56px))] gap-[32px]">
        {/* menu items */}
        <ul className="h-[546px] flex flex-col justify-evenly items-center">
          <li>
            <HomeRoundedIcon className="text-[#AEAEAE] w-[28px] h-[28px]" />
          </li>
          <li>
            <PersonSearchIcon className="text-[#AEAEAE] w-[28px] h-[28px] " />
          </li>
          <li>
            <EmailIcon className="text-[#AEAEAE] w-[28px] h-[28px]" />
          </li>
          <li>
            <SendRoundedIcon className="text-[#AEAEAE] w-[28px] h-[28px] -rotate-45" />
          </li>
          <li>
            <ViewListIcon className="text-[#AEAEAE] w-[28px] h-[28px]" />
          </li>
          <li>
            <InboxRoundedIcon className="text-[#AEAEAE] w-[28px] h-[28px]" />
          </li>
          <li>
            <BarChartIcon className="text-[#AEAEAE] w-[28px] h-[28px]" />
          </li>
        </ul>
      </div>
      <div className="h-[56px]"></div>
    </div>
  );
}

export default SideBar;
