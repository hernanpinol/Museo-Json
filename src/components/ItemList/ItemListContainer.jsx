import React, { useState } from "react";
import { books } from "../ArrayProducts/arrayProducts";
import { ItemList } from "./itemList";
import "./itemListContainer.css";

const ItemListContainer = () => {
  const [list, setList] = useState([]);

  const listPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(books);
    }, 2000);
  });

  listPromise.then(res => {
      setList(res);
    });

  return (
    <>
      <div className="greeting-page">
        <ItemList books={list} />
      </div>
    </>
  );
};

export default ItemListContainer;
