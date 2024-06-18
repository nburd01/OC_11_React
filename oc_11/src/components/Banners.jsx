import "../styles/Banner.scss";
function Banners({ backgroundImage, text }) {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="banner-text">{text}</h1>
    </div>
  );
}

export default Banners;
