import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { UseCounter } from "../hooks/useCounter";

const DashboardP = () => {
  const loacation = useLocation();
  console.log(loacation);
  const lacation2 = window.location;
  console.log(lacation2);
  
  const [counter, decrease, increase] = UseCounter();

  return <Fragment>
    <h3>{counter}</h3>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </Fragment>;
};

export default DashboardP;
