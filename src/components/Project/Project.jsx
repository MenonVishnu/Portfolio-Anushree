import "./Project.css";
import ProjectCard from "./ProjectCard";
import Bg4 from "../../assets/backgroundImage4.png";

const ProjectData = [
	{
		projectTitle: "Team Performance Tracking Portal",
		projectTools: "Power Bi | SQL Database",
		projectDescription: `Designed and developed a performance KPI dashboard using Power BI to
    analyze employee metrics for HR and operations teams.`,
	},
	{
		projectTitle: "Team Performance Tracking Portal",
		projectTools: "Power Bi | SQL Database",
		projectDescription: `Designed and developed a performance KPI dashboard using Power BI to
    analyze employee metrics for HR and operations teams.`,
	},
	{
		projectTitle: "Team Performance Tracking Portal",
		projectTools: "Power Bi | SQL Database",
		projectDescription: `Designed and developed a performance KPI dashboard using Power BI to
    analyze employee metrics for HR and operations teams.`,
	},
];

const Project = () => {
	return (
		<div className="section-container">
			<img className="background-image-4" src={Bg4} alt="" />
			<div className="section-title">
				My
				<br /> Project
			</div>
			<div className="project-container">
				{/* <ProjectCard data={ProjectData[0]} /> */}
				{ProjectData.map((project) => (
					<ProjectCard data={project} />
				))}
			</div>
		</div>
	);
};

export default Project;
