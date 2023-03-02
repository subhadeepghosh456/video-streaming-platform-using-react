import React from "react";
import ShrimmerUI from "./ShrimmerUI";

const Shrimmer = () => {
  return (
    <div className="flex flex-wrap gap-5 ">
      {Array(50).fill("").map((item, index) => (
        <ShrimmerUI key={index}/>
      ))}
    </div>
  );
};

export default Shrimmer;
