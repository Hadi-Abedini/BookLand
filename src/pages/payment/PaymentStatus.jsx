import React from "react";
import { useParams } from "react-router-dom";

function PaymentStatus() {
  const { status } = useParams();
  return status === "success" ? (
    <div className="w-full h-[100vh] flex gap-4 justify-center items-center">
      <i
        className="fa fa-check-circle"
        style={{ fontSize: 100 + "px", color: "green" }}></i>
      <p className="text-lg">پرداخت با موفقیت انجام شد منتظر تماس ما باشید</p>
    </div>
  ) : (
    <div className="w-full h-[100vh] flex gap-4 justify-center items-center">
      <i
        className="fa fa-exclamation-circle"
        style={{ fontSize: 100 + "px", color: "red" }}></i>

      <p className="text-lg">پرداخت با شکست مواجه شد سفارش شما در انتظار پرداخت است</p>
    </div>
  );
}

export default PaymentStatus;
