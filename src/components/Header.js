import React from "react";
import PropTypes from "prop-types";
import logo from "../image/logo.png";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import useStyles from "../Style";

const Header = ({ history }) => {
  const classes = useStyles();

  return (
    <header id="header">
      <Link to="/" id="logo">
        <img src={logo} />
      </Link>
      <Button
        className={classes.loginBtn}
        onClick={() => history.push("/signin")}
        variant="outlined"
      >
        <p id="login-text">로그인</p>
      </Button>
    </header>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
