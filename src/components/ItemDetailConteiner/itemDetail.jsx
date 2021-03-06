import React from "react";
import { Link } from "react-router-dom";
import { useAddToCart } from "../../contetx/cartContext";
import "./itemDetail.css";

export const ItemDetail = (product) => {
  const addToCart = useAddToCart();

  const { id, image, name, author, stock, price, description } = product;

  return (
    <>
      <div className="itemDetailContainer">
        <div className="itemDetailImg">
          <img src={image} alt={`${id}-${name}`} />
        </div>
        <div className="itemDetailDescription">
          <div className="itemDetailTitle">
            <h3>{name}</h3>
            <p>
              <strong>{author}</strong>
            </p>
            <p>
              <strong>Stock: </strong>
              {stock}
            </p>
          </div>
          <div className="detailPrice">
            <p>${price}</p>
            <Link to="">
              <button onClick={() => addToCart(product)}>Comprar</button>
            </Link>
          </div>
          <div className="itemDescription">
            <p>
              <i>{description}</i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
