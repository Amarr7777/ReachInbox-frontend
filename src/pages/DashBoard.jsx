import React, { useEffect, useState } from "react";
import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import axios from "axios";
import Inbox from "../components/dashboard/inbox/Inbox";
import { useNavigate } from "react-router-dom";
import Lead from "../components/dashboard/Lead/Lead";
import EmailView from "../components/dashboard/emailView/EmailView";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/authSlice";

function DashBoard({ handleTheme }) {
  const [emails, setEmails] = useState([]);
  const [showEmailView, setShowEmailView] = useState(false);
  const token = localStorage.getItem("authToken");
  const dispatch = useDispatch();
  dispatch(setToken(token));
  const navigation = useNavigate();

  const handleshowEmailView = () => {
    setShowEmailView(true);
  };

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
            <Inbox handleshowEmailView={handleshowEmailView} />
          </div>
          <div className="w-full">{showEmailView ? <EmailView /> : null}</div>
          <div>
            <Lead />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
