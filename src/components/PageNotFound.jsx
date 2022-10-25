import Container from "./UI/Container";
import BackgroundCard from "./UI/BackgroundCard";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container>
      <BackgroundCard>
        <h1 className="error">Page Not Found!</h1>
        <h2>Oops...something went wrong!</h2>
        <p>Use the button to go to the dashboard</p>
        <Link to="/dashboard">
          <button className="btn btn_primary">Go to Dashboard</button>
        </Link>
      </BackgroundCard>
    </Container>
  );
};

export default PageNotFound;
