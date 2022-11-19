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

//wrap everything in the App component with the context provider because we want everything to have access to the context

//must add value attribute to context.provider, this is the value that youre passing down with the context
