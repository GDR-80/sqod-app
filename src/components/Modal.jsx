import CreatePlayerForm from "../components/Forms/CreatePlayerForm";
import EditPlayerForm from "./Forms/EditPlayerForm";
import DeletePlayerConfirm from "./Forms/DeletePlayerConfirm";

const Modal = ({ modalContent, setModalContent }) => {
  return (
    <div className="modal">
      <div
        className="close"
        onClick={() => {
          setModalContent(undefined);
        }}
      >
        X
      </div>
      {modalContent === 1 && (
        <CreatePlayerForm setModalContent={setModalContent} />
      )}
      {modalContent === 2 && (
        <EditPlayerForm setModalContent={setModalContent} />
      )}
      {modalContent === 3 && (
        <DeletePlayerConfirm setModalContent={setModalContent} />
      )}
    </div>
  );
};

export default Modal;
