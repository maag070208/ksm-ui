import { Navigate, Route, Routes } from "react-router-dom";

import { PrimeReactProvider } from "primereact/api";
//tema
import "primereact/resources/themes/lara-light-blue/theme.css";

//núcleo
import "primereact/resources/primereact.min.css";

//iconos
import "primeicons/primeicons.css";

import "./App.scss";
import HomePage from "./pages/home/pages/HomePage";
import AuthPage from "./pages/auth/pages/AuthPage";
import AuthHook from "./core/hooks/AuthHook";
import ReportsPage from "./pages/reports/pages/ReportsPage";
import ReportDetailsPage from "./pages/reports/pages/ReportDetailsPage";

function App() {
  return (
    <PrimeReactProvider>
    <Routes>
      <Route element={<AuthHook />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/reports/:id" element={<ReportDetailsPage />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
    </PrimeReactProvider>

  );
}

export default App;
