import "./HeroSection.css";
import ProfileImage from "../../assets/Profile.png";
import WavingHand from "../../assets/wavinghand.png";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-left">
        <div className="hero-title">
          I’m Anushree Shukla <img src={WavingHand} alt="" />
        </div>
        <div className="hero-para">
          Detail-oriented Data Analyst with expertise in data validation,
          reporting, and root cause analysis. Skilled in deriving insights
          through statistical modeling and data visualization to support
          business decisions. 
        </div>
      </div>
      <div className="hero-image">
        <img src={ProfileImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
