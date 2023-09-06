import "./heroBanner.css";
import heroBannerImage from "../../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <div className="container-app">
      <div className="heroBanner">
        <div className="heroBanner-left">
          <h2>Fitness Club</h2>
          <p>
            Sweat, Smile <br />
            And Repeat
          </p>
          <p className="pr-3">
            {" "}
            Check out the most effective exercises personalized to you
          </p>
          <a href="#exercises">Exploar Exercises</a>
          <p className="Exercises-banner">Exercises</p>
        </div>
        <div className="heroBanner-right">
          <img src={heroBannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
