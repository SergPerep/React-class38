import { useState } from "react";
import Count from "./Count";
import Button from "./Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClickButton = () => setCount(count + 1);
  const feedback = count > 10 ? "It's higher than 10" : "Keep counting...";
  return (
    <div className="counter">
      <Count count={count} />
      <p className="feedback">{feedback}</p>
      <Button onClick={handleClickButton} />
    </div>
  );
};

export default Counter;
