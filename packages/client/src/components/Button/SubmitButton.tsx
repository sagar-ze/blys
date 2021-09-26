import React from "react";

const SubmitButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="uppercase bg-midnight border rounded-md w-40 h-11 text-white mt-3 font-medium tracking-wide"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
