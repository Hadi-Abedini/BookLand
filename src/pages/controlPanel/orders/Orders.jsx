import React, { useState, useEffect } from "react";
import { Label, Radio } from "flowbite-react";

import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllOrder from "../../../Api/GetAllOrder";
import formatDateString from "../../../utils/FormatDate";
import addCommasToNumber from "../../../utils/AddCommasToNumber";
import Pagination from "../../../components/Pagination/Pagination";

function Orders() {
  const [data, setData] = useState([]);
  const [sortingModel, setSortingModel] = useState("-createdAt");
  const [ordersStatus, setOrdersStatus] = useState(true);
  const [page, setPage] = useState({});
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

  useEffect(() => {
    const fetchData = async (currentPage) => {
      try {
        const temp = await getAllOrder(
          sortingModel,
          ordersStatus,
          5,
          currentPage
        );
        const result = temp.data.data.orders;
        // console.log(result[0]);
        setData(
          result.map((order) => ({
            col1: `${order.user.firstname} ${order.user.lastname}`,
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
        setPage({
          currentPage: temp.data.page,
          totalPage: temp.data.total_pages,
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData(page.currentPage);
  }, [ordersStatus, sortingModel, page.currentPage]);

  const handleRadioChange = (e) => {
    setOrdersStatus(e.target.value);
    setPage({
      totalPage: page.totalPage,
      currentPage: 1,
    });
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
              id="finish"
              name="order_status"
              value={true}
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
              value={false}
              onChange={handleRadioChange}
            />
          </div>
        </fieldset>
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

export default Orders;
