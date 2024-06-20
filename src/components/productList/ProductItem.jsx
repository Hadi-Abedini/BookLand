import React from "react";
import { Link } from "react-router-dom";
import addCommasToNumber from "../../utils/AddCommasToNumber";

function ProductItem({ title, price, cover, id }) {
  return (
    <Link
      to={`/product/${id}`}
      className="w-1/5 flex flex-col bg-white p-3 gap-2 rounded-lg hover:drop-shadow-2xl"
    >
      <div className="bg-[#F5F5F5] flex justify-center items-center px-6 py-3 rounded-sm">
        <img
          className="w-[150px] aspect-auto h-[222px]"
          src={`http://localhost:8000/images/products/images/${cover}`}
          alt="cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="w-full line-clamp-1 font-[sans-semibold]">
          {title}
        </span>
      </div>
      <div className="flex flex-row items-center justify-end">
        <span className=" text-right font-[sans-semibold]">
          {addCommasToNumber(price / 10)} تومان
        </span>
      </div>
    </Link>
  );
}

export default ProductItem;
