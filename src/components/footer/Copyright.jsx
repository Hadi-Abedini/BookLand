import React from "react";
import textContent from "../../constants/string";

function Copyright() {
  return (
    <div className="w-full bg-[#E5D1FA] text-center p-3">
      <span className="text-[14px] font-[sans-semibold]">
        {textContent.copyright}
      </span>
    </div>
  );
}

export default Copyright;
