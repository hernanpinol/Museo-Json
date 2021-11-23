import React, { useState } from "react";
import { books } from "../ArrayProducts/arrayProducts";
import "../ItemList/itemListContainer.css";
import { ItemDetail } from "./itemDetail";

const ItemDetailContainer = () => {
    const [list, setList] = useState({});
  
    const getItemDetails = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(books [0]);
      }, 2000);
    });
  
    getItemDetails.then(res => {
        setList(res);
      });
    return (
      <>
        <div className="greeting-page">
          <ItemDetail books={list} />
        </div>
      </>
    );
  };
  
  export default ItemDetailContainer;