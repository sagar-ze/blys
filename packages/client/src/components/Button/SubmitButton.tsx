import React from "react";

interface SubmitButtonAttr {
  isLoading?: boolean;
  isSuccess?: boolean;
}

const SubmitButton: React.FC<SubmitButtonAttr> = ({ isLoading, isSuccess }) => {
  return (
    <button
      type="submit"
      disabled={isLoading || isSuccess}
      className={`button ${isSuccess ? "bg-green" : "bg-midnight"}`}
    >
      {isLoading ? "Submitting ..." : isSuccess ? "Verified" : "Submit"}
    </button>
  );
};

export default SubmitButton;
