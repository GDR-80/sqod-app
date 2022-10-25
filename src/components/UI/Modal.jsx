import CreateTeamForm from "../Forms/CreateTeamForm";
import DeleteTeamConfirm from "../Forms/DeleteTeamConfirm";
import DeleteFixtureConfirm from "../Forms/DeleteFixtureConfirm";

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
        <DeleteTeamConfirm setModalContent={setModalContent} />
      )}

      {modalContent === 2 && (
        <DeleteFixtureConfirm setModalContent={setModalContent} />
      )}

      {modalContent === 4 && (
        <CreateTeamForm setModalContent={setModalContent} />
      )}
    </div>
  );
};

export default Modal;
