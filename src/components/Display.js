import React from "react";
import { useState } from "react";
export const Display = (props) => {
  const onKeyPress = (e) => {
    console.log(e);
    var key = e.key;
    e.preventDefault();
  };
  return (
    <input
      type="text"
      placeholder="Enter Number Here..."
      value={props.value}
      onChange={props.onValueChange}
      onKeyDown={onKeyPress}
      className="bg-gray-200 cursor-pointer focus:ring text-gray-600 focus:ring-gray-300  caret-transparent px-1 text-right font-bold text-2xl font-mono w-full h-12 rounded-md my-3  focus:outline-none placeholder:text-right"
    />
  );
};
