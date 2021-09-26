import React from "react";

interface SubmitButtonAttr {
  isLoading: boolean;
  isSuccess: boolean;
}

const SubmitButton: React.FC<SubmitButtonAttr> = ({ isLoading, isSuccess }) => {
  return (
    <button
      type="submit"
      disabled={isLoading || isSuccess}
      className={`uppercase border rounded-md w-40 h-11 text-white mt-3 font-medium tracking-wide 
      ${isSuccess ? "bg-green" : "bg-midnight"}`}
    >
      {isLoading ? "Submitting ..." : isSuccess ? "Verified" : "Submit"}
    </button>
  );
};

export default SubmitButton;
