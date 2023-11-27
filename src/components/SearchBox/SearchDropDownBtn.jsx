import React from "react";
import { Dropdown } from "flowbite-react";

function SearchDropDownBtn({
  id,
  text,
  selectedOption,
  setSelectedOption,
  optionList,
}) {
  return (
    <Dropdown
      id={id}
      dismissOnClick={true}
      renderTrigger={() => (
        <div className="w-full flex flex-row justify-between text-right font-[yekan-regular] bg-[#E8E8F4] rounded-lg p-4 border-0 focus:border-0 focus:ring-0">
          <span className="text-[#8F8F8F]">{selectedOption || text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none">
            <path
              d="M18.6194 8.95001L12.7101 15.47C12.0122 16.24 10.8702 16.24 10.1723 15.47L4.26294 8.95001"
              stroke="#4B429F"
              stroke-opacity="0.49"
              stroke-width="2.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
      className="text-right font-[yekan-regular]">
      {optionList.map((option) => (
        <Dropdown.Item
          key={Math.random()
            .toString(36)
            .substring(2, length + 2)}
          onClick={() => setSelectedOption(option)}>
          {option}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}

export default SearchDropDownBtn;
