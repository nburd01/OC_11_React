import "../styles/App.scss";
import Cards from "../components/Cards";
export default function Root() {
  return (
    <div className="root">
      <main>
        <p>Main content goes here.</p>
        <Cards />
      </main>
    </div>
  );
}
