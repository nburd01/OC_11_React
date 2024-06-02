import Logements from "../data/logements.json"; // Import JSON data without destructuring
import "../styles/Cards.scss";

function Cards() {
  return (
    <div className="cards-container">
      {Logements &&
        Logements.map((logement) => (
          <div className="card" key={logement.id}>
            <div className="card__header">{logement.title}</div>
            <div className="card__body">
              <p>{logement.description}</p>
              <p>Location: {logement.location}</p>
              <p>Price: ${logement.price}</p>
            </div>
            <div className="card__footer">
              <button className="button">More Info</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
