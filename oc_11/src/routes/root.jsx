import { Outlet, Link, useLoaderData } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/App.scss";
import "../styles/Cards.scss";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export async function loader() {
  return { logements };
}

export default function Root() {
  const { logements } = useLoaderData();
  return (
    <main>
      <Banner />
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
      <Outlet />
      <Footer />
    </main>
  );
}
