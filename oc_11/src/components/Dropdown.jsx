import "../styles/Dropdown.scss";
import up from "../assets/arrow_up.svg";
import { useState } from "react";

function Dropdown({ title, content, context }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <div className="dropdown" onClick={handleOpen}>
      <div className="overlay-arrow">
        <img src={up} alt="" className="arrow-up" />
      </div>
      <span>{title}</span>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button onClick={handleMenuOne}>{content}</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default Dropdown;
