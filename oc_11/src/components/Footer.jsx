import "../styles/Footer.scss";
import logo from "../assets/kasa_logo_white.svg";

function Footer() {
  return (
    <div className="ksa-footer">
      <img src={logo} alt="" srcset="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
