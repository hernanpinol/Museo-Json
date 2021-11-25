import { Link } from "react-router-dom";
import "./item.css";

export const Item = (props) => {
  return (
    <div className="productContainer">
      <h3>{props.name}</h3>
      <img src={props.image} />
      <p>
        <strong>{props.author}</strong> 
      </p>
      <p className="price">${props.price}</p>
      <Link to={`/product/${props.id}`}>
        <button>Más información</button>
      </Link>
    </div>
  );
};
