import "./MySkill.css";
import backgroundImage1 from "../../assets/backgroundImage1.png";

const MySkill = () => {
  return (
    <div className="skill-container">
      <div className="section-title">My Skills</div>
      <div className="skill-image">
        <div className="skillset">
          <div className="skills">Excel | Google Sheets</div>
          <div className="skill-1">SpreadSheet</div>
        </div>
        <div className="skillset">
          <div className="skills">Excel | Google Sheets</div>
          <div className="skill-1">Visualization</div>
        </div>
        <div className="skillset">
          <div className="skills">Excel | Google Sheets</div>
          <div className="skill-1">Languages</div>
        </div>
        <div className="skillset">
          <div className="skills">Excel | Google Sheets</div>
          <div className="skill-1">Database</div>
        </div>
        <div className="skillset">
          <div className="skills">Excel | Google Sheets</div>
          <div className="skill-1">QA & Dev Tools</div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
