import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";

import UserService from "../../services/userService";
import SubmitButton from "../../components/Button/SubmitButton";
import OtpForm from "../../components/Otp";
import { otpVerificationSuccessPath } from "../../config/paths";

const OtpVerification: React.FC = () => {
  const history = useHistory();

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (formData: string) => UserService.verifyUser(formData),
    {
      onSuccess: () => {
        setTimeout(() => {
          history.push(otpVerificationSuccessPath);
        }, 1000);
      },
    }
  );

  const handleSubmit = (otp: string) => mutate(otp);

  return (
    <div className="flex flex-col mt-48">
      <div className="grid place-items-center ">
        <h3 className="text-xl font-semibold">Verification Code:</h3>
        {isError && (
          <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-400">
            <span className="text-xl inline-block mr-5 align-middle">
              <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
              <b className="capitalize">Alert!</b> &nbsp;
              {/* {(error as any)?.response?.data?.message} */}
              Verification Error
            </span>
            <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
              <span>×</span>
            </button>
          </div>
        )}
        <OtpForm onSubmit={handleSubmit} isLoading={isLoading}>
          <SubmitButton isLoading={isLoading} isSuccess={isSuccess} />
        </OtpForm>
      </div>
    </div>
  );
};

export default OtpVerification;
