import { Outlet } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/App.scss";
import "../styles/Cards.scss";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export async function loader() {
  return { logements };
}

export default function Root() {
  return (
    <main>
      <Banner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </main>
  );
}
