import { Modal } from "flowbite-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import '../../index.css'

function DefulltModal({ title }) {
  const [openModal, setOpenModal] = useState(false);
  const [editorValue, setEditorValue] = useState("");
  return (
    <>
      <button
        className="px-6 py-2 text-sm bg-[#4B429F] text-white rounded-lg"
        onClick={() => setOpenModal(true)}>
        {title}
      </button>
      <Modal size={"5xl"} dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body style={{height:'300px', overflow:"visible",marginBottom:"50px"}}>
            <span>dsdsd</span>
            <ReactQuill theme="snow" value={editorValue} onChange={setEditorValue}  modules={{
                  toolbar: [
                    [{ 'header': [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }]
                  ],
                }}
                className="w-full h-52 col-span-6"  />
        </Modal.Body>
        <Modal.Footer className="gap-3">
          <button
            className="px-7 py-2 rounded-lg text-white bg-[#4B429F] "
            onClick={() => setOpenModal(false)}>
            افزودن
          </button>
          <button
            className="px-7 py-2 rounded-lg text-black bg-[#E5D1FA]"
            color="gray"
            onClick={() => setOpenModal(false)}>
            لغو
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DefulltModal;
