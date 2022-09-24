import { useState } from "react";
import Modal from "../Modal";
import Backdrop from "../Backdrop";

const CreateButton = () => {
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
        className=" btn btn_primary"
        onClick={() => {
          setModalContent(1);
        }}
      >
        Add Player
      </button>
    </>
  );
};

export default CreateButton;
