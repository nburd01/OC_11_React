// import Logements from "../data/logements.json";
import logo from "../assets/kasa_logo.svg";
import "../styles/Banner.scss";

function Banner() {
  return (
    <div className="header">
      <div className="kasa-banner">
        <img src={logo} alt="Kasa logo" className="kasa-logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/1`}>Accueil</a>
          </li>
          <li>
            <a href={`/contacts/2`}>A propos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Banner;
