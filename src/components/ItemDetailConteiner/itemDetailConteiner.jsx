import React, { useState } from "react";
import { useEffect } from "react";
import { books } from "../ArrayProducts/arrayProducts";
import "../ItemList/itemListContainer.css";
import { ItemDetail } from "./itemDetail";

function ItemDetailContainer() {
  const [list, setList] = useState({});

  const getItemDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(books[0]);
      }, 2000);
    });
  };

  useEffect(() =>
    getItemDetails().then((res) => {
      setList(res);
      console.log(list);
    })
  );

  return (
    <>
      <div className="greeting-page">
        <ItemDetail books={list} />
      </div>
    </>
  );
}

export default ItemDetailContainer;
