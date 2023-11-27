import React from "react";

function SearchInput({ placeholder, id }) {
  return (
    <input
    type="text"
    name={id}
    className="w-full text-right font-[sans-regular] bg-[#E8E8F4] rounded-lg p-4 border-0 focus:border-0 focus:ring-0 placeholder:text-[#8F8F8F]"
    placeholder={placeholder}
  />
  );
}

export default SearchInput;
