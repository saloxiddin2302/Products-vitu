import { useState } from "react";

export const UseCounter = (inshlase = 0) => {
  const [counter, setCounter] = useState(inshlase);
   const  decrease = () => {
    setCounter(counter - 1);
  };

 const increase = () => {
    setCounter(counter + 1);
  };

  return [counter, decrease, increase];
};
