import React from "react";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

function ProductList({ category, title, books = [] }) {
  const itemsPerCategory = 5;

  if (books.length) {
    return (
      <div className="flex flex-col gap-2">
        <div className="w-8 h-[3px] bg-[#FF9619]"></div>
        <div className="flex flex-col mb-3">
          <Link
            to={`/categorie/${category}/category`}
            className="text-[#303842] text-[22px] font-[rokh-bold] text-right">
            {title}
          </Link>
        </div>
        <div className="w-full overflow-x-scroll flex justify-start items-center gap-5">
          {books.slice(0, itemsPerCategory).map((book) => (
            <ProductItem
              key={Math.random()
                .toString(36)
                .substring(2, 4 + 2)}
              id={book._id}
              title={book.name}
              writer={book.writer}
              price={book.price}
              cover={book.images[0]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
