import React from "react";

interface OtpInputAttr {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setActiveInputField: (index: number) => void;
  onPaste: (event: React.ClipboardEvent) => void;
  focus: number;
  index: number;
}

const Input: React.FC<OtpInputAttr> = ({
  focus,
  value,
  onChange,
  index,
  setActiveInputField,
  ...rest
}) => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  React.useEffect(() => {
    const { current } = inputRef;

    if (current && focus) {
      current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //check if the focus has changed
  //and set focus
  React.useEffect(() => {
    const { current } = inputRef;
    if (focus === index && current) {
      current.focus();
      current.select();
    }
  }, [inputRef, focus]);

  //set Active input field to index on focus
  const handleFocus = (event: any) => {
    setActiveInputField(index);
    event.target.focus();
  };

  return (
    <input
      {...rest}
      onChange={(event) => onChange(event, index)}
      className="border-2 py-2 px-3 text-gray-700 w-9 h-9 border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent rounded border-solid select-none"
      ref={inputRef}
      maxLength={1}
      autoComplete="off"
      onFocus={handleFocus}
      value={value}
    />
  );
};

export default Input;
