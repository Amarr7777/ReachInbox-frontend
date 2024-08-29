import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import sendIcon from "../../../assets/sendIcon.svg";
import sendIconDark from "../../../assets/sendIconDark.svg";
import mailIcon from "../../../assets/mailIcon.svg";
import mailIconDark from "../../../assets/mailIconDark.svg";
import openedMailIcon from "../../../assets/openedMailIcon.svg";

function Activities() {
  return (
    <div className="flex flex-col items-start w-full gap-[12px] p-5">
      {/* line 1 */}
      <p className="font-sans font-[600] text-[15px] leading-[20.43px] dark:text-white text-[#172B4D] w-full">
        Campaign Name
      </p>
      {/* line 2 */}
      <div className="flex items-center w-full gap-4">
        <p className="font-[600] text-[12px] font-sans leading-[16.34px] dark:text-white text-[#454F5B]">
          3 <span className="font-[400]">steps</span>
        </p>
        <div className="h-[15px] border-l border-[#DFE3E8]"></div>
        <p className="font-[600] text-[12px] font-sans leading-[16.34px] dark:text-white text-[#454F5B]">
          5 <span className="font-[400]">Days in Sequence</span>
        </p>
      </div>
      {/* line 3 */}
      <div className="flex flex-col gap-10 pt-5 relative h-full">
        {/* the vertical line */}
        <div className="absolute h-3/4 top-6 left-[23px]  w-[1px] bg-[#DFE3E8] dark:bg-[#263238] z-0"></div>

        {/* line 3.1 */}
        <div className="flex items-center gap-4 w-full px-2 relative z-10">
          <div className="w-[32px] h-[32px] dark:bg-[#23272C] bg-[#EEF1F4] border dark:border-[#41464B] border-[#DFE3E8] rounded-full flex justify-center items-center">
            <img src={mailIcon} alt="mail icon"  className="block dark:hidden"/>
            <img src={mailIconDark} alt="mail icon" className="hidden dark:block"/>
          </div>
          <div className="flex flex-col justify-center ">
            <p className="dark:text-white text-[#172B4D] font-sans font-[600] text-[13px] leading-[17.7px]">
              Step 1: Email
            </p>
            <div className="flex items-center gap-1">
              <div className="w-[16px] h-[16px]">
                <img src={sendIcon} alt="send icon" className="block dark:hidden"/>
                <img src={sendIconDark} alt="send icon" className="hidden dark:block"/>
              </div>
              <p className="dark:text-[#B9B9B9] text-[#637381] font-[400] text-[10px] leading-[18px]">
                sent
              </p>
              <p className="dark:text-[#B9B9B9] text-[#637381] font-[600] text-[10px] leading-[18px]">
                3rd, Feb
              </p>
            </div>
          </div>
        </div>

        {/* line 3.2 */}
        <div className="flex items-center gap-4 w-full px-2 relative z-10">
          <div className="w-[32px] h-[32px] dark:bg-[#23272C] bg-[#EEF1F4] border dark:border-[#41464B] border-[#DFE3E8] rounded-full flex justify-center items-center">
          <img src={mailIcon} alt="mail icon"  className="block dark:hidden"/>
          <img src={mailIconDark} alt="mail icon" className="hidden dark:block"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="dark:text-white text-[#172B4D] font-sans font-[600] text-[13px] leading-[17.7px]">
              Step 2: Email
            </p>
            <div className="flex items-center gap-1">
              <div className="w-[16px] h-[16px]">
                <img src={openedMailIcon} alt="opened mail icon" />
              </div>
              <p className="dark:text-[#B9B9B9] text-[#637381] font-[400] text-[10px] leading-[18px]">
                opened
              </p>
              <p className="dark:text-[#B9B9B9] text-[#637381] font-[600] text-[10px] leading-[18px]">
                4th, Feb
              </p>
            </div>
          </div>
        </div>

        {/* line 3.3 */}
        <div className="flex items-center gap-4 w-full px-2 relative z-10">
          <div className="w-[32px] h-[32px] dark:bg-[#23272C] bg-[#EEF1F4] border dark:border-[#41464B] border-[#DFE3E8] rounded-full flex justify-center items-center">
          <img src={mailIcon} alt="mail icon"  className="block dark:hidden"/>
          <img src={mailIconDark} alt="mail icon" className="hidden dark:block"/>
          </div>
          <div className="flex flex-col justify-center">
            <p className="dark:text-white text-[#172B4D] font-sans font-[600] text-[13px] leading-[17.7px]">
              Step 3: Email
            </p>
            <div className="flex items-center gap-1">
              <div className="w-[16px] h-[16px]">
                <img src={openedMailIcon} alt="opened mail icon" />
              </div>
              <p className="dark:text-[#B9B9B9] text-[#637381] font-[400] text-[10px] leading-[18px]">
                opened
              </p>
              <p className="dark:text-[#B9B9B9] text-[#637381] font-[600] text-[10px] leading-[18px]">
                5th, Feb
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
