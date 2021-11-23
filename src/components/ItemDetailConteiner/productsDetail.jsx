import "./productsDetail.css";

export const ProductsDetail = (props) => {
  return (
    <>
      <div className="itemDetailContainer">
        <div className="itemDetailImg">
          <img src={props.image} />
        </div>
        <div className="itemDetailDescription">
          <div className="itemDetailTitle">
            <h3>{props.name}</h3>
            <p>
              <strong>Autor:</strong> {props.author}
            </p>
            <p><strong>Stock: </strong>{props.stock}</p>
          </div>
          <div className="detailPrice">
            <p>${props.price}</p>
            <button>Comprar</button>
          </div>
          <div className="itemDescription">
            <p><i>{props.description}</i></p>
          </div>
          <div className="detailSecondary">
            <p><strong>Formato:</strong> {props.format}</p>
            <p><strong>Editorial:</strong> {props.editorial}</p>
            <p><strong>Nº de páginas:</strong> {props.pages}</p>
            <p><strong>Año:</strong> {props.year}</p>
          </div>
        </div>
      </div>
    </>
  );
};
