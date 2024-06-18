import "../styles/About.scss";
import Dropdown from "../components/Dropdown";
import Banners from "../components/Banners";

export default function About() {
  return (
    <div>
      <Banners
        backgroundImage={
          require("/home/niall01/OpenClassrooms/p11/oc_11/src/assets/about_banner.svg")
            .default
        }
      />
      <div className="dropdowns block">
        <Dropdown title="Fiabilité" />
        <Dropdown title="Respect" />
        <Dropdown title="Service" />
        <Dropdown title="Sécurité" />
      </div>
    </div>
  );
}
