import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../organims/header/Header";
import Footer from "../../organims/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
