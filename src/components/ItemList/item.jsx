import "./item.css";

export const Item = (props) => {
  return (
    <>
      <div className="productContainer">
        <h3>{props.name}</h3>
        <img src={props.image} />
        <p>
          <strong>Autor:</strong> {props.author}
        </p>
        <p className="price">${props.price}</p>
        <button>Más información</button>
      </div>
    </>
  );
};
