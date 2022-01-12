import { prodDependencies } from "mathjs";
import React from "react";

export const EqualsButton = (props) => {
  return (
    <button
      onClick={() => {
        props.handleClick("=");
      }}
      className="h-12 bg-red-400 hover:bg-red-500 hover:cursor-pointer col-span-2 rounded-lg flex items-center content-center"
    >
      <div className="mx-auto text-white text-2xl text-bold">=</div>
    </button>
  );
};
