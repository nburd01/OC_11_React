// import Logements from "../data/logements.json";
import { NavLink } from "react-router-dom";
import logo from "../assets/kasa_logo.svg";
import "../styles/Banner.scss";

function Banner() {
  return (
    <div className="header">
      <div className="kasa-banner">
        <img src={logo} alt="Kasa logo" className="kasa-logo" />
      </div>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </div>
  );
}

export default Banner;
