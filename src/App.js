import React, {useEffect, useState} from "react";
import Navigationbar from "./Components/Navbar/navbar";
import Title from "./Components/Title/title";
import AboutMe from "./Components/AboutMe/aboutme";
import Technologies from "./Components/Technologies/technologies";
import ContactInfo from "./Components/ContactInfo/contactInfo";
import "./Components/Title/title.css";
import Projects from "./Components/Projects/projects";
import "bootstrap/dist/css/bootstrap.min.css";
//import ParticleBackground from "./Components/ParticlesBackground/particlesBackground";
const App = () => {
const [width, setWidth] = useState([window.innerWidth]);

useEffect(() => {
  const handleResize = () => {
    setWidth([window.innerWidth])
  }
  window.addEventListener("resize", handleResize)
}, [])
console.log(width)
  return (
    <React.Fragment>
      {width < 1024 &&
      <Navigationbar width={width}/>
      }
      {/* <ParticleBackground />    */}
      <Title />
      <AboutMe />
      <Technologies />
      <Projects />
      <ContactInfo />
    </React.Fragment>
  );
};

export default App;
