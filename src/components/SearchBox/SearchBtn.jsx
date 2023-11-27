import React from "react";

function SearchBtn({ text }) {
  return (
    <button
      type="submit"
      className="w-1/4 bg-[#4B429F] rounded-lg py-3 text-white font-[sans-regular]">
      {text}
    </button>
  );
}

export default SearchBtn;
