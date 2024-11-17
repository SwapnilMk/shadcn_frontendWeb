import { I18nextProvider } from "react-i18next";
import "./App.css";
import AppRoutes from "@/router/Routes";
import i18n from "@/modules/I18n/i18n";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <AppRoutes />
      </I18nextProvider>
    </>
  );
}

export default App;
