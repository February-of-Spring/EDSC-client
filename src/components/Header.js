import React from "react";
import PropTypes from "prop-types";
import logo from "../image/logo.png";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loginBtn: {
    position: "absolute",
    width: "70px",
    height: "32px",
    left: "1181px", 
    top: "100px",
    padding: theme.spacing(1),
    color: "#00462A",
  },
}));

const Header = ({ history }) => {
  const classes = useStyles();

  return (
    <header id="header">
      <Link to="/" id="logo" ><img src={logo} /></Link>
      <Button
        className={classes.loginBtn}
        onClick={() => history.push("/signin")}
      >
        로그인
      </Button>
    </header>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
