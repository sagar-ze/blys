import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import OtpVerificationSuccess from "../pages/User/OtpVerificationSuccess";
import OtpVerification from "../pages/User/OtpVerification";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/verification" component={OtpVerification} />
      <Route path="/verification-success" component={OtpVerificationSuccess} />
      <Redirect from="/" exact to="/verification" />
      <Redirect to="/verification" />
    </Switch>
  );
};

export default Router;
