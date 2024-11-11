import { I18nextProvider } from "react-i18next";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Signupff from "./components/example/singupfff";
import i18n from "./modules/I18n/i18n";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import Goals from "./pages/goals/Goals";
import Vision from "./pages/Vision/Vision";
import About from "./pages/About/About";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/signup" element={<Signupff />} /> */}
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/bpp-goals" element={<Goals />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </I18nextProvider>
    </>
  );
}

export default App;
