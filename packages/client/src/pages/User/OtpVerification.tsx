import React from "react";
import SubmitButton from "../../components/Button/SubmitButton";
import OtpForm from "../../components/Otp";

const OtpVerification: React.FC = () => {
  const [data, setData] = React.useState("");

  return (
    <div className="flex flex-col">
      <div className="grid place-items-center ">
        <h3 className="text-xl font-semibold">Verification Code:</h3>
        <form className="grid place-items-center">
          <OtpForm onChange={(otp: string) => setData(otp)} data={data} />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
