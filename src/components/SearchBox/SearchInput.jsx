import React from "react";

function SearchInput({ placeholder, id, onChange, type = "text" }) {
  return (
    <input
      type={type}
      min={1}
      name={id}
      className="w-full text-right font-[sans-regular] bg-[#E8E8F4] rounded-lg p-[6px] border-0 text-[13px] focus:border-0 focus:ring-0 placeholder:text-black"
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
}

export default SearchInput;
