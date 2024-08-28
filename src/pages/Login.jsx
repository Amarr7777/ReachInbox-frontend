import React from "react";
import LoginHeader from "../components/login/LoginHeader";
import LoginFooter from "../components/login/LoginFooter";
import LoginCard from "../components/login/LoginCard";

function Login() {

  return (
    <div className="h-svh bg-black">
      <LoginHeader />
      <LoginCard/>
      <LoginFooter />
    </div>
  );
}

export default Login;
