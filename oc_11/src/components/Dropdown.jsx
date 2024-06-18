import "../styles/Dropdown.scss";

function Dropdown({ title, content, context }) {
  const dropdownClassName = `dropdown ${context}`;

  return (
    <div className={dropdownClassName}>
      <div class="dropdown">
        <span>{title}</span>
        <div class="dropdown-content">{content}</div>
      </div>
    </div>
  );
}

export default Dropdown;
