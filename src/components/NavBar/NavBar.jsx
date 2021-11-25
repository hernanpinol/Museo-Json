import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { Logo } from "../Logo/logo";
import "./index.css";

const NavBar = () => {
  const categories = [
    { id: "aaaa", address: "/", text: "Inicio" },
    { id: "aaab", address: "/category/books", text: "Libros" },
    { id: "aaac", address: "/category/merchandising", text: "Merchandising" },
  ];

  return (
    <>
      <section className="navBar">
        <div className="nav-top">
          <h2>Museo Histórico Regional de la Colonia San José</h2>
        </div>
        <div className="nav-bottom">
          {categories.map((cat) => {
            return (
              <div key={cat.id}>
                <NavLink
                  className="navLink"
                  to={cat.address}
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                >
                  {cat.text}
                </NavLink>
              </div>
            );
          })}
          <CartWidget />
          <Logo />
        </div>
      </section>
    </>
  );
};

export default NavBar;
