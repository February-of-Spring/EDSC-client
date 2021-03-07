import React from "react";
import PropTypes from "prop-types";
import logo from "../image/logo.png";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ history }) => {

  return (
    <header>
      <div id="header-container">
        <Link to="/" id="logo">
          <img src={logo} />
        </Link>
        <button
        onClick={() => history.push("/signin")}
        id="login-btn">
          <p id="login-text">로그인</p>
        </button>
       
      </div>
    </header>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
