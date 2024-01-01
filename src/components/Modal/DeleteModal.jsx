import { Modal } from "flowbite-react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import textContent from "../../constants/string";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import deleteProductById from "../../Api/DeleteProductByID";

const notifySuccess = () => toast.success(".محصول با موفقیت حذف شد");
const notifyUnsuccess = () => toast.error(".حذف محصول با مشکل مواحه شد");

function DeleteModal({ id, name, refetchFn }) {
  const [openModal, setOpenModal] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      try {
        await deleteProductById(id);
        setOpenModal(false);
      } catch (error) {
        console.error("Error deleting product", error);
        throw error;
      }
    },
    onSuccess: () => {
      notifySuccess();
      refetchFn();
    },
    onError: (error) => {
      console.error("Error deleting product", error);
      notifyUnsuccess();
    },
  });

  return (
    <>
      <button
        className="text-blue-700 hover:underline"
        onClick={() => setOpenModal(true)}>
        {textContent.products_deleteBtn}
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              آیا از حذف این محصول مطمئن هستید؟
              <br /> <span className="text-sm">{name}</span>
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="px-7 py-2 rounded-lg text-white bg-[#4B429F] "
                onClick={() => mutate(id)}>
                بله
              </button>
              <button
                className="px-7 py-2 rounded-lg text-black bg-[#E5D1FA]"
                onClick={() => setOpenModal(false)}>
                خیر
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default DeleteModal;
