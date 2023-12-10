import React, { useState, useEffect } from "react";

import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllProduct from "../../../Api/GetAllProduct";
import Pagination from "../../../components/Pagination/Pagination";

const fetchData = async (currentPage) => {
  try {
    const result = await getAllProduct(currentPage);
    setData(
      result.data.data.products.map((product) => ({
        col1: (
          <img
            className="w-7"
            src={`http://localhost:8000/images/products/images/${product.images}`}
            alt="image"
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
            <button
              value={product._id}
              onClick={(e) => {
                alert(e.target.value);
              }}
              className="text-blue-700">
              {textContent.products_deleteBtn}
            </button>
          </div>
        ),
      }))
    );
    setPage({
      currentPage: result.page,
      totalPage: result.data.total_pages,
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

function Products() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({});
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
  const fetchData = async (currentPage) => {
    try {
      const result = await getAllProduct(5, currentPage);
      setData(
        result.data.data.products.map((product) => ({
          col1: (
            <img
              className="w-7"
              src={`http://localhost:8000/images/products/images/${product.images}`}
              alt="image"
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
              <button
                value={product._id}
                onClick={(e) => {
                  alert(e.target.value);
                }}
                className="text-blue-700">
                {textContent.products_deleteBtn}
              </button>
            </div>
          ),
        }))
      );
      setPage({
        currentPage: result.data.page,
        totalPage: result.data.total_pages,
      });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  useEffect(() => {
    fetchData(page.currentPage);
  }, [page.currentPage]);
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
        currentPage={page.currentPage}
        totalPages={page.totalPage}
        setPage={setPage}
      />
    </div>
  );
}

export default Products;
