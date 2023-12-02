import React from "react";

import HeaderLoginBtn from "./HeaderLoginBtn";
import HeaderCartBtn from "./HeaderCartBtn";
import HeaderHomeBtn from "./HeaderHomeBtn";

function Header() {
  return (
    <div className={`w-full flex justify-between px-6 py-3 bg-[#4B429F]`}>
      <HeaderHomeBtn />
      <div className="flex items-center gap-4">
        <HeaderCartBtn />
        <HeaderLoginBtn />
      </div>
    </div>
  );
}

export default Header;
