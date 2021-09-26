import React from "react";
import Input from "./input";

const OtpForm: React.FC = () => {
  const [otp] = React.useState(new Array(4).fill(""));

  return (
    <>
      {otp.map((_data, index) => {
        return (
          <React.Fragment key={index}>
            <Input />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default OtpForm;
