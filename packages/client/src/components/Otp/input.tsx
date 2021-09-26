import React from "react";

const Input: React.FC = () => {
  return (
    <input
      className="border-2 py-2 px-3 text-gray-700 w-9 h-9 border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent rounded border-solid"
      placeholder="1"
      maxLength={1}
      autoComplete="off"
    />
  );
};

export default Input;
