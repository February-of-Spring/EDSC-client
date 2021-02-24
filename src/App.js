import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./style.css";
import { Home, Posting, SignUp, SignIn, FindID, FindPW } from "./pages/index";

const theme = createMuiTheme({
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
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
