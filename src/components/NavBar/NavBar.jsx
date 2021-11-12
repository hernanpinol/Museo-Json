


import CartWidget from "../Carrito/CartWidget";
import "./index.css";

 const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="nav-top">
          <h2>Museo Histórico Regional de la Colonia San José</h2>
        </div>
        <div className="nav-bottom">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Libros</a>
            </li>
            <li>
              <a href="#">Merchandising</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
      
    </>
  );
};

export default NavBar