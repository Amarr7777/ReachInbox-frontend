import React, { useEffect, useState } from "react";
import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import axios from "axios";

function DashBoard({ handleTheme }) {
   const [emails, setEmails] = useState([]);
   const token = localStorage.getItem('authToken'); // Retrieve the token from storage
 
   useEffect(() => {
     const fetchEmails = async () => {
       try {
         const response = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
           headers: {
             'Authorization': `Bearer ${token}`, // Attach the Bearer token
            //  'Content-Type': 'application/json'
           }
         });
 
         if (response.status === 200) {
           setEmails(response.data); // Assuming the API returns an array of emails
         } else {
           console.error("Failed to fetch emails");
         }
       } catch (error) {
         console.error('Error fetching emails:', error);
       }
     };
 
     fetchEmails();
   }, [token]);
 

  return (
    <div class="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header handleTheme={handleTheme} />
        <div className="h-full dark:bg-black bg-white"></div>
      </div>
    </div>
  );
}

export default DashBoard;
