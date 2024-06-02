import Logements from "../data/logements.json"; // Import JSON data without destructuring
import "../styles/Cards.scss";

function Cards() {
  return (
    <div className="cards-container">
      {Logements.map((logement) => (
        <div className="card">
          <div className="card-footer">{logement.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
