import React, { useState, useEffect } from "react";
import { Modal, Spinner } from "flowbite-react";
import { useQueryClient, useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../index.css";

import textContent from "../../constants/string";
import SearchInput from "../SearchBox/SearchInput";
import getProductById from "../../Api/GetProductById";
import editProductById from "../../Api/EditProductById";

const notifySuccess = () => toast.success(".محصول با موفقیت ویرایش شد");
const notifyUnsuccess = () => toast.error(".ویرایش محصول با مشکل مواجه شد");

function EditProductModal({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const [productID, setProductID] = useState();

  const [formValues, setFormValues] = useState({
    images: null,
    name: "",
    description: "",
    writer: "",
    publisher: "",
    price: "",
    quantity: "",
    rating: 3.6,
  });
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productID],
    queryFn: () => {
      if (openModal) {
        return getProductById(productID);
      }
    },
  });

  useEffect(() => {
    if (product) {
      const temp = product.data.data.product;

      setFormValues({
        images: null,
        name: temp.name,
        category: temp.category._id,
        subcategory: temp.subcategory._id,
        description: temp.description,
        writer: temp.writer,
        publisher: temp.publisher,
        price: temp.price,
        quantity: temp.quantity,
        rating: temp.rating,
      });
    }
  }, [formValues.category, product]);

  const handleFileChange = (e) => {
    setFormValues({
      ...formValues,
      images: e.target.files[0],
    });
  };

  const handleInputChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const { mutate } = useMutation({
    mutationKey: "editProductMutation",
    mutationFn: (formData) => {
      editProductById(formData, id);
      setOpenModal(false);
    },
    onSuccess: () => {
      notifySuccess();
      QueryClient.invalidateQueries({
        queryKey: ["products", { page }],
      });
      setFormValues({
        images: null,
        name: "",
        description: "",
        writer: "",
        publisher: "",
        price: "",
        quantity: "",
        rating: 3.6,
      });
    },
    onError: () => {
      notifyUnsuccess();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (formValues.images !== null) {
      formData.append("images", formValues.images);
    }
    formData.append("name", formValues.name);
    formData.append("publisher", formValues.publisher);
    formData.append("writer", formValues.writer);
    formData.append("quantity", formValues.quantity);
    formData.append("price", formValues.price);
    formData.append("description", formValues.description);
    mutate(formData);
  };

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }
  return (
    <>
      <button
        className="text-blue-700 hover:underline"
        onClick={() => {
          setProductID(id);
          setOpenModal(true);
        }}>
        {textContent.products_editBtn}
      </button>
      <Modal size={"xl"} show={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex items-center justify-between rounded-t border-b p-5">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            افزودن کالا
          </h3>
          <Modal.Header style={{ padding: "0", border: "none" }} />
        </div>
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 text-xs"
            action="">
            <div className="w-full flex flex-col gap-1">
              <span>تصویر کالا:</span>
              <input
                className="block w-full text-[13px] bg-[#E8E8F4]  rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none"
                name="images"
                type="file"
                accept=".jpg,.png"
                onChange={handleFileChange}
              />
            </div>
            <div className="w-full flex gap-3">
              <div className="w-full flex flex-col gap-1">
                <span>نام کالا:</span>
                <SearchInput
                  id={"name"}
                  value={formValues.name}
                  placeholder={"نام کتاب"}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <span>نویسنده:</span>
                <SearchInput
                  id={"writer"}
                  value={formValues.writer}
                  placeholder={"نویسنده"}
                  onChange={(e) => handleInputChange("writer", e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <span>ناشر:</span>
                <SearchInput
                  id={"publisher"}
                  value={formValues.publisher}
                  placeholder={"ناشر"}
                  onChange={(e) =>
                    handleInputChange("publisher", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="w-full flex gap-3">
              <div className="w-full flex flex-col gap-1">
                <span>قیمت:</span>
                <SearchInput
                  id={"price"}
                  value={formValues.price}
                  placeholder={"قیمت (ریال)"}
                  type="number"
                  onChange={(e) => handleInputChange("price", e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <span>تعداد:</span>
                <SearchInput
                  id={"quantity"}
                  type="number"
                  value={formValues.quantity}
                  placeholder={"تعداد کتاب"}
                  onChange={(e) =>
                    handleInputChange("quantity", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <span>توضیحات:</span>
              <ReactQuill
                theme="snow"
                value={formValues.description}
                onChange={(value) => handleInputChange("description", value)}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    [{ direction: "rtl" }],
                  ],
                }}
                className="w-full"
              />
            </div>
            <button
              type="submit"
              className="w-fit px-7 py-2 rounded-lg text-white bg-[#4B429F]">
              ویرایش
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditProductModal;
