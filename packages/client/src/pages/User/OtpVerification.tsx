import React from "react";
import SubmitButton from "../../components/Button/SubmitButton";
import OtpForm from "../../components/Otp";

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = React.useState<string[]>(new Array(6).fill(""));

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(otp.join(""));
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
