import React from "react";
import LeadBody from "./LeadBody";
import Activities from "./Activities";

function Lead() {
  return (
    <div className="h-full w-[278px] min-w-max bg-transparent border-l border-[#E0E0E0] dark:border-[#353533] flex flex-col gap-[16px] py-[16px] px-1">
      {/* lead details title */}
      <div className="bg-[#ECEFF3] dark:bg-[#23272C] py-[8px] px-[12px] rounded-[8px]">
        <p className="font-[600] text-[14px] leading-[20px] text-[#454F5B] dark:text-white">
          Lead Details
        </p>
      </div>
      {/* lead details body */}
      <LeadBody />
      {/* Activities */}
      <div className="bg-[#ECEFF3] dark:bg-[#23272C] py-[8px] px-[12px] rounded-[8px]">
        <p className="font-[600] text-[14px] leading-[20px] text-[#454F5B] dark:text-white">
          Activities
        </p>
      </div>
      <Activities/>
    </div>
  );
}

export default Lead;
