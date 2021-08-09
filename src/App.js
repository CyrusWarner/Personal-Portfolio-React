import React from "react";
import Navigationbar from "./Components/Navbar/navbar";
import Title from "./Components/Title/title";
import AboutMe from "./Components/AboutMe/aboutme";
import Technologies from "./Components/Technologies/technologies";
import ContactInfo from "./Components/ContactInfo/contactInfo";
import "./Components/Title/title.css";
import Projects from "./Components/Projects/projects";
import "bootstrap/dist/css/bootstrap.min.css";
// import ParticleBackground from "./Components/ParticlesBackground/particlesBackground";
const App = () => {

  return (
    <React.Fragment>

      <Navigationbar />
      {/* <ParticleBackground />   */}
      <Title />
      <AboutMe />
      <Technologies />
      <Projects />
      <ContactInfo />
    </React.Fragment>
  );
};

export default App;
