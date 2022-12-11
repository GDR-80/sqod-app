import { useState } from "react";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";

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
          setModalContent(1);
        }}
      >
        Delete Team
      </button>
    </>
  );
};

export default DeleteTeamButton;
