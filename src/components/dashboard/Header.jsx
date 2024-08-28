import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import moonImg from "../../assets/moon.svg";
import sunImg from "../../assets/sun.svg";

function Header({ handleTheme }) {
  return (
    <div className="w-full h-[64px] border border-l-0 border-[#DEDEDE] bg-white dark:border-[#343A40] dark:bg-[#1F1F1F] flex justify-between items-center p-[24px]">
      <p className="font-sans font-[700px] text-[16px] leading-[21.79px] text-[#5B5F66] dark:text-[#ffffff]">
        Onebox
      </p>
      <div className="flex justify-center gap-[8px] items-center">
        <label
          htmlFor="AcceptConditions"
          className="relative inline-flex items-center h-[24px] w-[51px] cursor-pointer rounded-full bg-[#E9EAEC] dark:bg-transparent border dark:border-[#343A40] transition [-webkit-tap-highlight-color:_transparent] "
        >
          <input
            type="checkbox"
            id="AcceptConditions"
            className="peer sr-only"
            onChange={handleTheme}
          />
          <div className=" flex w-full justify-between">
            <img src={moonImg} className="visible dark:invisible px-1" />
            <img src={sunImg} className="invisible dark:visible px-1" />
          </div>
          <span className="absolute dark:bg-[#888686]  inset-y-0 h-[16px] w-[16px] start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
        </label>
        <p className="font-sans font-[600px] text-[14px] leading-[21.79px] text-[#454F5B] dark:text-white">
          Tim's workspace{" "}
          <KeyboardArrowDownIcon className="text-[#454F5B] dark:text-white" />
        </p>
      </div>
    </div>
  );
}

export default Header;
