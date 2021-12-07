import { useContext } from "react";
import Products from "../../contetx/cartContext";
import "./itemListContainer.css";
import "./item.css";
import { Item } from "./item";

export const ItemListContainer = () => {
  const { products } = useContext(Products)

  return (
    <div className="background">
       <div className="content" >
      {
      products?.map((product) => {
        return (
          <Item
            id={product.id}
            name={product.name}
            image={product.image}
            author={product.author}
            price={product.price}
          />
        );
      })}
      </div>
    </div>
  );
};
