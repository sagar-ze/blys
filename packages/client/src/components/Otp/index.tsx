import { union } from "lodash";
import React from "react";
import Input from "./input";

interface OtpFormAttr {
  children: React.ReactNode;
  onSubmit: (data: string) => void;
  isLoading: boolean;
}

const OtpForm: React.FC<OtpFormAttr> = ({ children, onSubmit, isLoading }) => {
  const [activeInputField, setActiveInputField] = React.useState(0);
  const [errors, setErrors] = React.useState<number[] | []>([]);
  const [otp, setOtp] = React.useState<string[]>(new Array(6).fill(""));

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
    const cloned = [...otp];
    cloned[index ?? activeInputField] = value[0] || "";
    setOtp(cloned);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value: any = event.target.value;
    const isNumber = !isNaN(value) || "" || undefined || null;
    if (!isNumber) return;
    const clonedErrors: any = [...errors];
    const errorIndex = clonedErrors.indexOf(index);

    if (errorIndex !== -1) {
      clonedErrors.splice(errorIndex, 1);
      setErrors(union(clonedErrors));
    }

    changeCodeAtFocus(value, index);
  };

  //change the focus on  input
  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isInputValueValid(event.target.value)) {
      focusNextInputField();
    }
  };

  //handle backspace,delete,arrowLet,arrowRight
  const handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      changeCodeAtFocus("");
      focusPrevInput();
      if (errors?.length) setErrors(union([...errors, index]));
    } else if (event.key === "Delete") {
      event.preventDefault();
      changeCodeAtFocus("");
      if (errors?.length) setErrors(union([...errors, index]));
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusPrevInput();
      if (errors?.length) setErrors(union([...errors, index]));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      focusNextInputField();
      if (errors?.length) setErrors([]);

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
    const clonedOtp: any = [...otp];

    const clippedOtp = event.clipboardData
      .getData("text/plain")
      .slice(0, 5)
      .split("")
      .filter((otp: any) => !isNaN(otp));

    for (let pos = 0; pos < otp.length; ++pos) {
      if (pos >= activeInputField && clippedOtp.length > 0) {
        clonedOtp[pos] = clippedOtp.shift();
        nextActiveInputField++;
      }
    }

    setActiveInputField(nextActiveInputField);
    focusInput(nextActiveInputField);
    setOtp(clonedOtp);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const emptyFields = otp.reduce((acc: any, curr: any, index) => {
      if (curr === "") {
        acc = [...acc, index];
      }
      return acc;
    }, []);
    if (!!emptyFields.length) {
      setErrors(union(emptyFields));
      setActiveInputField(errors[0]);
      return;
    }
    const sanitizedOTP = otp.join("");
    onSubmit(sanitizedOTP);
  };

  return (
    <>
      <form className="grid place-items-center" onSubmit={handleSubmit}>
        <div className="flex space-x-3 mt-3">
          {otp.map((item, index) => {
            const hasError = (errors as any).includes(index);
            return (
              <Input
                disabled={isLoading}
                focus={activeInputField}
                onKeyDown={(event) => handleOnKeyDown(event, index)}
                key={index}
                hasError={hasError}
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
        {children}
      </form>
    </>
  );
};

export default OtpForm;
