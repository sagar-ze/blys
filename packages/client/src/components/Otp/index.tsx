import React from "react";
import Input from "./input";

interface OtpFormAttr {
  onChange: (otp: string) => void;
  data: string;
}

const OtpForm: React.FC<OtpFormAttr> = ({ data, onChange }) => {
  const [activeInputField, setActiveInputField] = React.useState(0);

  const getOtpValue = () => data.toString().split("") ?? [];

  const isInputValueValid = (value: string) => {
    const isTypeValid = !isNaN(parseInt(value, 10));
    return isTypeValid && value.trim().length === 1;
  };

  //handle focus input isInputValueValid
  const focusInput = (input: number) => {
    setActiveInputField(Math.max(Math.min(5, input), 0));
  };

  //focus on the next input field
  const focusNextInputField = () => focusInput(activeInputField + 1);
  //focus on previous input field
  const focusPrevInput = () => focusInput(activeInputField - 1);

  // Helper to return OTP from input
  const handleOtpChange = (otp: any) => {
    onChange(otp.join(""));
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

  //handle backspace
  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      changeCodeAtFocus("");
      focusPrevInput();
    } else if (event.key === "Delete") {
      event.preventDefault();
      changeCodeAtFocus("");
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusPrevInput();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      focusNextInputField();
    } else if (
      event.key === " " ||
      event.key === "Spacebar" ||
      event.key === "Space"
    ) {
      event.preventDefault();
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
              onKeyDown={handleOnKeyDown}
              key={index}
              index={index}
              onInput={handleOnInput}
              value={otp[index] || ""}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </>
  );
};

export default OtpForm;
