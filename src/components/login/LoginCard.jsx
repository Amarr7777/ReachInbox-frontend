import React, { useEffect } from "react";
import googleLogo from "../../assets/google.svg";
import axios from "axios";

function LoginCard() {
  const handleLogin = () => {
    const clientId = '55968650598-ge128kr3vnl9vibj269u9bnvdcjd4hlt.apps.googleusercontent.com'; // Replace with your Google client ID
    const redirectUri = 'http://localhost:5173/onebox'; // The URL to which Google will redirect after login
    const scope = 'profile email';
    const state = encodeURIComponent(JSON.stringify({ redirectTo: 'http://localhost:5173/onebox' }));
  
    // Redirect to Google's OAuth 2.0 server
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&state=${state}&client_id=${clientId}`;
  };

  return (
    <div className="flex flex-auto justify-center items-center h-[663px] w-full px-[59px] py-[29px]">
      <div className="h-max min-h-[312px] px-[40px] w-auto max-w-[460px] flex flex-1 flex-col gap-[48px] rounded-[17px] border border-[#343A40] justify-evenly items-center bg-gradient-to-r from-[#111214] to-[#121212]">
        <div className="h-auto min-h-[103px] w-full flex flex-col gap-[32px] ">
          <p className="font-sans font-[600] text-[20px] leading-[31px] text-center text-white">
            Create a new account
          </p>
          <button
            onClick={handleLogin}
            className="border border-[#343A40] flex h-[48px] rounded-[4px] cursor-pointer hover:shadow-sm hover:shadow-gray-500 justify-center items-center"
          >
            <div className="flex justify-center items-center w-full gap-[12px]">
              <div className="w-[23.5px] h-[32px] pt-[5px]">
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className="w-[16px] h-[21px]"
                />
              </div>
              <div>
                <p className="font-sans font-[400] text-[#CCCCCC] text-[16px] text-center leading-[26.1px]">
                  Sign Up with Google
                </p>
              </div>
            </div>
          </button>
        </div>
        {/* create account button */}
        <div className="flex flex-col gap-[24px] justify-center items-center">
          <button className="w-[195px] h-[48px] py-[13px] px-[35px] rounded-[4px] bg-gradient-to-r from-[#4B63DD] to-[rgba(5,36,191,0.9)]">
            <p className="font-sans font-[600] text-[14px] leading-[21.7px] text-white">
              Create an Account
            </p>
          </button>
          <div className="flex flex-col justify-center items-center">
            <p className="font-sans font-[400] text-[16px] text-center text-[#909296]">
              Already have an account?{" "}
              <span className="font-sans font-[400] text-[16px] text-center text-[#C1C2C5] cursor-pointer">
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;