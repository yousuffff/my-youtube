import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import ScrollToTop from "./ScrollToTop";

const Body = () => {
  return (
    <div>
      <div>
        <ScrollToTop />
        <Head />
      </div>
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
