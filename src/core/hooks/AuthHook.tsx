import { parse } from "path";
import { Navigate, Outlet } from "react-router-dom";

const AuthHook = () => {
  const isSigned: boolean = JSON.parse(localStorage.getItem("token") ?? "false");


  if (!isSigned) {
        return<Navigate to="/auth" replace />}
  return <Outlet/>

};

export default AuthHook;
