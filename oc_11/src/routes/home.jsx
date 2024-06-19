import { Link } from "react-router-dom";
import logements from "../data/logements.json";
import Banners from "../components/Banners";
export async function loader() {
  return { logements };
}

function Home() {
  return (
    <>
      <Banners
        backgroundImage={
          require("/home/niall01/OpenClassrooms/p11/oc_11/src/assets/home_banner.svg")
            .default
        }
        text="Chez vous, partout et ailleurs"
      />
      <div className="cards-container">
        <nav>
          {logements.length ? (
            <ul>
              {logements.map((logement) => (
                <li key={logement.id}>
                  <Link to={`logements/${logement.id}`}>
                    {logement.title || logement.last ? (
                      <div className="card">
                        <div className="card-footer">{logement.title}</div>
                      </div>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {logement.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No logements</i>
            </p>
          )}
        </nav>
      </div>
    </>
  );
}

export default Home;
