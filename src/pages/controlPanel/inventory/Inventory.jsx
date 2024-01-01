import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";

import AdminTable from "../../../components/Admin/AdminTable";
import textContent from "../../../constants/string";
import getAllProduct from "../../../Api/GetAllProduct";
import addCommasToNumber from "../../../utils/AddCommasToNumber";
import Pagination from "../../../components/Pagination/Pagination";
import InputBtn from "../../../components/inputBtn/InputBtn";
import editProductById from "../../../Api/EditProductById";

function Inventory() {
  const [page, setPage] = useState(1);
  const [changeList, setChangeList] = useState([]);
  const [changeStatus, setChangeStatus] = useState(true);

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

  const {
    isLoading,
    data: products,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: () => getAllProduct(page),
  });

  const { mutate } = useMutation({
    mutationFn: ({ formData, productId }) => {
      editProductById(formData, productId);
    },
  });

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

  const totallPages = products.data.total_pages;
  const data = products.data.data.products.map((product) => ({
    col1: product.name,
    col2: (
      <InputBtn
        productId={product._id}
        value={product.price}
        type={"price"}
        setChangeList={setChangeList}
        changeList={changeList}
        status={changeStatus}
      />
    ),
    col3: (
      <InputBtn
        productId={product._id}
        value={product.quantity}
        type={"quantity"}
        setChangeList={setChangeList}
        changeList={changeList}
        status={changeStatus}
      />
    ),
  }));
  if (isSuccess) {
    return (
      <div className="w-3/5 flex flex-col gap-6">
        <div className="w-full flex justify-between">
          <span className="text-2xl font-[rokh-bold]">
            {textContent.inventory_title}
          </span>
          <button
            disabled={!changeList.length}
            onClick={() => {
              changeList.map((change) => {
                const formData = new FormData();
                formData.append(change.type, change.value);
                mutate({
                  formData,
                  productId: change.id,
                });
              });
              window.location.reload();
            }}
            className="px-6 py-2 text-sm bg-[#4B429F] text-white rounded-lg  cursor-pointer disabled:bg-[#9088da] disabled:cursor-not-allowed">
            {textContent.inventory_saveBtn}
          </button>
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
}

export default Inventory;
