import carrito from './carrito-de-compras.png'
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="imagen">
<img src={carrito} height="50px" />
    </div>
  );
};

export default CartWidget;
