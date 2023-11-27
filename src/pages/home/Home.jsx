import React from "react";
import { Link } from "react-router-dom";
import HomeInfo from "../../components/homeInfo/HomeInfo";

function Home() {
  return (
    <div className="h-full w-full flex flex-col bg-[#E8E8F4]">
      <Link to={"categorie"}>
        <img
          className="w-full"
          src="src/assets/banner/poster.png"
          alt="banner"
        />
      </Link>
      <div className="w-full flex flex-col justify-center px-[8.25%] gap-10 py-10">
        <HomeInfo></HomeInfo>
      </div>
    </div>
  );
}

export default Home;
