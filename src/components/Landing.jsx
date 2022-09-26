import SignIn from "./Forms/SignIn";

const Landing = () => {
  return (
    <>
      <div className="page_wrapper">
        <div className="container">
          <div className="welcome_container">
            <div className="welcome_text">
              <h1>
                Welcome to <span>SQOD</span>
              </h1>
              <h3>Team Management App</h3>
            </div>
            <SignIn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
