import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import OtpVerificationSuccess from "../pages/User/OtpVerificationSuccess";
import OtpVerification from "../pages/User/OtpVerification";
import {
  otpVerificationPath,
  otpVerificationSuccessPath,
} from "../config/paths";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path={otpVerificationPath} component={OtpVerification} />
      <Route
        path={otpVerificationSuccessPath}
        component={OtpVerificationSuccess}
      />
      <Redirect from="/" exact to={otpVerificationPath} />
      <Redirect to={otpVerificationPath} />
    </Switch>
  );
};

export default Router;
