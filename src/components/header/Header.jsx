import React from "react";

import HeaderLoginBtn from "./HeaderLoginBtn";
import HeaderCartBtn from "./HeaderCartBtn";
import HeaderHomeBtn from "./HeaderHomeBtn";
import { Link } from "react-router-dom";
import textContent from "../../constants/string";

function Header() {
  return (
    <div className={`w-full flex justify-between px-6 py-3 bg-[#429F4B]`}>
      <HeaderHomeBtn />
      <div className="flex items-center gap-4">
        <HeaderCartBtn />
        <Link
        to={"/categorie"}
        className={`w-fit flex items-center gap-2 bg-[#A2DFA2] px-4 py-[12px] rounded-lg `}
      >
        <span className="text-[#303842] font-[sans-semibold]">
          {textContent.categorie}
        </span>
      </Link>
        <HeaderLoginBtn />
      </div>
    </div>
  );
}

export default Header;
