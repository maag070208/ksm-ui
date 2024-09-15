import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/pages/HomePage";
import AuthPage from "./pages/auth/pages/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
