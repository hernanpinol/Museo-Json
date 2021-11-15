import { useState } from "react";
import "./itemCount.css";

const ItemCount = () => {
  let stockLibro = "5";
  const [number, setNumber] = useState(1);

  const increase = () => {
    if (number < stockLibro) setNumber(number + 1);
  };

  const decrease = () => {
    if (number > 0) setNumber(number - 1);
  };

  return (
    <div className="itemCount">
      <h4>Libro: Nuestros Abuelos</h4>
      <p>{number}</p>
      <div className="buttonContainer">
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
