import { ProductsDetail } from "./productsDetail";

export const ItemDetail =({books}) =>{
      return (
        <ProductsDetail
          key={books.id}
          name={books.name}
          image={books.image}
          author={books.author}
          price={books.price}
          stock={books.stock}
          description={books.description}
          language={books.language}
          format={books.format}
          pages={books.pages}
          editorial={books.editorial}
          year={books.year}
        />
      );
    };
  