import React from "react";
import Input from "./input";

interface OtpFormAttr {
  onChange: (otp: string) => void;
}

const OtpForm: React.FC<OtpFormAttr> = (props) => {
  const [activeInputField, setActiveInputField] = React.useState(0);
  const [data, _setData] = React.useState("");

  const getOtpValue = () => data.toString().split("") ?? [];

  const isInputValueValid = (value: string) => {
    const isTypeValid = !isNaN(parseInt(value, 10));
    return isTypeValid && value.trim().length === 1;
  };

  //handle focus input isInputValueValid
  const focusInput = (input: number) => {
    setActiveInputField(Math.max(Math.min(5, input), 0));
  };

  //focus on the next input
  const focusNextInputField = () => focusInput(activeInputField + 1);

  // Helper to return OTP from input
  const handleOtpChange = (otp: any) => {
    props.onChange(otp.join(""));
  };

  const changeCodeAtFocus = (value: any) => {
    const otp = getOtpValue();
    otp[activeInputField] = value[0];
    handleOtpChange(otp);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    changeCodeAtFocus(value);
  };
  //change the focus on  input
  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isInputValueValid(event.target.value)) {
      focusNextInputField();
    }
  };
  const otp = getOtpValue();

  return (
    <>
      <div className="flex space-x-3 mt-3">
        {new Array(6).fill("").map((_data, index) => {
          return (
            <Input
              focus={activeInputField}
              key={index}
              index={index}
              onInput={handleOnInput}
              value={otp[index]}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </>
  );
};

export default OtpForm;
