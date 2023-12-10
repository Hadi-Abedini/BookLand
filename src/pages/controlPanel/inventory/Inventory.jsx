import React, { useState, useEffect } from "react";

import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllProduct from "../../../Api/GetAllProduct";
import addCommasToNumber from "../../../utils/AddCommasToNumber";
import Pagination from "../../../components/Pagination/Pagination";

function Inventory() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({});

  const columns = [
    {
      Header: textContent.inventory_table_header[0],
      accessor: "col1",
    },
    {
      Header: textContent.inventory_table_header[1],
      accessor: "col2",
    },
    {
      Header: textContent.inventory_table_header[2],
      accessor: "col3",
    },
  ];
  useEffect(() => {
    const fetchData = async (currentPage) => {
      try {
        const result = await getAllProduct(5, currentPage);
        setData(
          result.data.data.products.map((product) => ({
            col1: product.name,
            col2: addCommasToNumber(product.price),
            col3: product.quantity,
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

    fetchData(page.currentPage);
  }, [page.currentPage]);
  return (
    <div className="w-3/5 flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <span className="text-2xl font-[rokh-bold]">
          {textContent.inventory_title}
        </span>
        <button
          onClick={() => {
            alert("save");
          }}
          className="px-6 py-2 text-sm bg-[#4B429F] text-white rounded-lg">
          {textContent.inventory_saveBtn}
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

export default Inventory;
