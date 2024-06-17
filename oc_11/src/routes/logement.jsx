import "../styles/Logement.scss";
import { useLoaderData } from "react-router-dom";
import logement from "../data/logements.json";
import star from "../assets/star-active.svg";
import inactive_star from "../assets/star-inactive.svg";

export function loader({ params }) {
  const logements = logement.find((l) => l.id === params.logementId);
  console.log(logements);
  return { logements };
}

export default function Logement() {
  const { logements } = useLoaderData();

  if (!logements) {
    return <div>Logement not found</div>;
  }
  const backgroundImageStyle = {
    backgroundImage: `url(${logements.cover})`,
  };

  return (
    <div id="logements">
      <div className="logement_banner" style={backgroundImageStyle}>
        <h2>{logements.title}</h2>
      </div>
      <div className="title">{logements.title}</div>
      <div className="tags">
        {logements.tags.map((tag, index) => (
          <div key={index}>{tag}</div>
        ))}
      </div>
      <div className="nameAndLocal"></div>
      <div className="host">{logements.host.name}</div>
      <img src={logements.host.picture} className="host_pic" alt="host" />

      <div className="rating">
        {Array.from({ length: logements.rating }).map((_, index) => (
          <img key={index} src={star} alt="Star" className="star-icon" />
        ))}
        {Array.from({ length: 5 - logements.rating }).map((inactive, index) => (
          <img key={index} src={inactive_star} alt="" className="star-icon" />
        ))}
      </div>
      <div className="dropdowns"></div>
    </div>
  );
}
