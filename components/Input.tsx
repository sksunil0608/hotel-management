import React from "react";

const Input = (props: any) => {
  return (
    <div className="my-4">
      <label
        htmlFor={props.name}
        className="block text-gray-700 font-bold mb-2"
      >
        {props.label}
        {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-600"
      />
    </div>
  );
};

export default Input;
