import { useQuery } from "@tanstack/react-query";
import { Modal, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";

import toast from "react-hot-toast";
import getOrderById from "../../Api/GetOrderById";
import getUserByID from "../../Api/GetUserById";
import formatDateString from "../../utils/FormatDate";
import AdminTable from "../Admin/AdminTable";
import addCommasToNumber from "../../utils/AddCommasToNumber";
import { Link } from "react-router-dom";

const notifySuccess = () => toast.success(".محصول با موفقیت افزوده شد");
const notifyUnsuccess = () => toast.error(".افزودن محصول با مشکل مواجه شد");
const columns = [
  {
    Header: "کالا",
    accessor: "col1",
  },
  {
    Header: "قیمت",
    accessor: "col2",
  },
  {
    Header: "تعداد",
    accessor: "col3",
  },
];

function OrderModal({ orderId }) {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);

  const {
    data: order,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => {
      return getOrderById(orderId);
    },
  });

  const {
    data: user,
    isLoading: userLoading,
    isSuccess: userSuccess,
  } = useQuery({
    queryKey: ["user", order?.data?.data.order?.user?._id],
    queryFn: () => {
      if (isSuccess) {
        return getUserByID(order.data.data.order.user._id);
      }
    },
  });

  if (isLoading || userLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }
  const temp =
    isSuccess && openModal && userSuccess
      ? order.data.data.order.products.map((item) => ({
          name: item.product.name,
          id: item.product._id,
          price: item.product.price,
          count: item.count,
        }))
      : [];

  const data =
    isSuccess && openModal && userSuccess
      ? temp.map((product) => ({
          col1: (
            <Link
              to={`/product/${product.id}`}
              className="text-blue-700 hover:underline">
              {product.name}
            </Link>
          ),
          col2: addCommasToNumber(product.price),
          col3: product.count,
        }))
      : [];

  return (
    <>
      <button
        className="text-blue-700 hover:underline"
        onClick={() => setOpenModal(true)}>
        برسی سفارش
      </button>
      <Modal size={"xl"} show={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex items-center justify-between rounded-t border-b p-5">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            سفارش {orderId}
          </h3>
          <Modal.Header style={{ padding: "0", border: "none" }} />
        </div>
        <Modal.Body>
          {isSuccess && openModal && userSuccess && (
            <div className="w-full flex flex-col items-center gap-7">
              <div className="w-full flex flex-col gap-1">
                <p className="font-[sans-semibold]">
                  نام مشتری:{" "}
                  <span className="text-sm">
                    {user.data.data.user.firstname}{" "}
                    {user.data.data.user.lastname}
                  </span>
                </p>
                <p className="font-[sans-semibold]">
                  آدرس:{" "}
                  <span className="text-sm">{user.data.data.user.address}</span>
                </p>
                <p className="font-[sans-semibold]">
                  تلفن:{" "}
                  <span className="text-sm">
                    {user.data.data.user.phoneNumber}
                  </span>
                </p>
                <p className="font-[sans-semibold]">
                  زمان تحویل:{" "}
                  <span className="text-sm">
                    {formatDateString(order.data.data.order.deliveryDate)}
                  </span>
                </p>
                <p className="font-[sans-semibold]">
                  زمان ثبت سفارش:{" "}
                  <span className="text-sm">
                    {formatDateString(order.data.data.order.createdAt)}
                  </span>
                </p>
              </div>
              <AdminTable columns={columns} data={data} />
              {!order.data.data.order.deliveryStatus ? (
                <button className="w-fit bg-[#4B429F] py-3 px-5 rounded-lg text-white hover:bg-purple-500">تحویل شد</button>
              ) : (
                <p className="font-[sans-semibold]">
                  زمان تحویل:{" "}
                  <span className="text-sm">
                  {formatDateString(order.data.data.order.deliveryDate)}
                  </span>
                </p>
              )}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrderModal;
