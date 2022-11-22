import { useSelector } from "react-redux";
import Manager from "../components/Manager/Manager";
import Parent from "../components/Parent/Parent";
import Container from "../components/UI/Container";

const Dashboard = () => {
  const userType = useSelector((state) => state.currentUser.user_type);

  return (
    <Container>
      <h1>Dashboard</h1>
      {userType === 0 && <Manager />}
      {userType === 1 && <Parent />}
    </Container>
  );
};

export default Dashboard;
