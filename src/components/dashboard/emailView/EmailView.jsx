import React from "react";
import EmailViewHeader from "./EmailViewHeader";
import EmailViewCard from "./EmailViewCard";

function EmailView() {
  return (
    <>
      <EmailViewHeader />
      <div className="flex flex-col justify-center items-center gap-8 pt-8">
        <EmailViewCard />
        <EmailViewCard />
      </div>
    </>
  );
}

export default EmailView;
