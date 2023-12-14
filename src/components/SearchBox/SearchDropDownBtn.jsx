import React from "react";

function SearchDropDownBtn({ id, text, optionList, value, onChange }) {
  return (
    <select
      id={id}
      className="w-full text-right font-[sans-regular] bg-[#E8E8F4] text-[13px] rounded-lg py-[6px] pr-2 border-0 focus:border-0 focus:ring-0"
      onChange={onChange}
      required
      defaultValue={value}  // افزودن این ویژگی برای تعیین مقدار انتخابی
    >
      <option disabled hidden className="text-white">
        {text}
      </option>
      {optionList &&
        optionList.map((option) => (
          <option
            className="bg-[#FAF9FE]"
            value={option._id}
            key={option._id}
          >
            {option.name}
          </option>
        ))}
    </select>
  );
}

export default SearchDropDownBtn;
