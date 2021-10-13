import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reset from "./Reset";

function Authentication() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/3">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/reset">
              <Reset />
            </Route>
          </Switch>
        </Router>
      </div>
      <div
        className="w-2/3"
        style={{
          backgroundImage:
            "url(" +
            "https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Authentication;
