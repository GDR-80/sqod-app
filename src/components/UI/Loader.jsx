const Loader = () => {
  return (
    <div className="backdrop center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <p style={{ marginTop: "3rem" }}>LOADING...</p>
    </div>
  );
};

export default Loader;
