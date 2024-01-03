import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import textContent from "../../constants/string";
import axios from "axios";
import isTokenExpired from "../../utils/isTokenExpired";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("نام کاربری الزامی است"),
  password: Yup.string().required("رمز عبور الزامی است"),
});

const notifySuccess = () => toast.success("با موففقیت وارد شدید.");
const notifyUnsuccess = () => toast.error("نام کاربری یا رمز عبور اشتباه است");

function Login() {
  const storedToken = localStorage.getItem("token");
  const decodedToken = storedToken ? jwtDecode(storedToken) : "";
  if (!isTokenExpired(decodedToken.exp)) {
    window.location.href = "/control-panel/order";
    return null;
  }
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
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const { username, password } = values;

              const response = await axios.post(
                "https://clean-bat-cape.cyclic.app/api/auth/login",
                {
                  username: username,
                  password: password,
                }
              );

              if (response.status === 200) {
                const { accessToken } = response.data.token;
                localStorage.setItem("token", accessToken);
                notifySuccess();
                window.location.href = "/control-panel/order";
              }
            } catch (error) {
              notifyUnsuccess();
            }

            setSubmitting(false);
          }}>
          {({ isSubmitting }) => (
            <Form className="flex flex-col justify-center items-center gap-3">
              <Field
                type="text"
                name="username"
                className="w-full text-left placeholder:text-right text-sm font-[sans-regular] bg-[#E8E8F4] rounded-lg p-2 border-0 focus:border-0 focus:ring-0 placeholder:text-[#8F8F8F]"
                placeholder="نام کاربری"
              />
              <ErrorMessage
                className="text-[12px] text-[#FF9619]"
                name="username"
                component="div"
              />
              <Field
                type="password"
                name="password"
                className="w-full text-left placeholder:text-right text-sm font-[sans-regular] bg-[#E8E8F4] rounded-lg p-2 border-0 focus:border-0 focus:ring-0 placeholder:text-[#8F8F8F]"
                placeholder="رمز عبور"
              />
              <ErrorMessage
                className="text-[12px] text-[#FF9619]"
                name="password"
                component="div"
              />
              <button
                className="w-full text-center text-base gap-2 bg-[#E5D1FA] p-2 mt-3 rounded-lg text-[#303842] font-[sans-semibold] "
                type="submit"
                disabled={isSubmitting}>
                ورود
              </button>
              <Toaster position="top-right" reverseOrder={false} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
