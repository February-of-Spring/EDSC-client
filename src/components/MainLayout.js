import React from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Header from "./Header";
import ContentLayout from "./ContentLayout";

const MainLayout = ({ children }) => {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="header-content-wrapper">
        <Header />
        <ContentLayout>{children}</ContentLayout>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
