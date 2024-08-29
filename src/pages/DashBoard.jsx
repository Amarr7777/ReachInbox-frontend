import React, { useEffect, useState } from "react";
import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import axios from "axios";
import Inbox from "../components/dashboard/inbox/Inbox";
import { useNavigate } from "react-router-dom";
import Lead from "../components/dashboard/Lead/Lead";
import EmailView from "../components/dashboard/emailView/EmailView";

function DashBoard({ handleTheme }) {
  const [emails, setEmails] = useState([]);
  const token = localStorage.getItem("authToken"); // Retrieve the token from storage
  const navigation = useNavigate();

  useEffect(() => {
    if (!token) {
      navigation.navigate("/");
    }
  }, [token, navigation]);

  return (
    <div class="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header handleTheme={handleTheme} />
        <div className="h-full w-full flex dark:bg-black bg-white">
          <div>
            <Inbox />
          </div>
          <div className="w-full">
            <EmailView/>
          </div>
          <div>
            <Lead />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
