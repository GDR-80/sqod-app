const Backdrop = ({ setModalContent }) => {
  return (
    <div
      className="backdrop"
      onClick={() => {
        setModalContent(undefined);
      }}
    ></div>
  );
};

export default Backdrop;
