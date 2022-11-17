import "./App.css";
import React from "react";
import CardCTA from "./components/CardCTA.jsx";
import backgroundImage from "./images/bg-main-desktop.png";
function App() {
  return (
    <div className="App">
      <img src={backgroundImage} alt="" className="background-image" />
      <CardCTA />
    </div>
  );
}

export default App;
