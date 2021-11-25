import escudo from "./EscudoMuseo.png";
import "./logo.css";

export const Logo = () => {
  return (
    <div className="logo">
      <img src={escudo} height="65px" />
    </div>
  );
};
