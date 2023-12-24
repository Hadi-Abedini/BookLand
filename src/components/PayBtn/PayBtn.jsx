import { useMutation } from "@tanstack/react-query";
import React from "react";
import addOrder from "../../Api/AddOrder";

function PayBtn() {
  const { mutate } = useMutation({
    mutationFn: (data) => addOrder(data),
    onSuccess: () => {
      console.log("Order added successfully");
    },
  });

  const handlePayment = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    const data = {
      user: "6570c1608d941c0fb1c8f57e",
      products: cart.map((item) => ({
        product: item.productId,
        count: item.count,
      })),
      deliveryStatus: false,
    };

    mutate(data);
    localStorage.removeItem("cart");
  };
  return (
    <button
      onClick={handlePayment}
      to={"/payment-status/success"}
      className="bg-green-500 py-3 px-7 rounded-lg text-white hover:bg-green-400">
      پرداخت
    </button>
  );
}

export default PayBtn;
