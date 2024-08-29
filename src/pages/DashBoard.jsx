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
import welcomeImg from "../assets/welcomeImg.svg";

function DashBoard({ handleTheme }) {
  const [emails, setEmails] = useState([]);
  const [showEmailView, setShowEmailView] = useState(false);
  const [index, setIndex] = useState(6);

  const token = localStorage.getItem("authToken");
  const dispatch = useDispatch();
  dispatch(setToken(token));
  const navigate = useNavigate();

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
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      console.log("Token stored in localStorage:", token);
      fetchEmails()
    }else{
      navigate("/")
    }
  }, [navigate,token]);


  return (
    <div class="hidden lg:flex">
      <SideBar setIndex={setIndex} />
      <div className="flex flex-col w-full">
        <Header handleTheme={handleTheme} />
        {index == 6 ? (
          <div className="h-full w-full flex dark:bg-black bg-white">
            <div>
              <Inbox
                handleshowEmailView={handleshowEmailView}
                emails={emails}
                onReset={fetchEmails}
              />
            </div>
            {showEmailView ? (
              <>
                <div className="w-full">
                  <EmailView
                    onDelete={fetchEmails}
                    handleshowEmailView={handleshowEmailView}
                    handleshowEmailViewOnDelete={handleshowEmailViewOnDelete}
                  />
                </div>
                <div>
                  <Lead />
                </div>
              </>
            ) : null}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full gap-5 bg-white dark:bg-black">
            <img src={welcomeImg} alt="welcome image" />
            <p className="font-[700] text-[24px] leading-[36.53px] text-center w-full text-black dark:text-white">
              It's the beginning of a legendary sales pipeline
            </p>
            <p className="font-[500] text-[18px] leading-[27.4px] text-center w-1/5 text-gray-600 dark:text-[#9E9E9E]">
              When you have inbound E-mails you'll see them here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoard;
