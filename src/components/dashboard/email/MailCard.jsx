import React from "react";
import Tag from "./Tag";

function MailCard() {
  return (
    <div className="border border-b-0 border-l-0 border-r-0 border-t-[rgba(225,225,225,0.5)] px-[12px] py-[8px] flex flex-col gap-[8px] min-h-[100px] h-auto w-full min-w-[225px]">
      <div className="flex justify-between items-center ">
        <p className="font-[500] text-[14px] leading-[20px] dark:text-white text-[#343A40] ">
          Beat@gmail.com
        </p>
        <p className="font-[400] text-[12px] leading-[18px] text-[#919EAB] dark:text-[rgba(252,252,252,0.4)] ">
          Mar 7
        </p>
      </div>
      <p className="font-[400] text-[12px] leading-[18px] dark:text-[#E1E0E0] text-[#172B4D]">
        I've tried a lot and .
      </p>
      <div className="flex justify-start items-center gap-[8px]">
        <Tag/>
        <Tag/>
      </div>
    </div>
  );
}

export default MailCard;
