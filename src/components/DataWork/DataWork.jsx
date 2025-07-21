import "./DataWork.css";
import Database from "../../assets/Database.png";
import Bg2 from "../../assets/backgroundImage2.png";
import Bg3 from "../../assets/backgroundImage3.png";

const DataWork = () => {
	return (
		<div className="section-container">
			<img className="background-image-2" src={Bg2} alt="" />
			<img className="background-image-3" src={Bg3} alt="" />
			<div className="sub-heading">Here’s how I work with data</div>
			<div className="cards-container">
				<div
					className="card"
					style={{
						backgroundColor: "#00674f10",
					}}>
					<div className="card-logo">
						<img src={Database} alt="" />
					</div>
					<div className="card-title">Data Cleansing</div>
					<div className="card-para">
						The process of detecting and correcting errors or inconsistencies in
						data to improve its quality.
					</div>
				</div>
				<div
					className="card"
					style={
						{
							// backgroundColor: "#00674f10",
						}
					}>
					<div className="card-logo">
						<img src={Database} alt="" />
					</div>
					<div className="card-title">Data Visualization</div>
					<div className="card-para">
						The graphical representation of data to make patterns, trends, and
						insights easier to understand.{" "}
					</div>
				</div>
				<div
					className="card"
					style={
						{
							// backgroundColor: "#00674f10",
						}
					}>
					<div className="card-logo">
						<img src={Database} alt="" />
					</div>
					<div className="card-title">Data Exploration</div>
					<div className="card-para">
						The process of detecting and correcting errors or inconsistencies in
						data to improve its quality.{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataWork;
