import React, { useMemo } from "react";
import MyTable from "../../../components/Admin/AdminTable";

function Orders() {
  const columns = useMemo(
    () => [
      {
        Header: "نام کاربر",
        accessor: "col1",
      },
      {
        Header: "مجموع مبلغ",
        accessor: "col2",
      },
      {
        Header: "زمان ثبت سفارش",
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
        col1: "اکبر زمانی",
        col2: "920,000",
        col3: "1399/1/5",
        col4: (
          <button
            onClick={() => {
              alert("click");
            }}
            className="text-blue-700">
            برسی سفارش
          </button>
        ),
      },
      {
        col1: "اکبر زمانی",
        col2: "920,000",
        col3: "1399/1/5",
        col4: (
          <button
            onClick={() => {
              alert("click");
            }}
            className="text-blue-700">
            برسی سفارش
          </button>
        ),
      },
      {
        col1: "اکبر زمانی",
        col2: "920,000",
        col3: "1399/1/5",
        col4: (
          <button
            onClick={() => {
              alert("click");
            }}
            className="text-blue-700">
            برسی سفارش
          </button>
        ),
      },
      {
        col1: "اکبر زمانی",
        col2: "920,000",
        col3: "1399/1/5",
        col4: (
          <button
            onClick={() => {
              alert("click");
            }}
            className="text-blue-700">
            برسی سفارش
          </button>
        ),
      },
      {
        col1: "اکبر زمانی",
        col2: "920,000",
        col3: "1399/1/5",
        col4: (
          <button
            onClick={() => {
              alert("click");
            }}
            className="text-blue-700">
            برسی سفارش
          </button>
        ),
      },
    ],
    []
  );

  return (
    <div className="w-1/2">
      <MyTable columns={columns} data={data} />
    </div>
  );
}

export default Orders;
