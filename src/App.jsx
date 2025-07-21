import { useState } from "react";
import "@fontsource/inter"; // Defaults to weight 400

import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">Hello! Portfolio Anushree</div>
      <HeroSection />
    </>
  );
}

export default App;
