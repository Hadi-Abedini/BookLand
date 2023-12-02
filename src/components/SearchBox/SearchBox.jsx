import React from "react";
import textContent from "../../constants/string";
import SearchForm from "./SearchForm";
function SearchBox() {
  return (
    <div className="w-full flex flex-col bg-[#FAF9FE] rounded-lg px-3 py-6 gap-10 ">
      <div className="flex flex-row items-center gap-3">
        <div className="w-8 h-[3px] bg-[#FF9619]"></div>
        <span className="text-[#303842] text-[22px] font-[rokh-bold] text-right">
          {textContent.search_title}
        </span>
      </div>
      <SearchForm />
    </div>
  );
}

export default SearchBox;
