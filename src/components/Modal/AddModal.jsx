import { Modal, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import "react-quill/dist/quill.snow.css";
import "../../index.css";
import SearchDropDownBtn from "../SearchBox/SearchDropDownBtn";
import SearchInput from "../SearchBox/SearchInput";
import AddNewProduct from "../../Api/AddNewProduct";
import toast from "react-hot-toast";
import getAllCategorie from "../../Api/GetAllCategorie";
import getAllSubcategoriesByCategoriesId from "../../Api/GetAllSubcategoriesByCategoriesId";

const notifySuccess = () => toast.success(".محصول با موفقیت افزوده شد");
const notifyUnsuccess = () => toast.error(".افزودن محصول با مشکل مواجه شد");

function AddModal({ title, refetchFn }) {
  const [openModal, setOpenModal] = useState(false);
  const [subcategories, setSubcategories] = useState([]);

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
  }, [formValues.category]);

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
    mutationFn: async (formData) => {
      try {
        await AddNewProduct(formData);
        setOpenModal(false);
      } catch (error) {
        console.error("Error adding new product", error);
        throw error;
      }
    },
    onSuccess: () => {
      notifySuccess();
      refetchFn();
      setFormValues({
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
    },
    onError: (error) => {
      console.error("Error adding new product", error);
      notifyUnsuccess();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", formValues.images);
    formData.append("name", formValues.name);
    formData.append("publisher", formValues.publisher);
    formData.append("writer", formValues.writer);
    formData.append("category", formValues.category);
    formData.append("subcategory", formValues.subcategory);
    formData.append("quantity", formValues.quantity);
    formData.append("price", formValues.price);
    formData.append("rating", 3.6);
    formData.append("description", formValues.description);

    mutate(formData);
  };

  if (isLoading) {
    return <Spinner color="purple" aria-label="Purple spinner example" />;
  }

  return (
    <>
      <button
        className="px-6 py-2 text-sm bg-[#4B429F] text-white rounded-lg"
        onClick={() => setOpenModal(true)}>
        {title}
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
                required
              />
            </div>
            <div className="w-full flex gap-3">
              <div className="w-full flex flex-col gap-1">
                <span>نام کالا:</span>
                <SearchInput
                  id={"name"}
                  placeholder={"نام کتاب"}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <span>نویسنده:</span>
                <SearchInput
                  id={"writer"}
                  placeholder={"نویسنده"}
                  onChange={(e) => handleInputChange("writer", e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <span>ناشر:</span>
                <SearchInput
                  id={"publisher"}
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
              افزودن
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
