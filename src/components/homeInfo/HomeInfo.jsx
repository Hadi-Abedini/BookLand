import React from "react";
import InfoCard from "./InfoCard";
import textContent from "../../constants/string";

function HomeInfo() {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <InfoCard
        title={textContent.info_title1}
        subtitle={textContent.info_sub_title1}
        iconSrc={textContent.info_icon1}
      />
      <InfoCard
        title={textContent.info_title2}
        subtitle={textContent.info_sub_title2}
        iconSrc={textContent.info_icon2}
      />
      <InfoCard
        title={textContent.info_title3}
        subtitle={textContent.info_sub_title3}
        iconSrc={textContent.info_icon3}
      />
    </div>
  );
}

export default HomeInfo;
