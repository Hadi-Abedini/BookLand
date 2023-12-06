import React, { useMemo } from "react";
import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";

function Products() {
  const columns = useMemo(
    () => [
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
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        col1: <img src="" alt="image" />,
        col2: "لوبیا قرمز گلستان",
        col3: "مواد غذایی",
        col4: (
          <div className="flex gap-2">
            <button
              onClick={() => {
                alert("edit");
              }}
              className="text-blue-700">
              {textContent.products_editBtn}
            </button>
            <button
              onClick={() => {
                alert("delete");
              }}
              className="text-blue-700">
              {textContent.products_deleteBtn}
            </button>
          </div>
        ),
      },
      {
        col1: <img src="" alt="image" />,
        col2: "چای گلستان",
        col3: "مواد غذایی",
        col4: (
          <div className="flex gap-2">
            <button
              onClick={() => {
                alert("edit");
              }}
              className="text-blue-700">
              {textContent.products_editBtn}
            </button>
            <button
              onClick={() => {
                alert("delete");
              }}
              className="text-blue-700">
              {textContent.products_deleteBtn}
            </button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="w-1/2 flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <span className="text-2xl font-[rokh-bold]">
          {textContent.orders_title}
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
