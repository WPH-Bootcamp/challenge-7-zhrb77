import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, className = "", id, ...props }) => {
  return (
    <div className="flex flex-col w-full gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-bold text-start leading-7">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full h-12 bg-none border border-[#DFDFDF] dark:border-[#252B37] rounded-xl px-4 py-2 text-sm leading-7 lg:text-base lg:leading-7.5 font-medium text-[#717680] dark:text-[#FDFDFD] focus:outline-none focus:border-[#CC4E32] ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;