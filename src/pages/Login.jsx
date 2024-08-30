import React, { useEffect } from "react";
import LoginHeader from "../components/login/LoginHeader";
import LoginFooter from "../components/login/LoginFooter";
import LoginCard from "../components/login/LoginCard";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URL Parameters:", urlParams.toString());
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      console.log("Token stored in localStorage:", token);
      navigate("/onebox");
    } 
  }, [navigate]);

  return (
    <div className="h-svh bg-black">
      <LoginHeader />
      <LoginCard />
      <LoginFooter />
    </div>
  );
}

export default Login;
