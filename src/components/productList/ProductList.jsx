import React from "react";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
function ProductList({ title, subtitle, books = [] }) {
  if (books.length)
    return (
      <div className="flex flex-col gap-2">
        <div className="w-8 h-[3px] bg-[#FF9619]"></div>
        <div className="flex flex-col mb-3">
          <span className="text-[#303842] text-[16px] font-[rokh-semibold] text-right">
            {subtitle}
          </span>
          <Link
            to={"/categorie"}
            className=" text-[#303842] text-[22px] font-[rokh-bold] text-right">
            {title}
          </Link>
        </div>
        <div className="w-full overflow-x-scroll flex justify-between items-center gap-5">
          {books.map((book) => (
            <ProductItem
              key={Math.random()
                .toString(36)
                .substring(2, 4 + 2)}
              id={book.id}
              title={book.title}
              writer={book.writer}
              price={book.price}
              cover={book.image_src}></ProductItem>
          ))}
        </div>
      </div>
    );
}

export default ProductList;
