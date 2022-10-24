import { useSelector } from "react-redux";
import Manager from "../components/Manager";
import Parent from "../components/Parent";
import Container from "../components/UI/Container";

const Dashboard = () => {
  const userType = useSelector((state) => state.currentUser.userType);
  const manager = "manager";
  const parent = "parent";
  return (
    <Container>
      <h1>Dashboard</h1>
      <p>Logged in as {userType}</p>
      {userType === manager && <Manager />}
      {userType === parent && <Parent />}
    </Container>
  );
};

export default Dashboard;
