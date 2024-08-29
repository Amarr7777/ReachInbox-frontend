import React, { useEffect, useState } from "react";
import EmailViewHeader from "./EmailViewHeader";
import EmailViewCard from "./EmailViewCard";
import { useSelector } from "react-redux";
import axios from "axios";

function EmailView() {
  const threadId = useSelector((state) => state.email.threadId);
  const [emailChat, setEmailChat] = useState([]);
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
    <>
      <EmailViewHeader emailChat={emailChat}/>
      <div className="flex flex-col justify-center items-center gap-8 pt-8">
        {emailChat.map((email) => (
          <EmailViewCard 
          key={email.id} 
          email={email}
         
           />
        ))}
      </div>
    </>
  );
}

export default EmailView;
