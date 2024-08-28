import React from "react";
import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";

function DashBoard({handleTheme}) {
  return (
    <div class="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header handleTheme = {handleTheme}/>
        <div className="h-full dark:bg-black bg-white"></div>
      </div>
    </div>
  );
}

export default DashBoard;
