import React from "react";

const Button = ({ name }) => {
  return (
    <button className="p-2 px-5 mx-1 border-2 rounded-4xl min-w-4 text-amber-50 bg-gray-500 cursor-pointer">
      {name}
    </button>
  );
};

export default Button;
