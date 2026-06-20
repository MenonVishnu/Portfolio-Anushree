import "./HeroSection.css";
import ProfileImage from "../../assets/Profile.png";
import WavingHand from "../../assets/wavinghand.png";
import LocationIcon from "../../assets/Icons/locationIcon.png";
import FlagIcon from "../../assets/Icons/flagIcon.png";
import WorldIcon from "../../assets/Icons/worldIcon.png";
import { heroData } from "../../data/portfolioData";

const HeroSection = () => {
  return (
    <section className="hero-section-container" id="home">
      <div className="hero-left">
        <div className="hero-greeting">
          {heroData.greeting} <img src={WavingHand} className="waving-hand" alt="👋" />
        </div>
        <h1 className="hero-title">
          {heroData.firstName}
          <br />
          {heroData.lastName}
        </h1>
        
        {heroData.isOpenToWork && (
          <div className="badge-row-1">
            <div className="badge badge-open">
              Open to work
            </div>
          </div>
        )}

        <div className="badge-row-2">
          <div className="badge badge-info">
            <img src={LocationIcon} className="badge-img-icon" alt="" /> {heroData.location}
          </div>
          <div className="badge badge-info">
            <img src={WorldIcon} className="badge-img-icon" alt="" /> {heroData.languages}
          </div>
          <div className="badge badge-role">
            <img src={FlagIcon} className="badge-img-icon" alt="" /> {heroData.role}
          </div>
        </div>

        <p className="hero-para">
          {heroData.bio}
        </p>
      </div>
      <div className="hero-image-wrapper">
        <div className="hero-image-glow"></div>
        <div className="hero-image">
          <img src={ProfileImage} alt="Anushree Shukla" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
