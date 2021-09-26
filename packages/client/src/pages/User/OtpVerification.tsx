import React from "react";
import { useMutation } from "react-query";
import UserService from "../../services/userService";
import SubmitButton from "../../components/Button/SubmitButton";
import OtpForm from "../../components/Otp";

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = React.useState<string[]>(new Array(6).fill(""));

  const { mutate } = useMutation((formData: string) =>
    UserService.verifyUser(formData)
  );

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const sanitizedOTP = otp.join("");
    mutate(sanitizedOTP);
    // console.log(sanitizedOTP);
  };

  return (
    <div className="flex flex-col">
      <div className="grid place-items-center ">
        <h3 className="text-xl font-semibold">Verification Code:</h3>
        <form className="grid place-items-center" onSubmit={handleSubmit}>
          <OtpForm onChange={(otp: string[]) => setOtp(otp)} data={otp} />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
