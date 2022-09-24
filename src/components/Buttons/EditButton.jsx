import { useState } from "react";
import Modal from "../Modal";
import Backdrop from "../Backdrop";

const EditButton = () => {
  const [modalContent, setModalContent] = useState();
  return (
    <>
      {modalContent && (
        <>
          <Backdrop setModalContent={setModalContent} />
          <Modal
            modalContent={modalContent}
            setModalContent={setModalContent}
          />
        </>
      )}
      <button
        className="btn btn_edit"
        onClick={() => {
          setModalContent(2);
        }}
      >
        Edit
      </button>
    </>
  );
};

export default EditButton;
