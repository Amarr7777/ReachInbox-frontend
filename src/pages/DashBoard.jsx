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
  const handleshowEmailViewOnDelete = () => {
    !showEmailView ? setShowEmailView(true) : setShowEmailView(false);
  };

  async function fetchEmails() {
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setEmails(response.data.data);
      } else {
        console.error("Failed to fetch emails");
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  }

  useEffect(() => {
    if (!token) {
      navigation.navigate("/");
    } else {
      fetchEmails();
    }
  }, [token, navigation]);

  return (
    <div class="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header handleTheme={handleTheme} />
        <div className="h-full w-full flex dark:bg-black bg-white">
          <div>
            <Inbox
              handleshowEmailView={handleshowEmailView}
              emails={emails}
              onReset={fetchEmails}
            />
          </div>
          <div className="w-full">
            {showEmailView ? (
              <EmailView
                onDelete={fetchEmails}
                handleshowEmailView={handleshowEmailView}
                handleshowEmailViewOnDelete = {handleshowEmailViewOnDelete}
              />
            ) : null}
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
