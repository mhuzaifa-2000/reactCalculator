import React from "react";

export const NumberButton = ({ number }) => {
  return (
    <button className="rounded-full mx-1 my-1 bg-red-500 cursor-pointer focus:outline-none focus:ring focus:ring-red-300 hover:bg-red-400 w-12 h-12 grid items-center content-center">
      <div className="text-gray-900 mx-auto text-lg font-medium">{number}</div>
    </button>
  );
};
