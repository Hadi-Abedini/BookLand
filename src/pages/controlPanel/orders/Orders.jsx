import React, {useState, useEffect } from "react";
import { Label, Radio } from "flowbite-react";

import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllOrder from "../../../Api/GetAllOrder";
import formatDateString from "../../../utils/FormatDate";
import addCommasToNumber from "../../../utils/AddCommasToNumber";

function Orders() {
  const [data, setData] = useState([]);
  const [ordersStatus, setOrdersStatus] = useState("finish");
  const columns = [
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
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await getAllOrder();
        const result =
          ordersStatus === "finish"
            ? temp.filter((order) => order.deliveryStatus)
            : temp.filter((order) => order.deliveryStatus === false);
        setData(
          result.map((order) => ({
            col1: order.userName,
            col2: addCommasToNumber(order.totalPrice),
            col3: formatDateString(order.createdAt),
            col4: (
              <button
                value={order._id}
                onClick={(e) => {
                  alert(e.target.value);
                }}
                className="text-blue-700">
                برسی سفارش
              </button>
            ),
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [ordersStatus]);

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
      <AdminTable columns={columns} data={data} />
    </div>
  );
}

export default Orders;
