import { useSelector } from "react-redux";
import CreateUserForm from "../components/Forms/CreateUserForm";
import UserType from "../components/UserType";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const screenMode = useSelector((state) => state.screenMode);
  // const users = useSelector((state) => state.users);
  // console.log(users);
  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {screenMode === 0 && <CreateUserForm />}
      {screenMode === 1 && <UserType toast={toast} />}
    </div>
  );
};

export default SignUp;
