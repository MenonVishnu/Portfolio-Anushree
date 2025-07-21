import "./MySkill.css";
import Cube from "../../assets/cube.png";
import Bg1 from "../../assets/backgroundImage1.png";

const MySkill = () => {
	return (
		<div className="section-container">
			<img className="background-image-1" src={Bg1} alt="" />
			<div className="section-title">
				My <br />
				Skills
			</div>
			<div className="skillsets">
				<div className="skill-image">
					<img src={Cube} alt="" />
				</div>
				<div
					className="skillset"
					style={{
						top: "-30px",
					}}>
					<div
						className="skills"
						style={{
							position: "absolute",
							top: "-20px",
							right: "-130px",
						}}>
						Excel | Google Sheets
					</div>
					<div className="skill-1">Spreadsheet</div>
				</div>
				<div
					className="skillset"
					style={{
						top: "70px",
						right: "340px",
					}}>
					<div className="skill-1">QA & Dev Tools</div>

					<div
						className="skills"
						style={{
							position: "absolute",
							right: "-180px",
							width: "20vw",
						}}>
						Azure DevOps | Microsoft Office Suite | Browser DevTools
					</div>
				</div>
				<div
					className="skillset"
					style={{
						bottom: "60px",
						right: "460px",
					}}>
					<div className="skill-1">Database</div>

					<div
						className="skills"
						style={{
							position: "absolute",
							right: "-190px",
							width: "20vw",
						}}>
						MySQL | NoSQL | Kaggle
					</div>
				</div>
				<div
					className="skillset"
					style={{
						bottom: "25px",
						right: "680px",
					}}>
					<div className="skill-1">Languages</div>

					<div
						className="skills"
						style={{
							position: "absolute",
							right: "-70px",
							width: "20vw",
						}}>
						Python | Pandas | NumPy | SQL
					</div>
				</div>
				<div
					className="skillset"
					style={{
						bottom: "240px",
						right: "730px",
					}}>
					<div className="skill-1">Visualization</div>

					<div
						className="skills"
						style={{
							position: "absolute",						
							right: "42px",
							width: "20vw",
						}}>
						Tableau | Power Bi | Matplotlib | Seaborn
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkill;
