import {
  useCartOpen,
  useCartProducts,
  useDeleteProducts,
  useIsCartOpen,
} from "../../contetx/cartContext";
import carrito from "./carrito-de-compras.png";
import "./CartWidget.css";

export const CartWidget = () => {
  const isCartOpen = useIsCartOpen();
  const openCart = useCartOpen();
  const cartProducts = useCartProducts();
  const deleteProduct = useDeleteProducts();

  return (
    <>
      <div className="imagen">
        <img src={carrito} height="50px" onClick={openCart} />
      </div>
      {isCartOpen && (
        <div className="cartList">
          <div className="cartDetails">
            {cartProducts?.map((product) => {
              const { image, name, price } = product;
              return (
                <div className="productContainer">
                  <img src={image} alt={name} />
                  <span>
                    <i>{name}</i>
                  </span>
                  <span>
                    <strong>${price}</strong>
                  </span>
                  <button onClick={() => deleteProduct(product)}>
                    Eliminar
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
