import React, { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";

import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllProduct from "../../../Api/GetAllProduct";
import Pagination from "../../../components/Pagination/Pagination";
import PopUpModal from "../../../components/Modal/PopUpModal";
import { useQuery } from "@tanstack/react-query";

function Products() {
  const [page, setPage] = useState(1);
  const columns = [
    {
      Header: textContent.products_table_header[0],
      accessor: "col1",
    },
    {
      Header: textContent.products_table_header[1],
      accessor: "col2",
    },
    {
      Header: textContent.products_table_header[2],
      accessor: "col3",
    },
    {
      Header: "",
      accessor: "col4",
    },
  ];
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: () => getAllProduct(page),
  });
  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }
  const totallPages = products.data.total_pages;
  const data = products.data.data.products.map((product) => ({
    col1: (
      <img
        className="w-7"
        src={`http://localhost:8000/images/products/images/${product.images}`}
        alt="product-image"
      />
    ),
    col2: product.name,
    col3: `${product.category.name}/${product.subcategory.name}`,
    col4: (
      <div className="flex gap-2">
        <button
          value={product._id}
          onClick={(e) => {
            alert(e.target.value);
          }}
          className="text-blue-700">
          {textContent.products_editBtn}
        </button>
        <PopUpModal name={product.name} id={product._id} />
      </div>
    ),
  }));

  return (
    <div className="w-3/5 flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <span className="text-2xl font-[rokh-bold]">
          {textContent.products_title}
        </span>
        <button
          onClick={() => {
            alert("add");
          }}
          className="px-6 py-2 text-sm bg-[#4B429F] text-white rounded-lg">
          {textContent.products_addBtn}
        </button>
      </div>
      <AdminTable columns={columns} data={data} />
      <Pagination
        currentPage={page}
        totalPages={totallPages}
        setPage={setPage}
      />
    </div>
  );
}

export default Products;
