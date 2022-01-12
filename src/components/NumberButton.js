import React from "react";

export const NumberButton = ({ number, handleClick }) => {
  return (
    <button
      onClick={() => {
        handleClick(number);
      }}
      className="rounded-full mx-1 my-1 bg-red-200 cursor-pointer focus:outline-none focus:ring focus:ring-red-300 hover:bg-red-400 w-12 h-12 grid items-center content-center"
    >
      <div className="text-gray-900 mx-auto font-mono text-lg font-bold">
        {number}
      </div>
    </button>
  );
};
