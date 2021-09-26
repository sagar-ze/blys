import React from "react";

interface InputAttr {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  focus: number;
  index: number;
}

const Input: React.FC<InputAttr> = ({ focus, value, index, ...rest }) => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  React.useEffect(() => {
    const { current } = inputRef;

    if (current && focus) {
      current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //check if the focus has changed
  //and set focus
  React.useEffect(() => {
    const { current } = inputRef;
    if (focus === index && current && focus) {
      current.focus();
      current.select();
    }
  }, [inputRef, focus]);

  return (
    <input
      {...rest}
      className="border-2 py-2 px-3 text-gray-700 w-9 h-9 border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent rounded border-solid"
      ref={inputRef}
      maxLength={1}
      autoComplete="off"
      value={value}
    />
  );
};

export default Input;
