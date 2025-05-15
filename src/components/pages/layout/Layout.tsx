import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../organims/header/Header";
import Footer from "../../organims/footer/Footer";
import ScrollToTop from "../../../helpers/ScrollToTop";
import { Loader } from "../../organims/loader/Loader";

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
