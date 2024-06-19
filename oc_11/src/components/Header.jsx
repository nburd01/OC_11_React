// import Logements from "../data/logements.json";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/kasa_logo.svg";
import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="kasa-banner">
        <Link to="/">
          <img src={logo} alt="Kasa logo" className="kasa-logo" />
        </Link>
      </div>
      <nav>
        <NavLink exact="true" to="/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
