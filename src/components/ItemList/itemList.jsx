import { Item } from "./item";

export const ItemList =({books}) =>{
  return books.map((product) => {
    return (
      <Item
        id={product.id}
        name={product.name}
        image={product.image}
        author={product.author}
        price={product.price}
      />
    );
  });
}

