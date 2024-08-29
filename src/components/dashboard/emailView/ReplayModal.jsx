import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LinkIcon from "@mui/icons-material/Link";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import CodeIcon from "@mui/icons-material/Code";
import spellCheck from "../../../assets/spellCheck.svg";
import spellCheckLight from "../../../assets/spellCheckLight.svg";
import { useSelector } from "react-redux";
import axios from "axios";

function ReplayModal({ handleReplyModal }) {
  // const[from,setFrom] = useState("");
  // const[to,setTo] = useState("");
  // const[subject,setSubject] = useState("");
  // const[body,setBody] = useState("");
  const token = localStorage.getItem("authToken");
  const threadId = useSelector((state) => state.email.threadId);

  const handleReply = async () => {
    var raw = JSON.stringify({
        toName: "Mitrajit",
        to: "chandra.rupam@gmail.com",
        from: "mitrajit2022@gmail.com",
        fromName: "Mitrajit",
        subject: "Optimize Your Recruitment Efforts with Expert Support",
        body: "<p>Hello how are you</p>",
        references: [
          "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
          "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
          "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
          "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
        ],
        inReplyTo: "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
      });
      
      var requestOptions = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  };

  return (
    <div className="px-[12px] w-full flex justify-center items-center">
      <div className="flex flex-col justify-start items-center h-[553px] min-w-[752px] w-max bg-gray-100 dark:bg-[#141517] border border-gray-300 dark:border-[#2E3236] rounded-[8px] absolute bottom-0 gap-[8px]">
        {/* line 1 */}
        <div className="bg-gray-300 dark:bg-[#23272C] h-[38px] flex justify-between items-center w-full py-[20px], px-[32px] border dark:border-[#2E3236] rounded-t-[8px]">
          <p className="text-black dark:text-[#BAB9BD] font-[700] text-[12px] leading-[16.34]">
            Reply
          </p>
          <button
            onClick={handleReplyModal}
            className="w-[11.67px] h-[11.67px] flex justify-center items-center"
          >
            <CloseIcon className="dark:text-[#FFFFFF] text-black" />
          </button>
        </div>
        {/* line 2 */}
        <div className="h-[24px] w-full border-b border-gray-300 dark:border-b-[#34383D] px-[32px] py-[4px] flex items-center">
          <p className="dark:text-[#BAB9BD] font-[400] text-[12px] font-sans leading[16.34px]">
            To:
          </p>
          <input
            className="dark:text-[#E7E7E7] font-[400] text-[12px] font-sans leading[16.34px] w-full bg-transparent px-2 focus:outline-none focus:ring-0"
            placeholder="to@icloud.com"
          />
        </div>
        {/* line 3 */}
        <div className="h-[24px] w-full border-b border-gray-300 dark:border-b-[#34383D] px-[32px] py-[4px] flex items-center">
          <p className="dark:text-[#BAB9BD] font-[400] text-[12px] font-sans leading[16.34px]">
            From:
          </p>
          <input
            className="dark:text-[#E7E7E7] font-[400] text-[12px] font-sans leading[16.34px] w-full bg-transparent px-2 focus:outline-none focus:ring-0"
            placeholder="to@icloud.com"
          />
        </div>
        {/* line 4 */}
        <div className="h-[24px] w-full border-b border-gray-300 dark:border-b-[#34383D] px-[32px] py-[4px] flex items-center">
          <p className="dark:text-[#BAB9BD] font-[400] text-[12px] font-sans leading[16.34px]">
            Subject:
          </p>
          <input
            className="dark:text-[#E7E7E7] font-[400] text-[12px] font-sans leading[16.34px] w-full bg-transparent px-2 focus:outline-none focus:ring-0"
            placeholder="subject"
          />
        </div>
        {/* textarea */}
        <textarea
          className="flex-grow font-[400] text-[12px] font-sans leading[16.34px] w-full bg-gray-100 dark:bg-[#141517] dark:text-[#E7E7E7]  rounded-[4px] px-[32px] py-[8px] focus:outline-none focus:ring-0 resize-none"
          placeholder="Type your message here..."
        />
        {/* footer */}
        <div className="h-[54px] w-full border border-gray-300 dark:border-[#2E3236] flex items-center gap-[32px] px-[12px]">
          {/* send btn */}
          <button
            onClick={handleReply}
            className="flex items-center justify-center gap-[10px] w-max h-max py-[8px] px-[20px] rounded-[4px] bg-gradient-to-r from-[#4B63DD] to-[rgba(5,36,191,0.9)]"
          >
            <p className="font-sans font-[600] text-[14px] leading-[21.7px] text-white">
              Send
            </p>
            <ArrowDropDownIcon className="text-white" />
          </button>
          {/* variable */}
          <div className="flex items-center justify-center gap-[8px]">
            <FlashOnIcon className="dark:text-[#ADADAD]" />
            <p className="font-[600] text-[14px] leading-[21.7px] font-sans dark:text-[#ADADAD]">
              Variables
            </p>
          </div>
          {/* preview email */}
          <div className="flex items-center justify-center gap-[8px]">
            <RemoveRedEyeOutlinedIcon className="dark:text-[#ADADAD]" />
            <p className="font-[600] text-[14px] leading-[21.7px] font-sans dark:text-[#ADADAD]">
              Preview Mail
            </p>
          </div>
          {/* icons */}
          <div className="flex gap-[16px]">
            <div className="h-[24px] w-[24px]">
              <img
                src={spellCheck}
                alt="spellcheck"
                className="dark:block hidden"
              />
              <img
                src={spellCheckLight}
                alt="spellcheck"
                className="dark:hidden block"
              />
            </div>
            <div className="flex justify-center items-center gap-[12px]">
              <div className="h-[18px] w-[18px] flex justify-center items-center">
                <LinkIcon className="dark:text-[#ADADAD]" />
              </div>
              <div className="h-[18px] w-[18px] flex justify-center items-center">
                <ImageOutlinedIcon className="dark:text-[#ADADAD]" />
              </div>
              <div className="h-[18px] w-[18px] flex justify-center items-center">
                <SentimentSatisfiedAltIcon className="dark:text-[#ADADAD]" />
              </div>
              <div className="h-[18px] w-[18px] flex justify-center items-center">
                <PersonRemoveIcon className="dark:text-[#ADADAD]" />
              </div>
              <div className="h-[18px] w-[18px] flex justify-center items-center">
                <CodeIcon className="dark:text-[#ADADAD]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReplayModal;
