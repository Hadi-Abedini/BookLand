import React, { useState } from "react";
import { Spinner } from "flowbite-react";

import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllProduct from "../../../Api/GetAllProduct";
import Pagination from "../../../components/Pagination/Pagination";
import PopUpModal from "../../../components/Modal/DeleteModal";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import DefulltModal from "../../../components/Modal/AddModal";
import EditProductModal from "../../../components/Modal/EditProductModal";
import { useEffect } from "react";

function Products() {
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
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: products,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: () => getAllProduct(page),
  });

  useEffect(() => {
    if (isSuccess && !products.data.data.products.length && page > 1) {
      setPage(page - 1);
      queryClient.invalidateQueries(["products", { page }]);
    }
  }, [products]);

  const totallPages = isSuccess ? products.data.total_pages : 0;
  const data = isSuccess
    ? products.data.data.products.map((product) => ({
        col1: (
          <img
            className="w-7 h-[41.44px]"
            src={`http://localhost:8000/images/products/images/${product.images}`}
            alt="product-image"
          />
        ),
        col2: product.name,
        col3: `${product.category.name}/${product.subcategory.name}`,
        col4: (
          <div className="flex gap-2">
            <EditProductModal id={product._id} />
            <PopUpModal name={product.name} id={product._id} />
          </div>
        ),
      }))
    : [];

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

  return (
    <div className="w-3/5 flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <span className="text-2xl font-[rokh-bold]">
          {textContent.products_title}
        </span>
        <DefulltModal title={textContent.products_addBtn}></DefulltModal>
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
