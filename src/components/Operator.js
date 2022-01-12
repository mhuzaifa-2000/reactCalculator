import React from "react";

export const Operator = (props) => {
  return (
    <button
      onClick={() => {
        props.handleClick(props.type);
      }}
      className="h-10 max-w-full bg-blue-600 hover:bg-blue-700 font-bold focus:outline-none focus:ring focus:ring-blue-300 hover:cursor-pointer flex mx-1 content-center items-center rounded-md text-white text-xl"
    >
      <div className="mx-auto">{props.type}</div>
    </button>
  );
};
