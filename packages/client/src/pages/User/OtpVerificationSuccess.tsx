import React from "react";
import { useHistory } from "react-router";

import { otpVerificationPath } from "../../config/paths";

const OtpVerificationSuccess: React.FC = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push(otpVerificationPath);
  };

  return (
    <div className="grid place-items-center mt-40">
      <h1 className="text-green-800 font-extrabold text-5xl">
        Successfully verified your mobile number!!
      </h1>
      <button
        className="button transition duration-500 ease-in-out bg-midnight hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 "
        onClick={handleGoBack}
      >
        Try Again
      </button>
    </div>
  );
};

export default OtpVerificationSuccess;
