import "./Counter.css";
import MyCounter from "./Counter-wrapper";

import { useState } from "react";

function Counters() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="app p-5 justify-content-center">
      <h2>Counter App</h2>
      <MyCounter
        count={counter}
        increment={incrementCounter}
        decrement={decrementCounter}
      />
    </div>
  );
}
function Header(props) {
  return <h2>{props.title}</h2>;
}
export { Counters, Header };
