import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import i18n from "@/modules/I18n/i18n";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </I18nextProvider>
    </div>
  );
};

export default Layout;
