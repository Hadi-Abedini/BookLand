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
import addNewCategory from "../../Api/AddNewCategory";

const notifySuccess = () => toast.success(".دسته بندی با موفقیت افزوده شد");
const notifyUnsuccess = () => toast.error(".افزودن دسته بندی با مشکل مواجه شد");

function AddCategoryModal({ title, refetchFn }) {
  const [openModal, setOpenModal] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
  });

  const handleInputChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const { mutate } = useMutation({
    mutationFn: async (formData) => {
      try {
        await addNewCategory(formData);
        setOpenModal(false);
      } catch (error) {
        console.error("Error adding new category", error);
        throw error;
      }
    },
    onSuccess: () => {
      notifySuccess();
      refetchFn();
      setFormValues({
        name: "",
      });
    },
    onError: (error) => {
      console.error("Error adding new category", error);
      notifyUnsuccess();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formValues.name);
    mutate(formData);
  };

  return (
    <>
      <button
        className="px-6 py-2 text-sm bg-[#429F4B] text-white rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        {title}
      </button>
      <Modal size={"xl"} show={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex items-center justify-between rounded-t border-b p-5">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            افزودن دسته بندی
          </h3>
          <Modal.Header style={{ padding: "0", border: "none" }} />
        </div>
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 text-xs"
            action=""
          >
            <div className="w-full flex gap-3">
              <div className="w-full flex flex-col gap-1">
                <span>نام دسته:</span>
                <SearchInput
                  id={"name"}
                  placeholder={"نام دسته"}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-fit px-7 py-2 rounded-lg text-white bg-[#429F4B]"
            >
              افزودن
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCategoryModal;
