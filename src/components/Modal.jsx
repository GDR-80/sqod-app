import CreatePlayerForm from "../components/Forms/CreatePlayerForm";
import EditPlayerForm from "./Forms/EditPlayerForm";
import DeletePlayerConfirm from "./Forms/DeletePlayerConfirm";
import CreateTeamForm from "../components/Forms/CreateTeamForm";
import DeleteTeamConfirm from "./Forms/DeleteTeamConfirm";

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
      {modalContent === 4 && (
        <CreateTeamForm setModalContent={setModalContent} />
      )}

      {modalContent === 5 && (
        <DeleteTeamConfirm setModalContent={setModalContent} />
      )}
    </div>
  );
};

export default Modal;
