import React from "react";
import Input from "./input";

interface OtpFormAttr {
  onChange: (otp: string[]) => void;
  data: string[];
}

const OtpForm: React.FC<OtpFormAttr> = ({ data, onChange }) => {
  const [activeInputField, setActiveInputField] = React.useState(0);

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

  const changeCodeAtFocus = (value: any, index?: number) => {
    const cloned = [...data];
    cloned[index ?? activeInputField] = value[0] || "";
    onChange(cloned);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value: any = event.target.value;
    const isNumber = !isNaN(value) || "" || undefined || null;
    if (!isNumber) return;
    changeCodeAtFocus(value, index);
  };

  //change the focus on  input
  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isInputValueValid(event.target.value)) {
      focusNextInputField();
    }
  };

  //handle backspace,delete,arrowLet,arrowRight
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
      //prevents the deletion of the value on spacebar click
    } else if (
      event.key === " " ||
      event.key === "Spacebar" ||
      event.key === "Space"
    ) {
      event.preventDefault();
    }
  };

  //handle OTP paste
  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault();
    let nextActiveInputField = activeInputField;
    const clonedOtp: any = [...data];

    const clippedOtp = event.clipboardData
      .getData("text/plain")
      .slice(0, 5)
      .split("")
      .filter((otp: any) => !isNaN(otp));

    for (let pos = 0; pos < data.length; ++pos) {
      if (pos >= activeInputField && clippedOtp.length > 0) {
        clonedOtp[pos] = clippedOtp.shift();
        nextActiveInputField++;
      }
    }

    setActiveInputField(nextActiveInputField);
    focusInput(nextActiveInputField);
    onChange(clonedOtp);
  };

  return (
    <>
      <div className="flex space-x-3 mt-3">
        {data.map((item, index) => {
          return (
            <Input
              focus={activeInputField}
              onKeyDown={handleOnKeyDown}
              key={index}
              index={index}
              onPaste={handlePaste}
              onInput={handleOnInput}
              value={item || ""}
              onChange={handleChange}
              setActiveInputField={setActiveInputField}
            />
          );
        })}
      </div>
    </>
  );
};

export default OtpForm;
