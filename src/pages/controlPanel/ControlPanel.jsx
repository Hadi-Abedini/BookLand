import React from "react";
import { Outlet } from "react-router-dom";

function ControlPanel() {
  return (
    <>
      <div>ControlPanel</div>
      <Outlet></Outlet>
    </>
  );
}

export default ControlPanel;
