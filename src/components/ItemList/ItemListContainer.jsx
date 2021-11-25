import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { products } from "../ArrayProducts/arrayProducts";
import { ItemList } from "./itemList";
import "./itemListContainer.css";

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const { catId } = useParams();


useEffect(() => {
  const listPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  listPromise.then(res => {
    catId ? setList(res.filter((item) => item.category === catId)):setList(res);
    } );
  }, [catId]);
  return (
    <>
      <div className="background">
       <div className="content" ><ItemList books={list} /></div>
        
      </div>
    </>
  );

};

export default ItemListContainer;
