import { useState } from "react";
import Modal from "../Modal";
import Backdrop from "../Backdrop";

const CreateTeamButton = () => {
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
          setModalContent(4);
        }}
      >
        Create Team
      </button>
    </>
  );
};

export default CreateTeamButton;
