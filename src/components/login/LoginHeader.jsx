import React from "react";
import logo from "../../assets/logo.svg";

function LoginHeader() {
  return (
    <div className="px-[100px] py-[20px] flex flex-1 justify-center items-center h-[64px] border-0 border-b-[1px] border-[#25262B] bg-[#121212]">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default LoginHeader;
