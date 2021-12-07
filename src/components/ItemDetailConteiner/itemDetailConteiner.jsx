import React, { useState, useEffect, useContext } from "react";
import { shopProducts } from "../ArrayProducts/arrayProducts";
import { ItemDetail } from "./itemDetail";
import "../ItemList/itemListContainer.css";
import { useParams } from "react-router";
import Products from "../../contetx/cartContext";

const ItemDetailContainer = () => {
  const { products } = useContext(Products)

  return (
    <>
      <div className="background">
      {
      products?.map((product) => {
        return (
          <ItemDetail
            id={product.id}
            name={product.name}
            image={product.image}
            author={product.author}
            price={product.price}
            stock={product.stock}
            description={product.description}
          />
        );
      })}
      </div>
    </>
  );
}

export default ItemDetailContainer;
