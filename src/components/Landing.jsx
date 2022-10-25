import SignIn from "./Forms/SignIn";
import Container from "./UI/Container";

const Landing = () => {
  return (
    <>
      <div className="page_wrapper">
        <Container>
          <div className="welcome_container">
            <div className="welcome_text">
              <h1>
                Welcome to <span>SQOD</span>
              </h1>
              <h3>Team Management App</h3>
            </div>
            <SignIn />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Landing;
