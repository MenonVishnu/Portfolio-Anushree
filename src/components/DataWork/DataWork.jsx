import "./DataWork.css";
import Database from "../../assets/Database.png";
import Bg2 from "../../assets/backgroundImage2.png";
import Bg3 from "../../assets/backgroundImage3.png";
import { dataWorkData } from "../../data/portfolioData";

const DataWork = () => {
	return (
		<div className="section-container" id="experience">
			<img className="background-image-2" src={Bg2} alt="" />
			<img className="background-image-3" src={Bg3} alt="" />
			<div className="sub-heading">Here’s how I work with data</div>
			<div className="cards-container">
				{dataWorkData.map((card, index) => (
					<div className="card" key={index}>
						<div className="card-logo">
							<img src={Database} alt="Database Logo" />
						</div>
						<div className="card-title">{card.title}</div>
						<div className="card-para">{card.para}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DataWork;
