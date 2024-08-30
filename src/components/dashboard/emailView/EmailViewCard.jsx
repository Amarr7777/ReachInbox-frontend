import React from "react";
import { useDispatch } from "react-redux";
import { setEmailDetails } from "../../../redux/emailSlice";

function EmailViewCard({ email }) {
  const dispatch = useDispatch();
  // dispatch(
  //   setEmailDetails({
  //     fromName: email.fromName,
  //     fromEmail: email.fromEmail,
  //     sentAt: email.sentAt,
  //   })
  // );

  function formatDate(sentAt) {
    const now = new Date();
    const sentDate = new Date(sentAt);
    now.setHours(0, 0, 0, 0);
    sentDate.setHours(0, 0, 0, 0);
    const diffInDays = (now - sentDate) / (1000 * 60 * 60 * 24);

    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else {
      const options = { month: "short", day: "numeric" };
      return sentDate.toLocaleDateString(undefined, options);
    }
  }

  function formatDateTime(sentAt) {
    const sentDate = new Date(sentAt);
    const dateOptions = { day: "2-digit", month: "long", year: "numeric" };
    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    const formattedDate = sentDate.toLocaleDateString(undefined, dateOptions);
    const formattedTime = sentDate.toLocaleTimeString(undefined, timeOptions);
    return `${formattedDate} : ${formattedTime.toUpperCase()}`;
  }

  
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="flex items-center w-full p-[4px]">
        <span className="h-px flex-1 dark:bg-[rgba(248,250,252,0.2)] bg-[rgba(119,119,119,0.2)] w-full"></span>
        <span className="shrink-0 rounded-[4px] p-[4px] bg-[#EEF1F4]   dark:bg-[#171819] text-[#637381] dark:text-white font-sans font-[600] text-[10px] leading-[13.62px]">
          {formatDate(email.sentAt)}
        </span>
        <span className="h-px flex-1 dark:bg-[rgba(248,250,252,0.2)] bg-[rgba(119,119,119,0.2)] w-full"></span>
      </span>
      {/* card */}
      <div className="flex flex-col justify-between w-[753px] h-[236px] border dark:border-[#343A40] dark:bg-[#141517] px-[16px] py-[12px] gap-1 rounded-[4px]">
        {/* header */}
        <div>
          {/* line 1 */}
          <div className="flex items-center justify-between ">
            <p className="font-sans font-[600] text-[14px] leading-[19.07px] dark:text-[#F8FAFC] text-black">
              {email.subject}
            </p>
            <p className="font-sans font-[400] text-[14px] leading-[16.71px] dark:text-[#7F7F7F] text-[#637381]">
              {formatDateTime(email.sentAt)}
            </p>
          </div>
          {/* line 2 */}
          <div className="flex items-center justify-start">
            <p className="font-sans font-[400] text-[14px] leading-[16.71px] dark:text-[#AEAEAE] text-[#637381]">
              from : {email.fromEmail} cc : {email.cc}
            </p>
          </div>
          {/* line 3 */}
          <div className="flex items-center justify-start">
            <p className="font-sans font-[400] text-[14px] leading-[16.71px] dark:text-[#AEAEAE]">
              to : {email.toEmail}
            </p>
          </div>
        </div>
        {/* message */}
        <div className="flex items-center justify-start">
          <p
            className="font-sans font-[400] text-[14px] leading-[19.07px] tracking-[-0.02em] text-left dark:text-[#E1E0E0] text-[#172B4D] max-w-[500px]"
            dangerouslySetInnerHTML={{ __html: email.body }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default EmailViewCard;
