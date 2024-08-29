import React, { useEffect, useState } from "react";
import EmailViewHeader from "./EmailViewHeader";
import EmailViewCard from "./EmailViewCard";
import { useSelector } from "react-redux";
import axios from "axios";
import ReplyIcon from "@mui/icons-material/Reply";
import ExpandIcon from "@mui/icons-material/Expand";

function EmailView() {
  const threadId = useSelector((state) => state.email.threadId);
  const [emailChat, setEmailChat] = useState([]);
  const [emailChatZero, setEmailChatZero] = useState([]);
  const [showFull, setShowFull] = useState(false);
  // const token = useSelector((state) => state.auth.token);
  const token = localStorage.getItem("authToken");

  const fetchEmails = async () => {
    try {
      const response = await axios.get(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Emails:", response.data.data);
        setEmailChat(response.data.data);
        setEmailChatZero(response.data.data[0]);
      } else {
        console.error("Failed to fetch emails");
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  useEffect(() => {
    if (threadId) {
      fetchEmails();
    }
  }, [threadId]);

  return (
    <div>
      <EmailViewHeader emailChat={emailChat} />
      <div className="flex flex-col justify-center items-center gap-8 pt-8 ">
        {!showFull ? (
          <div className="flex flex-col gap-[8px]">
            <EmailViewCard key={emailChatZero.id} email={emailChatZero} />
            <span className="flex items-center w-full p-[4px]">
              <span className="h-px flex-1 dark:bg-[rgba(248,250,252,0.2)] bg-[rgba(119,119,119,0.2)] w-full"></span>
              <span 
              onClick = {()=>{setShowFull(true)}}
              className="cursor-pointer flex justify-evenly items-center gap-[4px] shrink-0 rounded-[4px] p-[4px] bg-[#EEF1F4]   dark:bg-[#171819] text-[#637381] dark:text-white font-sans font-[600] text-[10px] leading-[13.62px]">
                <ExpandIcon className="text-[#AEAEAE] w-[9.6px] h-[12px]" />
                View all 
                  <span className="text-[#4285F4]">
                    {emailChat.length - 1}
                  </span> 
                  replies
              </span>
              <span className="h-px flex-1 dark:bg-[rgba(248,250,252,0.2)] bg-[rgba(119,119,119,0.2)] w-full"></span>
            </span>
          </div>
        ) : (
          emailChat.map((email) => (
            <EmailViewCard key={email.id} email={email} />
          ))
        )}
        <div className=" md:w-[753px]">
          <button className="flex items-center justify-center gap-[10px] w-max h-max py-[13px] px-[35px] rounded-[4px] bg-gradient-to-r from-[#4B63DD] to-[rgba(5,36,191,0.9)]">
            <ReplyIcon className="text-[#F6F6F6]" />
            <p className="font-sans font-[600] text-[14px] leading-[21.7px] text-white">
              Reply
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailView;
