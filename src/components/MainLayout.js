import React from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Header from "./Header";
import ContentLayout from "./ContentLayout";

const MainLayout = ({ children }) => {
  return (
    <div className="wrap">
      <Header />
      <SideBar />
      <ContentLayout>{children}</ContentLayout>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
