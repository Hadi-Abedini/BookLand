import React, { useState, useEffect } from "react";
import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllProduct from "../../../Api/GetAllProduct";

function Products() {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllProduct();
        setData(
          result.map((product) => ({
            col1: (
              <img
                className="w-9"
                src={`http://localhost:8000/images/products/images/${product.images}`}
                alt="image"
              />
            ),
            col2: product.name,
            col3: `${product.categoryName}/${product.subcategoryName}`,
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
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-1/2 h-full flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <span className="text-2xl font-[rokh-bold]">
          {textContent.products_title}
        </span>
        <button
          onClick={() => {
            alert("add");
          }}
          className="px-6 py-2 text-sm bg-[#4B429F] text-white rounded-lg">
          افزودن کالا
        </button>
      </div>
      <AdminTable columns={columns} data={data} />
    </div>
  );
}

export default Products;
