import React, { useState, useEffect } from "react";
import { Modal, Spinner } from "flowbite-react";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "../../index.css";

import textContent from "../../constants/string";
import SearchInput from "../SearchBox/SearchInput";
import SearchDropDownBtn from "../SearchBox/SearchDropDownBtn";
import getAllCategorie from "../../Api/GetAllCategorie";
import getAllSubcategoriesByCategoriesId from "../../Api/GetAllSubcategoriesByCategoriesId";
import getProductById from "../../Api/GetProductById";
import urlToFile from "../../utils/dowloadImage";
import addNewProduct from "../../Api/AddNewProduct";
import editProductById from "../../Api/EditProductById";

function EditProductModal({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [productID, setProductID] = useState();

  const queryClient = useQueryClient();

  const [formValues, setFormValues] = useState({
    images: null,
    name: "",
    category: "",
    subcategory: "",
    description: "",
    writer: "",
    publisher: "",
    price: "",
    quantity: "",
    rating: 3.6,
  });

  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategorie,
  });
  const { data: product } = useQuery({
    queryKey: ["product", productID],
    queryFn: () => {
      if (openModal) {
        return getProductById(productID);
      }
    },
  });

  useEffect(() => {
    if (formValues.category) {
      const fetchData = async () => {
        try {
          const data = await getAllSubcategoriesByCategoriesId(
            formValues.category
          );
          setSubcategories(data.data.data.subcategories);
        } catch (error) {
          console.error("Error loading subcategories:", error);
        }
      };
      fetchData();
    }
    if (product) {
      const temp = product.data.data.product;
      urlToFile(
        `http://localhost:8000/images/products/images/${temp.images[0]}`,
        temp.images[0]
      ).then((file) =>
        setFormValues({
          images: file,
          name: temp.name,
          category: temp.category._id,
          subcategory: temp.subcategory._id,
          description: temp.description,
          writer: temp.writer,
          publisher: temp.publisher,
          price: temp.price,
          quantity: temp.quantity,
          rating: temp.rating,
        })
      );
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
    mutationFn: (formData, id) => {
      console.log(formValues);
      editProductById(formData, id);
      setOpenModal(false);
    },
    onSuccess: () => {
      notifySuccess();
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      //   setFormValues({
      //     images: temp.images[0],
      //     name: temp.name,
      //     category: temp.category._id,
      //     subcategory: temp.subcategory._id,
      //     description: temp.description,
      //     writer: temp.writer,
      //     publisher: temp.publisher,
      //     price: temp.price,
      //     quantity: temp.quantity,
      //     rating: temp.rating,
      //   });
    },
    onError: () => {
      notifyUnsuccess();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("images", formValues.images);
    formData.append("name", formValues.name);
    // formData.append("publisher", formValues.publisher);
    // formData.append("writer", formValues.writer);
    formData.append("category", formValues.category);
    // formData.append("subcategory", formValues.subcategory);
    // formData.append("quantity", formValues.quantity);
    // formData.append("price", formValues.price);
    // formData.append("rating", 3.6);
    // formData.append("description", formValues.description);

    mutate(formData, id);
  };

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }
  return (
    <>
      <button
        className="text-blue-700"
        onClick={() => {
          setProductID(id);
          setOpenModal(true);
        }}>
        {textContent.products_editBtn}
      </button>
      <Modal size={"xl"} show={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex items-start justify-between rounded-t border-b p-5">
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
                // defaultValue={formValues.images}
                required
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
            <div className="w-full flex gap-3">
              <div className="w-full flex flex-col gap-1">
                <span>دسته بندی:</span>
                <SearchDropDownBtn
                  key={"catgorie"}
                  value={formValues.category}
                  text={"دسته بندی"}
                  id={"category"}
                  optionList={categories.data.data.categories}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <span>زیردسته بندی:</span>
                <SearchDropDownBtn
                  key={"subcatgorie"}
                  value={formValues.subcategory}
                  text={"زیردسته بندی"}
                  id={"subcategory"}
                  optionList={subcategories}
                  onChange={(e) =>
                    handleInputChange("subcategory", e.target.value)
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
