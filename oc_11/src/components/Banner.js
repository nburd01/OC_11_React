import logo from "../assets/kasa_logo.svg";

function Banner() {
  const title = "Kasa";
  return (
    <div className="kasa-banner">
      <img src={logo} alt="Kasa logo" className="kasa-logo" />
      <h1 className="kasa-title">{title}</h1>
    </div>
  );
}

export default Banner;
