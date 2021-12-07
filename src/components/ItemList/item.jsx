import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({
    name,
    image,
    author,
    price,
    id,
}) =>{ 

  return (
    <div className="productContainer">
      <h3>{name}</h3>
      <img src={image} alt={`${id}-${name}`} />
      <p>
        <strong>{author}</strong> 
      </p>
      <p className="price">${price}</p>
      <Link to={`/product/${id}`}>
        <button>Más información</button>
      </Link>
    </div>
  );}

