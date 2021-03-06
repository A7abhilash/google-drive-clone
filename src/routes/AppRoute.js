import React from "react";
import { Redirect, Switch } from "react-router-dom";
import ForgotPassword from "../components/auth/ForgotPassword";
import Login from "../components/auth/Login";
import Profile from "../components/auth/Profile";
import Signup from "../components/auth/Signup";
import UpdateProfile from "../components/auth/UpdateProfile";
import Dashboard from "../components/drive/Dashboard";
import { useAuth } from "../contexts/AuthContext";
import AuthRoute from "./AuthRoute";
import GuestRoute from "./GuestRoute";

function AppRoute() {
  const { currentUser } = useAuth();

  return (
    <div className="container">
      <Switch>
        {/* Drive */}
        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute path="/folder/:id" component={Dashboard} />

        {/* User profile */}
        <AuthRoute path="/profile" component={Profile} />
        <AuthRoute path="/updateProfile" component={UpdateProfile} />

        {/* Authentication */}
        <GuestRoute path="/login" component={Login} />
        <GuestRoute path="/signup" component={Signup} />
        <GuestRoute path="/forgotPassword" component={ForgotPassword} />

        {/* Redirect */}
        {currentUser ? (
          <Redirect from="*" to="/login" />
        ) : (
          <Redirect from="*" to="/" />
        )}
      </Switch>
    </div>
  );
}

export default AppRoute;
