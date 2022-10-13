import { useSelector } from "react-redux";
import Manager from "../components/Manager";
import Parent from "../components/Parent";

const Dashboard = () => {
  const userType = useSelector((state) => state.currentUser.userType);
  const manager = "manager";
  const parent = "parent";
  return (
    <>
      <div className="container">
        <h1>Dashboard</h1>
        <p>Logged in as {userType}</p>
        {userType === manager && <Manager />}
        {userType === parent && <Parent />}
      </div>
    </>
  );
};

export default Dashboard;
