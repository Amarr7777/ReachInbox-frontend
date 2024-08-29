import React from "react";

function EmailViewCard() {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="flex items-center w-full p-[4px]">
        <span className="h-px flex-1 dark:bg-[rgba(248,250,252,0.2)] bg-[rgba(119,119,119,0.2)] w-full"></span>
        <span className="shrink-0 rounded-[4px] p-[4px] bg-[#EEF1F4]   dark:bg-[#171819] text-[#637381] dark:text-white font-sans font-[600] text-[10px] leading-[13.62px]">
          Yesterday
        </span>
        <span className="h-px flex-1 dark:bg-[rgba(248,250,252,0.2)] bg-[rgba(119,119,119,0.2)] w-full"></span>
      </span>
      {/* card */}
      <div className="flex flex-col justify-between w-[753px] h-[236px] border dark:border-[#343A40] dark:bg-[#141517] px-[16px] py-[12px] gap-1">
        {/* header */}
        <div>
          {/* line 1 */}
          <div className="flex items-center justify-between ">
            <p className="font-sans font-[600] text-[14px] leading-[19.07px] dark:text-[#F8FAFC] text-black">
              New Product Launch
            </p>
            <p className="font-sans font-[400] text-[14px] leading-[16.71px] dark:text-[#7F7F7F] text-[#637381]">
              20 june 2022 : 9:16AM
            </p>
          </div>
          {/* line 2 */}
          <div className="flex items-center justify-start">
            <p className="font-sans font-[400] text-[14px] leading-[16.71px] dark:text-[#AEAEAE] text-[#637381]">
              from : jeanne@icloud.com cc : lennon.j@mail.com
            </p>
          </div>
          {/* line 3 */}
          <div className="flex items-center justify-start">
            <p className="font-sans font-[400] text-[14px] leading-[16.71px] dark:text-[#AEAEAE]">
              to : lennon.j@mail.com
            </p>
          </div>
        </div>
        {/* message */}
        <div className="flex items-center justify-start">
          <p className="font-sans font-[400] text-[14px] leading-[19.07px] tracking-[-0.02em] text-left dark:text-[#E1E0E0] text-[#172B4D] max-w-[500px]">
            Hi FIRST_NAME,
            <br />
            <br />
            <br />I would like to introduce you to SaaSgrow, a productized
            design service specifically tailored for saas startups. Our aim is
            to help you enhance the user experience and boost the visual appeal
            of your software products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailViewCard;
