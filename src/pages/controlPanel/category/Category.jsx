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
import getAllCategorie from "../../../Api/GetAllCategorie";
import getAllSubcategorie from "../../../Api/GetAllSubcategorie";
import AddCategoryModal from "../../../components/Modal/AddCategoryModal";
import AddSubCategoryModal from "../../../components/Modal/AddSubCategoryModal";
import DeleteModal from "../../../components/Modal/DeleteModal";
import deleteCategoryById from "../../../Api/DeleteCategoryByID";
import deleteSubCategoryById from "../../../Api/DeleteSubCategoryByID";

function Category() {
  const [sortingModel, setSortingModel] = useState("-createdAt");
  const [isCategory, setIsCategory] = useState("true");
  const [page, setPage] = useState(1);
  const columns = [
    {
      Header: textContent.category_table_header[0],
      accessor: "col1",
    },
    {
      Header: textContent.category_table_header[2],
      accessor: "col2",
    },
    {
      Header: "عملیات",
      accessor: "col3",
    },
  ];

  const {
    isLoading,
    data: categories,
    error,
    refetch,
  } = useQuery({
    queryKey: ["category", { page, isCategory }],
    queryFn: () =>
      isCategory === "true"
        ? getAllCategorie(5, page)
        : getAllSubcategorie(5, page),
  });

  const refetchProducts = async () => {
    await refetch();
  };

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

  const totallPages = categories?.data?.total_pages;
  const temp =
    isCategory === "true"
      ? categories?.data?.data?.categories
      : categories?.data?.data?.subcategories;
  const data = temp.map((category) => ({
    col1: category.name,
    col2: formatDateString(category.createdAt),
    col3: (
      <DeleteModal
        id={category._id}
        name={category.name}
        title={isCategory === "true" ? "دسته" : "زیردسته"}
        refetchFn={refetchProducts}
        deleteFn={
          isCategory === "true" ? deleteCategoryById : deleteSubCategoryById
        }
      />
    ),
  }));

  const handleRadioChange = (e) => {
    setIsCategory(e.target.value);
    setPage(1);
  };

  return (
    <div className="w-3/5 flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <span className="text-2xl font-[rokh-bold]">
          {isCategory === "true"
            ? textContent.category_title[0]
            : textContent.category_title[1]}
        </span>
        <fieldset className="flex gap-4">
          <div className="flex items-center gap-2">
            {isCategory === "true" ? (
              <AddCategoryModal
                title={isCategory === "true" ? "افزودن دسته" : "افزودن زیردسته"}
                refetchFn={refetchProducts}
              />
            ) : (
              <AddSubCategoryModal
                title={
                  isCategory === "false" ? "افزودن زیردسته" : "افزودن زیردسته"
                }
                refetchFn={refetchProducts}
              />
            )}
            <Label htmlFor="finish">{textContent.category_checkbox[0]}</Label>
            <Radio
              className="focus:ring-[#429F4B]"
              name="order_status"
              value={true}
              onChange={handleRadioChange}
              defaultChecked={isCategory === "true"}
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="wait">{textContent.category_checkbox[1]}</Label>
            <Radio
              className="focus:ring-[#429F4B]"
              name="order_status"
              value={false}
              onChange={handleRadioChange}
              defaultChecked={isCategory === "false"}
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

export default Category;
