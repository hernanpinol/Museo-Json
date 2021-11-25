import carrito from "./carrito-de-compras.png";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="imagen">
      <img src={carrito} height="50px" />
    </div>
  );
};
