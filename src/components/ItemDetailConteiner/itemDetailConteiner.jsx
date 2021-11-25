import React, { useState, useEffect } from "react";
import { products } from "../ArrayProducts/arrayProducts";
import { ItemDetail } from "./itemDetail";
import "../ItemList/itemListContainer.css";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams({});

  useEffect(() => {
  const getItemDetails = new Promise((res) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });
  
 getItemDetails.then((res) => {
  itemId ? setItem(res.find((product) => product.id === itemId)):
      setItem(res);
    });
  }, [itemId]);

  return (
    <>
      <div className="background">
        <ItemDetail {...item} />
      </div>
    </>
  );
}

export default ItemDetailContainer;
