import { Modal, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useQuery } from "@tanstack/react-query";
import "react-quill/dist/quill.snow.css";
import "../../index.css";
import SearchDropDownBtn from "../SearchBox/SearchDropDownBtn";
import SearchInput from "../SearchBox/SearchInput";
import GetAllCategorie from "../../Api/GetAllCategorie";
import GetAllSubcategoriesByCategoriesId from "../../Api/GetAllSubcategoriesByCategoriesId";

function DefulltModal({ title }) {
  const [openModal, setOpenModal] = useState(false);
  const [subcategories, setSubcategories] = useState([]);

  const [formValues, setFormValues] = useState({
    file: null,
    bookName: "",
    bookCategory: "",
    bookSubcategory: "",
    description: "",
  });

  const {
    isLoading,
    data: categories,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: GetAllCategorie,
  });

  useEffect(() => {
    if (formValues.bookCategory) {
      const fetchData = async () => {
        try {
          const data = await GetAllSubcategoriesByCategoriesId(
            formValues.bookCategory
          );
          setSubcategories(data.data.data.subcategories);
        } catch (error) {
          console.error("Error loading subcategories:", error);
        }
      };
      fetchData();
    }
  }, [formValues.bookCategory]);

  const handleFileChange = (e) => {
    setFormValues({
      ...formValues,
      file: e.target.files[0],
    });
  };

  const handleInputChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues({
      file: null,
      bookName: "",
      bookCategory: "",
      bookSubcategory: "",
      description: "",
    });
    setOpenModal(false);
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
        <div className="flex items-start justify-between rounded-t border-b p-5">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            افزودن کالا
          </h3>
          <Modal.Header style={{ padding: "0", border: "none" }} />
        </div>
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3"
            action="">
            <div className="w-full flex flex-col gap-1">
              <span>تصویر کالا:</span>
              <input
                className="block w-full text-sm bg-[#E8E8F4] text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                name="file"
                type="file"
                accept=".jpg,.png"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <span>نام کالا:</span>
              <SearchInput
                id={"book-name"}
                placeholder={"نام کتاب"}
                onChange={(e) => handleInputChange("bookName", e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <span>دسته بندی:</span>
              <SearchDropDownBtn
                key={"catgorie"}
                text={"انتخاب دسته بندی"}
                id={"book-category"}
                optionList={categories.data.data.categories}
                onChange={(e) =>
                  handleInputChange("bookCategory", e.target.value)
                }
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <span>دسته بندی:</span>
              <SearchDropDownBtn
                key={"subcatgorie"}
                text={"انتخاب زیردسته بندی"}
                id={"book-subcategory"}
                optionList={subcategories}
                onChange={(e) =>
                  handleInputChange("bookSubcategory", e.target.value)
                }
              />
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

export default DefulltModal;
