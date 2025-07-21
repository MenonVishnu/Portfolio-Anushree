import "./ProjectCard.css";
import ProjectBackground from "../../assets/ProjectBackground.png";
import Database from "../../assets/Database2.png";
import TopRight from "../../assets/top-right-arrow.png";

const ProjectCard = (props) => {
	return (
		<div
			className="project-card"
			style={{
				backgroundImage: `url(${ProjectBackground})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "auto",
			}}>
			<div className="top-right">
				<img src={Database} alt="" />
				<img className="arrow" src={TopRight} alt="" />
			</div>
			<div className="project-title">{props.data.projectTitle}</div>
			<div className="project-tools">{props.data.projectTools}</div>
			<div className="project-description">{props.data.projectDescription}</div>
		</div>
	);
};

export default ProjectCard;
