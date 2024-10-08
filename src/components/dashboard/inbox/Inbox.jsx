import React, { useState } from "react";
import replayButton from "../../../assets/replay.svg";
import replayLightButton from "../../../assets/replayLight.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailCard from "./MailCard";
import axios from "axios";

function Inbox({ handleshowEmailView, emails, onReset }) {
  const [searchQuery, setSearchQuery] = useState("");

  const headerHeight = 68;
  const searchHeight = 64;
  const additionalHeight = 76;
  const contentHeight = `calc(100vh - ${
    headerHeight + searchHeight + additionalHeight
  }px)`;

  const handleReset = async () => {
    const token = localStorage.getItem("authToken");

    try {
      await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onReset();
    } catch (error) {
      console.error("Error resetting inbox:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmails = emails.filter(
    (email) =>
      email.fromEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full w-max bg-transparent border-r border-[#E0E0E0] dark:border-[#33383F] px-5 py-2 flex flex-col gap-[8px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-sans font-[700] text-[20px] leading-[27.4px] text-[#4285F4]">
            All Inbox(s)
          </p>
          <p className="font-sans font-[700] text-[14px] leading-[19.07px] dark:text-white text-black">
            25/25{" "}
            <span className="font-sans font-[400] text-[14px] leading-[19.07px] text-[#7F7F7F]">
              Inboxes selected
            </span>
          </p>
        </div>
        <button
          onClick={handleReset}
          className="border dark:border-0 border-[#DFE3E8] dark:bg-[#25262B] p-[8px] w-[32px] h-[32px] rounded-[4px] flex justify-center items-center hover:scale-105"
        >
          <img src={replayButton} className="hidden dark:block" />
          <img src={replayLightButton} className="block dark:hidden" />
        </button>
      </div>
      {/* search */}
      <div className="flex items-center justify-start py-[4px] px-[6px] bg-[rgba(244,246,248,1)] dark:bg-[#23272C] border border-[#DFE3E8] dark:border-[rgba(225,225,225,0.1)] rounded-[4px]">
        <SearchIcon className="-hue-rotate-90 text-[#172B4D] dark:text-[rgba(225,225,225,0.2)]" />
        <input
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search"
          className="w-full h-[28px] bg-transparent font-sans font-[400] text-[14px] leading-[20px] focus:outline-none focus:ring-0 text-gray-400"
        />
      </div>
      {/* after search */}
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-[4px] justify-center items-center">
          <div className="w-[34px] h-[26px] rounded-[17px] px-[8px] py-[3px] bg-[#ECECEC] dark:bg-[#222426]">
            <p className="font-[600] text-[14px] leading-[20px] text-[#5C7CFA]">
              26
            </p>
          </div>
          <p className="font-[600] text-[14px] leading-[20px] text-[#172B4D] dark:text-[#E6E6E6]">
            New Replies
          </p>
        </div>
        <div className="flex justify-center items-center gap-[16px]">
          <p className="font-[600] text-[14px] leading-[20px] text-[#172B4D] dark:text-[#E6E6E6]">
            Newest
          </p>
          <KeyboardArrowDownIcon className="text-[#172B4D] dark:text-[#E6E6E6]" />
        </div>
      </div>
      {/* card */}
      <div
        style={{ height: contentHeight }}
        className="flex flex-col justify-start items-center overflow-y-scroll pt-2"
      >
        {filteredEmails.map((email) => (
          <MailCard
            key={email.id}
            email={email}
            handleshowEmailView={handleshowEmailView}
          />
        ))}
      </div>
    </div>
  );
}

export default Inbox;