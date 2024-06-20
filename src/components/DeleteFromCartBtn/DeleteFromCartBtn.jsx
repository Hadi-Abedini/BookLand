import React, { useState, useContext } from "react";
import textContent from "../../constants/string";
import { Modal } from "flowbite-react";
import CartContext from "../../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const notifySuccess = () => toast.success("محصول با موفقیت از سبدخرید حذف شد.");

function DeleteFromCartBtn({ productID }) {
  const [openModal, setOpenModal] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  function deleteItem() {
    const temp = cart.filter((item) => item.productId !== productID);
    setCart(temp);
    setOpenModal(false);
    notifySuccess();
  }

  return (
    <>
      <button className="text-[#054118] hover:underline" onClick={() => setOpenModal(true)}>
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
              آیا از حذف این محصول از سبد خرید مطمئن هستید؟
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="px-7 py-2 rounded-lg text-white bg-[#429F4B] "
                onClick={deleteItem}>
                بله
              </button>
              <button
                className="px-7 py-2 rounded-lg text-black bg-[#A2DFA2]"
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

export default DeleteFromCartBtn;
