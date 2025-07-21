import { useState } from "react";
import "@fontsource/inter/400.css"; // Defaults to weight 400
import "@fontsource/inter/500.css"; // Defaults to weight 400
import "@fontsource/inter/600.css"; // Defaults to weight 400
import "@fontsource/inter/800.css"; // Defaults to weight 400

import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import MySkill from "./components/MySkill/Myskill";
import DataWork from "./components/DataWork/DataWork";
import Project from "./components/Project/Project";
import ThankYou from "./components/ThankYou/ThankYou";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			{/* <div className="main-container">Hello! Portfolio Anushree</div> */}
			<Navbar />
			<HeroSection />
			<MySkill />
			<DataWork />
			<Project />
			<ThankYou />
		</>
	);
}

export default App;
