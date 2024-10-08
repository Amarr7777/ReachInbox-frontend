import React from "react";
import darkLogo from "../../assets/darkLogo.svg";
import lightLogo from "../../assets/lightLogo.svg";
import EmailIcon from "@mui/icons-material/EmailRounded";
import ViewListIcon from "@mui/icons-material/ViewListRounded";
import PersonSearchIcon from "@mui/icons-material/PersonSearchRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

function SideBar({ setIndex }) {
  const navigate = useNavigate();
  return (
    <div className="h-svh relative w-[56px] bg-white dark:bg-[#101113] flex flex-col justify-evenly border boredr-[#D8D8D8] dark:border-[#343A40] border-b-0 z-50">
      <div className="flex items-center justify-center h-[70px]">
        <img src={darkLogo} alt="logo" className="hidden dark:block" />
        <img src={lightLogo} alt="logo" className="block dark:hidden " />
      </div>
      {/* menu container */}
      <div className="flex flex-col justify-start items-center h-[calc(100%-(70px-56px))] gap-[32px]">
        {/* menu items */}
        <ul className="h-[546px] flex flex-col justify-evenly items-center">
          <li
            onClick={() => {
              setIndex(1);
            }}
            className="relative group"
          >
            <span className="absolute hidden left-10 top-1/2 transform -translate-y-1/2 translate-x-1/5 bg-white dark:bg-[#23252a] py-1 px-2 text-[#000000] dark:text-white group-hover:block transition-opacity rounded-sm border border-[#AEAEAE] dark:border-gray-500">
              Home
            </span>
            <HomeRoundedIcon className="text-[#AEAEAE] w-[28px] h-[28px] cursor-pointer" />
          </li>
          <li
            onClick={() => {
              setIndex(2);
            }}
            className="relative group"
          >
            <span className="absolute hidden left-10 top-1/2 transform -translate-y-1/2 translate-x-1/5 bg-white dark:bg-[#23252a] py-1 px-2 text-[#000000] dark:text-white group-hover:block transition-opacity rounded-sm border border-[#AEAEAE] dark:border-gray-500 whitespace-nowrap">
              User Search
            </span>
            <PersonSearchIcon className="text-[#AEAEAE] w-[28px] h-[28px] cursor-pointer " />
          </li>
          <li
            onClick={() => {
              setIndex(3);
            }}
            className="relative group"
          >
            <span className="absolute hidden left-10 top-1/2 transform -translate-y-1/2 translate-x-1/5 bg-white dark:bg-[#23252a] py-1 px-2 text-[#000000] dark:text-white group-hover:block rounded-sm border border-[#AEAEAE] dark:border-gray-500 whitespace-nowrap">
              Email Accounts
            </span>
            <EmailIcon className="text-[#AEAEAE] w-[28px] h-[28px] cursor-pointer" />
          </li>
          <li
            onClick={() => {
              setIndex(4);
            }}
            className="relative group"
          >
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 translate-x-1/5 bg-white dark:bg-[#23252a] py-1 px-2 text-[#000000] dark:text-white  group-hover:block hidden transition-opacity rounded-sm border border-[#AEAEAE] dark:border-gray-500">
              Campaings
            </span>
            <SendRoundedIcon className="text-[#AEAEAE] w-[28px] h-[28px] cursor-pointer -rotate-45" />
          </li>
          <li
            onClick={() => {
              setIndex(5);
            }}
            className="relative group"
          >
            <span className="absolute hidden left-10 top-1/2 transform -translate-y-1/2 translate-x-1/5 bg-white dark:bg-[#23252a] py-1 px-2 text-[#000000] dark:text-white group-hover:block transition-opacity rounded-sm border border-[#AEAEAE] dark:border-gray-500 whitespace-nowrap">
              Lead List
            </span>
            <ViewListIcon className="text-[#AEAEAE] w-[28px] h-[28px] cursor-pointer" />
          </li>
          <li
            onClick={() => {
              setIndex(6);
            }}
            className="relative group"
          >
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 translate-x-1/5 bg-white dark:bg-[#23252a] py-1 px-2 text-[#000000] dark:text-white  group-hover:block hidden transition-opacity rounded-sm border border-[#AEAEAE] dark:border-gray-500">
              Onebox
            </span>
            <InboxRoundedIcon className="text-[#AEAEAE] w-[28px] h-[28px] cursor-pointer" />
          </li>
          <li
            onClick={() => {
              setIndex(7);
            }}
            className="relative group"
          >
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 translate-x-1/5 bg-white dark:bg-[#23252a] py-1 px-2 text-[#000000] dark:text-white  group-hover:block hidden transition-opacity rounded-sm border border-[#AEAEAE] dark:border-gray-500">
              Analytics
            </span>
            <BarChartIcon className="text-[#AEAEAE] w-[28px] h-[28px] cursor-pointer" />
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0  h-[56px] w-full flex justify-center items-center p-2">
        <div 
        onClick={()=>{
          localStorage.removeItem('authToken')
          navigate("/")
        }}
        className="group w-[32px] h-[32px] rounded-full bg-green-950 flex justify-center items-center p-2 cursor-pointer">
          <p className="font-bold text-white text-sm">AS</p>
          <span className="absolute left-14 top-1/2 transform -translate-y-1/2 translate-x-1/5 bg-white dark:bg-[#23252a] py-1 px-2 text-[#000000] dark:text-white  group-hover:block hidden transition-opacity rounded-sm border border-[#AEAEAE] dark:border-gray-500">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
