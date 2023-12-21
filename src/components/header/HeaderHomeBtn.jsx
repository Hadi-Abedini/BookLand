import React from "react";
import { Link } from "react-router-dom";

import mainLogo from "../../assets/icons/logo.png";
import textContent from "../../constants/string";

function HeaderHomeBtn() {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <img className="w-16" src={mainLogo} alt="logo" />
      <div className="flex flex-col text-right">
        <span className="text-[#FF9619] text-[22px] font-[rokh-bold]">
          {textContent.header_title}
        </span>
        <span className="text-[#F2F2F2] text-[11px] font-[rokh-bold]">
          {textContent.header_subtitle}
        </span>
      </div>
    </Link>
  );
}

export default HeaderHomeBtn;
