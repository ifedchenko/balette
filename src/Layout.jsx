import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
