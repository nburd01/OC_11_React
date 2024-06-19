import { Outlet } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/App.scss";
import "../styles/Cards.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

export async function loader() {
  return { logements };
}

export default function Root() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
