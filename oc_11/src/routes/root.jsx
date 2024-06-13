import "../styles/App.scss";
import Cards from "../components/Cards";
import HorizontalBanner from "../components/HorizontalBanner";
export default function Root() {
  return (
    <main>
      <HorizontalBanner />
      <Cards />
    </main>
  );
}
