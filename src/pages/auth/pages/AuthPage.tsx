import LoginFormComponent from "../components/LoginForm";

const AuthPage = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex justify-content-center align-items-center bg-gray-300">
        <LoginFormComponent></LoginFormComponent>
      </div>
    </>
  );
};

export default AuthPage;
