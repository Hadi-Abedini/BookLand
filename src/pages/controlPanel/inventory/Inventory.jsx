import React, { useState, useEffect } from "react";

import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllProduct from "../../../Api/GetAllProduct";
import addCommasToNumber from "../../../utils/AddCommasToNumber";

function Inventory() {
  const [data, setData] = useState([]);
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
    const fetchData = async () => {
      try {
        const result = await getAllProduct();
        setData(
          result.map((product) => ({
            col1: product.name,
            col2: addCommasToNumber(product.price),
            col3: product.quantity,
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
    </div>
  );
}

export default Inventory;
