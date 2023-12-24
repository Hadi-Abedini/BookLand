import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  return <>
  <p></p>
  <div className="w-full h-[100vh] flex gap-9 justify-center items-center">
    <Link to={'/payment-status/success'} className="bg-green-500 py-3 px-7 rounded-lg text-white hover:bg-green-400">پرداخت</Link>
    <Link to={'/payment-status/failure'} className="bg-red-700 py-3 px-7 rounded-lg text-white hover:bg-red-400">انصراف</Link>
  </div>
  </>;
}

export default Payment;
