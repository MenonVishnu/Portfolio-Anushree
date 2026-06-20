import "./Project.css";
import ProjectCard from "./ProjectCard";
import Bg4 from "../../assets/backgroundImage4.png";
import { projectsData } from "../../data/portfolioData";

const Project = () => {
	return (
		<div className="section-container" id="projects">
			<img className="background-image-4" src={Bg4} alt="" />
			<div className="section-title">
				My
				<br /> Projects
			</div>
			<div className="project-container">
				{projectsData.map((project, index) => (
					<ProjectCard key={index} data={project} />
				))}
			</div>
		</div>
	);
};

export default Project;
