import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";

function EmailViewHeader() {
  const { fromName, fromEmail } = useSelector((state) => state.email);
  return (
    <div className="flex justify-between items-center border-b border-b-[#E0E0E0] dark:border-b-[rgba(248,250,252,0.2)] h-[70px] p-[17px]">
      <div className="flex flex-col justify-start items-start">
        <p className="font-[600] text-[14px] leading-[20px] dark:text-white text-[#343A40]">
          {fromName}
        </p>
        <p className="font-[400] text-[12px] leading-[18px] dark:text-[rgba(255,255,255,0.4)] text-[#343A40]">
          {fromEmail}
        </p>
      </div>

      <div className="flex gap-[16px]">
        <div className="w-max dark:bg-[#1F1F1F] border border-[#DFE3E8] bg-white dark:border-[#343A40] rounded-[4px] flex justify-evenly items-center px-[8px] py-[6px] gap-[6px]">
          <div className="w-[12px] h-[12px] flex justify-center items-center rounded-[50px] bg-[#C4ECDA] dark:bg-[#2D3833]">
            <div className="w-[8px] h-[8px] rounded-[50px] bg-[#57E0A6]"></div>
          </div>
          <p className="font-sans font-[600] text-[12px] leading-[18.6px] text-[#172B4D] dark:text-[#D3D7DB]">
            Interested
          </p>
          <KeyboardArrowDownIcon className="text-[#172B4D] dark:text-[#A9AEB4] " />
        </div>
        <div className="w-max dark:bg-[#1F1F1F] border border-[#DFE3E8] bg-white dark:border-[#343A40] rounded-[4px] flex justify-center items-center px-[8px] py-[6px] gap-[6px]">
          <p className="font-sans font-[600] text-[12px] leading-[18.6px] text-[#172B4D] dark:text-[#D3D7DB]">
            More
          </p>
          <KeyboardArrowDownIcon className="dark:text-[#A9AEB4] text-[#172B4D] " />
        </div>
        <div className="w-max dark:bg-[#1F1F1F] border border-[#DFE3E8] bg-white dark:border-[#343A40] rounded-[4px] flex justify-center items-center px-[8px] py-[6px] gap-[6px]">
          <MoreHorizIcon className="dark:text-[#A9AEB4] text-[#172B4D] " />
        </div>
      </div>
    </div>
  );
}

export default EmailViewHeader;
