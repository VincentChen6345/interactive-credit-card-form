import "./App.css";
import React from "react";
import CardCTA from "./components/CardCTA.jsx";
import backgroundImageDesktop from "./images/bg-main-desktop.png";
import backgroundImageMobile from "./images/bg-main-mobile.png";
function App() {
  return (
    <div className="App">
      <img
        src={backgroundImageDesktop}
        alt=""
        className="background-image-desktop"
      />
      <img
        src={backgroundImageMobile}
        alt=""
        className="background-image-mobile"
      />
      <CardCTA />
    </div>
  );
}

export default App;

//wrap everything in the App component with the context provider because we want everything to have access to the context

//must add value attribute to context.provider, this is the value that youre passing down with the context
