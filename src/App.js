import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./style.css";
import {
  Home,
  Posting,
  Category,
  Post,
  SignUp,
  SignIn,
  FindID,
  FindPW,
} from "./pages/index";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Noto Sans KR", serif',
  },
  palette: {
    primary: {
      main: "#00462A",
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            {/* 사용자 인증 */}
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/findid" exact component={FindID} />
            <Route path="/findpw" exact component={FindPW} />
            <Route path="/posting" exact component={Posting} />
            {/* 게시판 조회 */}
            <Route path="/category/:level1/:level2" component={Category} />
            <Route path="/category/:level1" component={Category} />
            {/* 게시물 */}
            <Route path="/posts/:postid" component={Post} />{" "}
            {/* 게시물 조회하기 */}
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
