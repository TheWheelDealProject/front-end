import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
        <ToastContainer />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;