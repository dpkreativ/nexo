import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`${className} px-5 py-2 rounded-xl border-indigo-500 border`}
    >
      {children}
    </button>
  );
};

export default Button;
