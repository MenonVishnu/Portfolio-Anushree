import "./Navbar.css";
import ProfileImage from "../../assets/Profile.png";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="navbar-inner">
				<div className="navbar-brand">
					<img src={ProfileImage} className="navbar-avatar" alt="Anushree Shukla" />
				</div>
				<div className="navbar-links">
					<a href="#home" className="nav-link">About</a>
					<a href="#skills" className="nav-link">Skills</a>
					<a href="#projects" className="nav-link">Projects</a>
					<a href="#connect" className="nav-link">Connect</a>
				</div> 
			</div>
		</nav>
	);
};

export default Navbar;
