import React, { useContext } from "react";
import { NumberContext } from "../context/StateContext";

const Result = () => {
  const { number } = useContext(NumberContext);

  return <div className="flex items-center border-[2px] mt-4">Result:   {number}</div>
};

export default Result;
