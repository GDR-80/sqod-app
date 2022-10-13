import { useState } from "react";
import Modal from "../Modal";
import Backdrop from "../Backdrop";

const DeleteTeamButton = () => {
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
        className="btn btn_delete ml"
        onClick={() => {
          setModalContent(5);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteTeamButton;
