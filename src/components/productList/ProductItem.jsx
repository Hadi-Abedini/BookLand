import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ title, writer, price, cover, id }) {
  return (
    <Link
      to={`product/${id}`}
      className="w-1/4 flex flex-col bg-white p-3 gap-2 rounded-lg hover:drop-shadow-2xl">
      <div to={`product/${id}`} className="bg-[#F5F5F5] px-6 py-3 rounded-sm">
        <img className="w-[150px] aspect-auto h-[222px]" src={cover} alt="cover" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="w-full line-clamp-1 font-[sans-semibold]">
          {title}
        </span>
        <span className="text-[#303842]  text-sm font-[sans-regular]">
          {writer}
        </span>
      </div>
      <div className="flex flex-row items-center justify-end">
        <span className=" text-right font-[sans-semibold]">{price} تومان</span>
      </div>
    </Link>
  );
}

export default ProductItem;
