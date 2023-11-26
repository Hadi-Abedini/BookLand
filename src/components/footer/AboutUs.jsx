import React from "react";
import textContent from "../../constants/string";

function AboutUs() {
  return (
    <div className="w-1/3 flex flex-col gap-2">
      <span className="text-white text-[24px] font-[rokh-bold]  text-right">
        {textContent.about_us_title}
      </span>
      <p className="text-white text-[14px] font-[sans-regular] text-right">
        {textContent.about_us_content}
      </p>
    </div>
  );
}

export default AboutUs;
