import { books } from "../ArrayProducts/arrayProducts";
import { Item } from "./item";

export const ItemList =() =>{
  return books.map((product) => {
    return (
      <Item
        key={product.id}
        name={product.name}
        image={product.image}
        author={product.author}
        price={product.price}
      />
    );
  });
}

