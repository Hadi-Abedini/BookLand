import React, { useMemo, useState } from "react";
import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import { Label, Radio } from "flowbite-react";

function Orders() {
  const columns = useMemo(
    () => [
      {
        Header: textContent.orders_table_header[0],
        accessor: "col1",
      },
      {
        Header: textContent.orders_table_header[1],
        accessor: "col2",
      },
      {
        Header: textContent.orders_table_header[2],
        accessor: "col3",
      },
      {
        Header: "",
        accessor: "col4",
      },
    ],
    []
  );

  const finish = useMemo(
    () => [
      {
        col1: "1اکبر زمانی",
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
        col1: "2اکبر زمانی",
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
        col1: "3اکبر زمانی",
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
        col1: "4اکبر زمانی",
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
        col1: "5اکبر زمانی",
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
        col1: "6اکبر زمانی",
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
        col1: "7اکبر زمانی",
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
        col1: "8اکبر زمانی",
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
        col1: "9اکبر زمانی",
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
        col1: "10اکبر زمانی",
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
        col1: "11اکبر زمانی",
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
        col1: "12اکبر زمانی",
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
  const wait = useMemo(
    () => [
      {
        col1: "1اکبر زمانی",
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
        col1: "2اکبر زمانی",
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
  const [ordersStatus, setOrdersStatus] = useState("finish");
  const handleRadioChange = (e) => {
    setOrdersStatus(e.target.value);
  };
  return (
    <div className="w-1/2 flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <span className="text-2xl font-[rokh-bold]">
          {textContent.orders_title}
        </span>
        <fieldset className="flex gap-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="finish">{textContent.orders_checkbox[0]}</Label>
            <Radio
              className="focus:ring-[#4B429F]"
              id="finish"
              name="order_status"
              value="finish"
              onChange={handleRadioChange}
              defaultChecked
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="wait">{textContent.orders_checkbox[1]}</Label>
            <Radio
              className="focus:ring-[#4B429F]"
              id="wait"
              name="order_status"
              value="wait"
              onChange={handleRadioChange}
            />
          </div>
        </fieldset>
      </div>
      <AdminTable
        columns={columns}
        data={ordersStatus === "finish" ? finish : wait}
      />
    </div>
  );
}

export default Orders;
