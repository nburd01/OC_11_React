import "../styles/Dropdown.scss";

function Dropdown({ title, content, context }) {
  const dropdownClassName = `dropdown ${context}`;

  return (
    <div className={dropdownClassName}>
      <div className="dropdown">
        <span>{title}</span>
        <div className="dropdown-content">{content}</div>
      </div>
    </div>
  );
}

export default Dropdown;
