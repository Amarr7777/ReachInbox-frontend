import React, { useEffect, useState } from "react";
import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import axios from "axios";
import Inbox from "../components/dashboard/email/Inbox";

function DashBoard({ handleTheme }) {
  const [emails, setEmails] = useState([]);
  const token = localStorage.getItem("authToken"); // Retrieve the token from storage

  async function fetchEmails() {
    const token = localStorage.getItem("authToken"); // Retrieve the stored token

    try {
      const response = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the Bearer token in the request
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Emails:", response.data); // Handle the response data
      } else {
        console.error("Failed to fetch emails");
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div class="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header handleTheme={handleTheme} />
        <div className="h-full dark:bg-black bg-white">
          <Inbox/>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
