import React from "react";
import { Link, useParams } from "react-router-dom";

function PaymentStatus() {
  const { status } = useParams();
  return status === "success" ? (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="flex gap-4 justify-center items-center">
        <i
          className="fa fa-check-circle"
          style={{ fontSize: 100 + "px", color: "green" }}></i>
        <p className="text-lg">پرداخت با موفقیت انجام شد منتظر تماس ما باشید</p>
      </div>
      <Link to={"/"} className="text-blue-700 hover:underline">
        رفتن به صفحه اصلی
      </Link>
    </div>
  ) : (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="flex gap-4 justify-center items-center">
        <i
          className="fa fa-exclamation-circle"
          style={{ fontSize: 100 + "px", color: "red" }}></i>

        <p className="text-lg">
          پرداخت با شکست مواجه شد سفارش شما در انتظار پرداخت است
        </p>
      </div>
      <Link to={"/"} className="text-blue-700 hover:underline">
        رفتن به صفحه اصلی
      </Link>
    </div>
  );
}

export default PaymentStatus;
