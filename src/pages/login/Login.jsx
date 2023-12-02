import React from "react";
import textContent from "../../constants/string";
import LoginInput from "../../components/login/loginInput/LoginInput";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-[#E8E8F4]">
      <div className="w-[350px] flex gap-2 flex-col justify-start p-5 rounded-lg bg-[#4B429F]">
        <Link
          to={"/"}
          className="flex flex-col justify-center items-center text-right">
          <span className="text-[#FF9619] text-[16px] font-[rokh-bold]">
            {textContent.header_title}
          </span>
          <span className="text-[#F2F2F2] text-[9px] font-[rokh-bold]">
            {textContent.header_subtitle}
          </span>
        </Link>
        <div className="flex flex-col my-3 gap-1">
          <span className="text-[#FF9619] text-[20px] font-[rokh-bold]">
            {textContent.login_title}
          </span>
          <p className="text-[#F2F2F2] text-[12px] font-[sans-regular]">
            سلام!
            <br />
            {textContent.login_subtitle}
          </p>
        </div>
        <form
          onSubmit={() => {
            console.log("login");
          }}
          className="flex flex-col justify-center items-center gap-3">
          <LoginInput type={"text"} placeholder={textContent.login_username} />
          <LoginInput
            type={"password"}
            placeholder={textContent.login_password}
          />
          <button
            type="submit"
            className={`w-full text-center text-base gap-2 bg-[#E5D1FA] p-2 mt-3 rounded-lg text-[#303842] font-[sans-semibold] `}>
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
