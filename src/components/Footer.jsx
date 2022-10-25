import { useLocation } from "react-router-dom";
import Container from "./UI/Container";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/signup" && (
        <div className="footer">
          <Container>
            <p>
              SQOD<sup>&copy;</sup> {new Date().getFullYear()}
            </p>
          </Container>
        </div>
      )}
    </>
  );
};

export default Footer;
