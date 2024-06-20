import React from "react";

function InfoCard({ title, subtitle, iconSrc }) {
  return (
    <div className="w-full flex gap-2 rounded-lg hover:bg-white hover:cursor-pointer justify-center items-center p-3 ">
      <div className="bg-[#D4EED7] rounded-full p-4">
        <img className="w-10" src={iconSrc} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#303842] font-[sans-bold] text-right">
          {title}
        </span>
        <span className="text-[#303842] font-[sans-semibold] text-right">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default InfoCard;
