import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../image/logo.png";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import profile from "../image/profile.png";

const Header = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = {
    id: 1,
    email: "example@gmail.com",
    name: "김구름",
    nickname: "구름빵",
    phone: "010-1234-5678",
    profileImage:
      "https://edsc-s3.s3.ap-northeast-2.amazonaws.com/profile-image/2",
  };
  return (
    <header>
      <div id="header-container">
        <Link to="/" id="logo">
          <img src={logo} />
        </Link>
        {isLoggedIn ? (
          <Link to={`/users/${user.id}`} id="user">
            <img id="logged-in-profile" src={profile} />
          </Link>
        ) : (
          <button onClick={() => history.push("/signin")} id="login-btn">
            <p id="login-text">로그인</p>
          </button>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
