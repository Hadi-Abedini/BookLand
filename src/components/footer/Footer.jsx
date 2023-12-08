import React from "react";
import textContent from "../../constants/string";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Copyright from "./Copyright";
import mainLogo from "../../assets/icons/logo.png";

function Footer() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col  justify-center items-center bg-[#303842] pt-3 px-6 py-12">
        <div className="flex justify-center items-center">
          <img className="w-16" src={mainLogo} alt="logo" />
          <span className="text-[#FF9619] text-[26px] font-[rokh-bold]">
            {textContent.website_title}
          </span>
        </div>
        <div className="w-[75%] h-[1px] bg-[#525962] mb-10 mt-6"></div>
        <div className="w-full flex flex-row-reverse justify-between">
          <ContactUs />
          <AboutUs />
        </div>
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
