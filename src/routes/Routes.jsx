import React from "react";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";

function Routes({handleTheme}) {
  return (
    <div>
      {/* <Login /> */}
      <DashBoard handleTheme={handleTheme}/>
    </div>
  );
}

export default Routes;
