import React from "react";

function SearchInput({ placeholder, id, onChange }) {
  return (
    <input
      type="text"
      name={id}
      className="w-full text-right font-[sans-regular] bg-[#E8E8F4] rounded-lg p-3 border-0 focus:border-0 focus:ring-0 placeholder:text-black"
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
}

export default SearchInput;
