import "../styles/Dropdown.scss";
import up from "../assets/arrow_up.svg";
function Dropdown({ title, content, context }) {
  const dropdownClassName = `dropdown ${context}`;

  return (
    <div className={dropdownClassName}>
      <div className="dropdown">
        <span>{title}</span>
        <div className="dropdown-content">{content}</div>
        <div className="overlay-arrow">
          <img src={up} alt="" className="arrow-up" />
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
