import React, { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import AdminTable from "../../components/Admin/AdminTable";
import addCommasToNumber from "../../utils/AddCommasToNumber";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import DeleteFromCartBtn from "../../components/DeleteFromCartBtn/DeleteFromCartBtn";

function Cart() {
  const { cart } = useContext(CartContext);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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
    {
      Header: "",
      accessor: "col4",
    },
  ];

  const slicedData = cart.slice(startIndex, endIndex);
  const data = slicedData.map((item) => ({
    col1: <Link to={`/product/${item.productId}`}>{item.name}</Link>,
    col2: addCommasToNumber(item.price),
    col3: item.count,
    col4: <DeleteFromCartBtn productID={item.productId} />,
  }));

  return (
    <div className="flex flex-col gap-20 w-full h-[80vh] justify-center items-center">
      <div className="w-3/5 flex flex-col gap-6">
        <div className="w-full flex justify-between">
          <span className="text-2xl font-[rokh-bold]">سبد خرید</span>
        </div>
        <AdminTable columns={columns} data={data} />
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(cart.length / 4)}
          setPage={setPage}
        />
      </div>
      <div className="w-3/5 flex items-center justify-between">
        <p className="">
          جمع:{" "}
          <span className="text-lg font-[sans-semibold]">
            {addCommasToNumber(
              cart.reduce((prev, curr) => prev + curr.price * curr.count, 0)
            )} ریال
          </span>
        </p>
        <button className="w-fit flex items-center gap-2 bg-[#E5D1FA] px-4 py-2 rounded-lg ">
          نهایی کردن خرید
        </button>
      </div>
    </div>
  );
}

export default Cart;
