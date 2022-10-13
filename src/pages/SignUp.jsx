import { useSelector } from "react-redux";
import CreateUserForm from "../components/Forms/CreateUserForm";
import UserType from "../components/UserType";

const SignUp = () => {
  const screenMode = useSelector((state) => state.screenMode);
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="container">
      {screenMode === 0 && <CreateUserForm />}
      {screenMode === 1 && <UserType />}
    </div>
  );
};

export default SignUp;
