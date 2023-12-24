import React from "react";

function DatePickerInput({ onFocus, value, onChange }) {
  return (
    <input
      className="w-full text-right font-[sans-regular] bg-[#E8E8F4] rounded-lg px-[6px] py-[8.25px] border-0 text-[13px] focus:border-0 focus:outline-none focus:ring-0 placeholder:text-black"
      onFocus={onFocus}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default DatePickerInput;
