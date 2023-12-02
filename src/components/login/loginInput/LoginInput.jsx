import React from "react";

function LoginInput({ placeholder, type }) {
  return (
    <input
      type={type}
      name={type}
      className="w-full text-left text-sm font-[sans-regular] bg-[#E8E8F4] rounded-lg p-2 border-0 focus:border-0 focus:ring-0 placeholder:text-[#8F8F8F]"
      placeholder={placeholder}
    />
  );
}

export default LoginInput;
