import React from "react";
import PropTypes from "prop-types";

const Category = ({ children }) => {
  return (
    <div id="content">
      <div id="content-in">{children}</div>
    </div>
  );
};

Category.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Category;
