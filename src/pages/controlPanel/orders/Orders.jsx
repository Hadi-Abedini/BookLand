import React, { useState, useEffect } from "react";
import { Label, Radio } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";

import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllOrder from "../../../Api/GetAllOrder";
import formatDateString from "../../../utils/FormatDate";
import addCommasToNumber from "../../../utils/AddCommasToNumber";
import Pagination from "../../../components/Pagination/Pagination";
import OrderModal from "../../../components/Modal/OrderModal";

function Orders() {
  const [sortingModel, setSortingModel] = useState("-createdAt");
  const [orderStatus, setOrderStatus] = useState("true");
  const [page, setPage] = useState(1);
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
      Header: (
        <button
          onClick={() => {
            sortingModel === "createdAt"
              ? setSortingModel("-createdAt")
              : setSortingModel("createdAt");
          }}
          className="flex items-center gap-1">
          <i className="fa fa-caret-down"></i>
          <span>{textContent.orders_table_header[2]}</span>
        </button>
      ),
      accessor: "col3",
    },
    {
      Header: "",
      accessor: "col4",
    },
  ];

  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders", { page, sortingModel, orderStatus }],
    queryFn: () => getAllOrder(sortingModel, orderStatus, 5, page),
  });
  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }
  const totallPages = orders.data.total_pages;
  const data = orders.data.data.orders.map((order) => ({
    col1: `${order.user.firstname} ${order.user.lastname}`,
    col2: addCommasToNumber(order.totalPrice),
    col3: formatDateString(order.createdAt),
    col4: (
      <OrderModal orderId={order._id} />
    ),
  }));
  const handleRadioChange = (e) => {
    setOrderStatus(e.target.value);
    setPage(1);
  };

  return (
    <div className="w-3/5 flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <span className="text-2xl font-[rokh-bold]">
          {textContent.orders_title}
        </span>
        <fieldset className="flex gap-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="finish">{textContent.orders_checkbox[0]}</Label>
            <Radio
              className="focus:ring-[#4B429F]"
              name="order_status"
              value={true}
              onChange={handleRadioChange}
              defaultChecked={orderStatus === "true"}
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="wait">{textContent.orders_checkbox[1]}</Label>
            <Radio
              className="focus:ring-[#4B429F]"
              name="order_status"
              value={false}
              onChange={handleRadioChange}
              defaultChecked={orderStatus === "false"}
            />
          </div>
        </fieldset>
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

export default Orders;
