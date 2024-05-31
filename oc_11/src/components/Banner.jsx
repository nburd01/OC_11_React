// import Logements from "../data/logements.json";
import logo from "../assets/kasa_logo.svg";
import "../styles/Banner.scss";

function Banner() {
  const title = "Kasa";

  return (
    <div className="kasa-banner">
      <img src={logo} alt="Kasa logo" className="kasa-logo" />
      <h1 className="kasa-title">{title}</h1>

      {/* {Logements &&
        Logements.map((logement) => (
          <div key={logement.id}>{logement.title}</div>
        ))} */}
    </div>
  );
}

export default Banner;
