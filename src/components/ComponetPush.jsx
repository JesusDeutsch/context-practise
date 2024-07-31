import React, { useContext, useState, setNumber } from "react";
import { NumberContext } from "../context/StateContext";

const ComponetPush = () => {
  const { setNumber, number } = useContext(NumberContext);

  const value = 10;
  console.log({ number});

  const sum = () => {
    return setNumber(prev=>prev + value);
  };

  return (
    <div className="flex flex-col items-center border-[2px] gap-4 p-2">
      ComponetPush
      <button onClick={sum} className="bg-green-900 rounded-lg p-4 text-white">
        Añadir
      </button>
    </div>
  );
};

export default ComponetPush;
