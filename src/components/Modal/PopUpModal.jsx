import { Modal } from "flowbite-react";
import React, { useState } from "react";
import textContent from "../../constants/string";
import DeleteProductById from "../../Api/DeleteProductByID";

function PopUpModal({ id, name, SetRerender, rerender }) {
  const [openModal, setOpenModal] = useState(false);
  const handleDelete = async () => {
    try {
      await DeleteProductById(id);
      setOpenModal(false);
      SetRerender(!rerender);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <button className="text-blue-700" onClick={() => setOpenModal(true)}>
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
                onClick={handleDelete}>
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
    </>
  );
}

export default PopUpModal;
