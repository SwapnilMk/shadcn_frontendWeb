import i18n from "@/modules/I18n/i18n";
import AppRoutes from "@/router/Routes";
import { I18nextProvider } from "react-i18next";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
