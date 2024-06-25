import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2 ">
      <div className="spinner my-8  "></div>
      <p className="text-[#22223b] text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Spinner;
