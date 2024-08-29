import React, { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch } from "react-redux";
import { setEmailDetails, setThreadId } from "../../../redux/emailSlice";
import sendIconDark from "../../../assets/campIcon.svg";

function MailCard({ email, handleshowEmailView }) {
  const dispatch = useDispatch();
  const dateStr = email.createdAt;
  const date = new Date(dateStr);
  const options = { month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const handleClick = () => {
    handleshowEmailView();
    dispatch(setThreadId(email.threadId));
    console.log("clicked thread", email.threadId);
  };

  var visibility = email.isRead ? "hidden" : "visible";

  return (
    <div
      onClick={handleClick}
      className="relative border border-b-0 border-l-0 border-r-0 border-t-[rgba(225,225,225,0.5)] px-[12px] py-[8px] flex flex-col gap-[8px] min-h-[100px] h-auto w-full min-w-[225px] max-w-[255px] cursor-pointer"
    >
      {/* <div className="absolute w-[8px] h-[8px] bg-[#5C7CFA] rounded-full left-0 flex justify-center items-center"></div> */}
      <div className="flex justify-between items-center ">
        <div
          className={`${visibility} absolute left-0 w-[8px] h-[8px] bg-[#5C7CFA] rounded-full`}
        ></div>
        <p className="font-[500] text-[14px] leading-[20px] dark:text-white text-[#343A40] overflow-hidden ">
          {email.fromEmail}
        </p>
        <p className="font-[400] text-[12px] leading-[18px] text-[#919EAB] dark:text-[rgba(252,252,252,0.4)] ">
          {formattedDate}
        </p>
      </div>
      <p className="font-[400] text-[12px] leading-[18px] dark:text-[#E1E0E0] text-[#172B4D]">
        {email.subject}
      </p>
      <div className="flex justify-start items-center gap-[8px]">
        <Tag/>
        <div className="flex  justify-center items-center gap-[8px]">
          <div className="flex  justify-center items-center gap-[4px] bg-[#F0F0F0] dark:bg-[#222426] rounded-[17px] px-[8px] py-[3px]">
            <div className="w-[12px] h-[12px] flex justify-center items-center rounded-[50px] bg-[#C4ECDA] dark:bg-[#2D3833]">
              <img src={sendIconDark} />
            </div>
            <p className="font-sans font-[600] text-[10px] leading-[13.62px] text-[#FFFFFF]">
              Campaign
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailCard;
