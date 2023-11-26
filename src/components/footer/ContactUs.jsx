import React from "react";
import textContent from "../../constants/string";

function ContactUs() {
  return (
    <div className="w-1/3 flex flex-col gap-4">
      <span className="text-[#FF9619] text-[24px] font-[rokh-bold]">
        {textContent.contact_us_title}
      </span>
      <div className="flex gap-2">
        <img src="src/assets/icons/location-icon.svg" alt="location" />
        <span className="text-white text-[16px] font-[sans-regular]">
          آدرس: {textContent.contact_us_addres}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <img src="src/assets/icons/phone-icon.svg" alt="phone" />
        <span className="text-white text-[16px] font-[sans-regular]">
          تلفن: {textContent.contact_us_phone}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <img src="src/assets/icons/mail-icon.svg" alt="mail" />
        <span className="text-white text-[16px] font-[sans-regular]">
          ایمیل: {textContent.contact_us_email}
        </span>
      </div>
    </div>
  );
}

export default ContactUs;
