import "../styles/Logement.scss";
import { useLoaderData } from "react-router-dom";
import logement from "../data/logements.json";
import star from "../assets/star-active.svg";
import inactive_star from "../assets/star-inactive.svg";
import Dropdown from "../components/Dropdown";

export function loader({ params }) {
  const logements = logement.find((l) => l.id === params.logementId);
  console.log(logements);
  return { logements };
}

export default function Logement({ dropdownClass }) {
  const { logements } = useLoaderData();

  if (!logements) {
    return <div>Logement not found</div>;
  }
  const backgroundImageStyle = {
    backgroundImage: `url(${logements.cover})`,
  };

  return (
    <div id="logements">
      <div className="logement_banner" style={backgroundImageStyle}></div>
      <div className="logements-info">
        <div className="part1">
          <div className="title">
            <h1>{logements.title}</h1>
          </div>
          <div className="location">{logements.location}</div>
          <div className="tags">
            {logements.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="nameAndLocal"></div>
        </div>
        <div className="part2">
          <div className="host">
            <div className="host_name">{logements.host.name}</div>
            <img src={logements.host.picture} className="host_pic" alt="host" />
          </div>

          <div className="rating">
            {Array.from({ length: logements.rating }).map((_, index) => (
              <img key={index} src={star} alt="Star" className="star-icon" />
            ))}
            {Array.from({ length: 5 - logements.rating }).map(
              (inactive, index) => (
                <img
                  key={index}
                  src={inactive_star}
                  alt=""
                  className="star-icon"
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="dropdowns flex">
        <Dropdown title="Description" content={logements.description} />
        <Dropdown
          title="Equipements"
          content={logements.equipments.map((equipement, index) => (
            <p key={index}>{equipement}</p>
          ))}
        />
      </div>
    </div>
  );
}
