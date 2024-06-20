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

const notifySuccess = () => toast.success(".با موفقیت حذف شد");
const notifyUnsuccess = () => toast.error(".حذف با مشکل مواجه شد");

function DeleteModal({ id, name, title, refetchFn, deleteFn }) {
  const [openModal, setOpenModal] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      try {
        await deleteFn(id);
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
        className="text-[#054118] hover:underline"
        onClick={() => setOpenModal(true)}
      >
        {textContent.products_deleteBtn}
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              آیا از حذف این {title} مطمئن هستید؟
              <br /> <span className="text-sm">{name}</span>
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="px-7 py-2 rounded-lg text-white bg-[#429F4B] "
                onClick={() => mutate(id)}
              >
                بله
              </button>
              <button
                className="px-7 py-2 rounded-lg text-black bg-[#A2DFA2]"
                onClick={() => setOpenModal(false)}
              >
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
