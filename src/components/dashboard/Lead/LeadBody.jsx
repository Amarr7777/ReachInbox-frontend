import React from "react";
import { useSelector } from "react-redux";

function LeadBody() {
  const { fromName, fromEmail,sentAt } = useSelector((state) => state.email);
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] px-[2px] py-[8px] w-full">
      {/* line 1 */}
      <div className="flex justify-between items-center w-full bg-transparent px-[12px] py-[8px]">
        <p className="text-[#637381] dark:text-[#FFFFFF] font-[400] text-[12px] leading-[14.52px]">
          Name
        </p>
        <p className="text-black dark:text-[#B9B9B9] font-[400] text-[14px] leading-[16.94px]">
          {fromName}
        </p>
      </div>
      {/* line 2 */}

      <div className="flex justify-between items-center w-full bg-transparent px-[12px] py-[8px]">
        <p className="text-[#637381] dark:text-[#FFFFFF] font-[400] text-[12px] leading-[14.52px]">
          Contact No
        </p>
        <p className="text-black dark:text-[#B9B9B9] font-[400] text-[14px] leading-[16.94px]">
        +54-9062827869
        </p>
      </div>
      {/* line 3 */}
      <div className="flex justify-between items-center w-full bg-transparent px-[12px] py-[8px]">
        <p className="text-[#637381] dark:text-[#FFFFFF] font-[400] text-[12px] leading-[14.52px]">
          Email ID
        </p>
        <p className="text-black dark:text-[#B9B9B9] font-[400] text-[14px] leading-[16.94px]">
        {fromEmail}
        </p>
      </div>
      {/* line 4 */}
      <div className="flex justify-between items-center w-full bg-transparent px-[12px] py-[8px]">
        <p className="text-[#637381] dark:text-[#FFFFFF] font-[400] text-[12px] leading-[14.52px]">
          LinkedIn
        </p>
        <p className="text-black dark:text-[#B9B9B9] font-[400] text-[14px] leading-[16.94px]">
        linkedin.com/in/timvadde/
        </p>
      </div>
      {/* line 5 */}
      <div className="flex justify-between items-center w-full bg-transparent px-[12px] py-[8px]">
        <p className="text-[#637381] dark:text-[#FFFFFF] font-[400] text-[12px] leading-[14.52px]">
          Company Name
        </p>
        <p className="text-black dark:text-[#B9B9B9] font-[400] text-[14px] leading-[16.94px]">
        Reachinbox
        </p>
      </div>
    </div>
  );
}

export default LeadBody;
