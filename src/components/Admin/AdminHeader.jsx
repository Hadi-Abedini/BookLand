import React from "react";
import { NavLink, Link } from "react-router-dom";
import textContent from "../../constants/string";
function AdminHeader() {
  return (
    <div
      className={`w-full text-white flex justify-between items-center px-6 py-3 bg-[#4B429F]`}>
      <Link to={"/"} className="flex items-center gap-1">
        <span className="text-[#FF9619] text-[22px] font-[rokh-bold]">
          {textContent.header_title}
        </span>
        <span className="text-[#F2F2F2] text-[13px] font-[sans-bold]">
          ({textContent.adminHeader_title})
        </span>
      </Link>

      <div className="flex items-center">
        <ul className="w-full flex justify-evenly gap-3">
          <li>
            <NavLink
              className={
                "w-fit flex text-sm items-center gap-2 bg-[#E5D1FA] px-4 py-[12px] rounded-lg text-[#303842] font-[sans-semibold]"
              }
              to="/control-panel/products">
              {textContent.adminHeader_navbar[0]}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "w-fit flex text-sm items-center gap-2 bg-[#E5D1FA] px-4 py-[12px] rounded-lg text-[#303842] font-[sans-semibold]"
              }
              to="/control-panel/inventory">
              {textContent.adminHeader_navbar[1]}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "w-fit flex text-sm items-center gap-2 bg-[#E5D1FA] px-4 py-[12px] rounded-lg text-[#303842] font-[sans-semibold]"
              }
              to="/control-panel/order">
              {textContent.adminHeader_navbar[2]}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminHeader;
