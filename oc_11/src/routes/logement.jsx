import "../styles/Logement.scss";
import { useLoaderData } from "react-router-dom";
import logements from "../data/logements.json";

export function loader({ params }) {
  const logement = logements.find((l) => l.id === params.logementId);
  console.log(logement);
  return { logement };
}

export default function Logement() {
  const { logement } = useLoaderData();

  if (!logement) {
    return <div>Logement not found</div>;
  }

  return (
    <div id="logement">
      <div className="kasa_banner">
        <h2>{logement.title}</h2>
      </div>
      <div className="nameAndLocal">{/* Add more logement details here */}</div>
      <div className="tags"></div>
      <div className="rating"></div>
      <div className="dropdowns"></div>
    </div>
  );
}
