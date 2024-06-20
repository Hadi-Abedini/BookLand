import React from "react";
import { Link } from "react-router-dom";

import textContent from "../../constants/string";
import userIcon from "../../assets/icons/user-icon.svg";

function HeaderLoginBtn() {
  return (
    <Link
      to={"/login"}
      className={`w-fit flex items-center gap-2 bg-[#A2DFA2] px-4 py-[12px] rounded-lg `}>
      <img className="w-6" src={userIcon} alt="user" />
      <span className="text-[#303842] font-[sans-semibold]">
        {textContent.header_btn}
      </span>
    </Link>
  );
}

export default HeaderLoginBtn;
