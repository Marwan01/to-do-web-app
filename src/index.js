import React from "react";
import ReactDOM from "react-dom";
import {app, 
  isLoggedIn,
  loginAnonymous,
  logoutUser,
} from "./stitch";
import LoginAnon from "./components/LoginAnon";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import { Nav, NavItem, NavLink } from "shards-react";


function MyApp(props) {
  return isLoggedIn() ? (
    <App handleLogout={() => logoutUser(app.currentUser)} />
  ) : (
    <LoginAnon loginAnonymous={loginAnonymous} />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);
