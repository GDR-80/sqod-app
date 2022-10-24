import Container from "./UI/Container";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container>
      <h1>Page Not Found!!!!</h1>
      <Link to="/dashboard">
        <button className="btn btn_primary">Go Back</button>
      </Link>
    </Container>
  );
};

export default PageNotFound;
