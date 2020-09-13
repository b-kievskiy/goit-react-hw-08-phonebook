import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../Containers/navigation";
import "./AuthNav.css";

const AuthNav = () => {
  return (
    <div className="auth-nav">
      <NavLink to={navigation.login} exact className="auth-nav-link">
        LOGIN
      </NavLink>
      <NavLink to={navigation.registration} exact className="auth-nav-link">
        REGISTRATION
      </NavLink>
    </div>
  );
};

export default AuthNav;
