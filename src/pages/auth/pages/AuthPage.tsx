import LoginFormComponent from "../components/LoginForm";

const AuthPage = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-black-alpha-10 flex justify-content-center align-items-center">
        <LoginFormComponent></LoginFormComponent>
      </div>
    </>
  );
};

export default AuthPage;
