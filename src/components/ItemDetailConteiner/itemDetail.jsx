import "./itemDetail.css";

export const ItemDetail =({books}) =>{
      return (
        <>
      <div className="itemDetailContainer">
        <div className="itemDetailImg">
          <img src={books.image} />
        </div>
        <div className="itemDetailDescription">
          <div className="itemDetailTitle">
            <h3>{books.name}</h3>
            <p>
              <strong>Autor:</strong> {books.author}
            </p>
            <p><strong>Stock: </strong>{books.stock}</p>
          </div>
          <div className="detailPrice">
            <p>${books.price}</p>
            <button>Comprar</button>
          </div>
          <div className="itemDescription">
            <p><i>{books.description}</i></p>
          </div>
          <div className="detailSecondary">
            <p><strong>Formato:</strong> {books.format}</p>
            <p><strong>Editorial:</strong> {books.editorial}</p>
            <p><strong>Nº de páginas:</strong> {books.pages}</p>
            <p><strong>Año:</strong> {books.year}</p>
          </div>
        </div>
      </div>
    </>
      );
    };
  