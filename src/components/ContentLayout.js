import React from "react";
import PropTypes from "prop-types";

const ContentLayout = ({ children }) => {
  return <div id="content">{children}</div>;
};

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentLayout;
