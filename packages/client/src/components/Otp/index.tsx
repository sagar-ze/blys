import React from "react";
import Input from "./input";

const OtpForm: React.FC = () => {
  const [otp] = React.useState(new Array(6).fill(""));

  return (
    <>
      <div className="flex space-x-3 mt-3">
        {otp.map((_data, index) => {
          return (
            <React.Fragment key={index}>
              <Input />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default OtpForm;
