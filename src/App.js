import React from 'react';
import Navigationbar from './Components/Navbar/navbar';
import Title from './Components/Title/title';
import AboutMe from './Components/AboutMe/aboutme';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
      <React.Fragment>
        <Navigationbar />
        <Title />
        <AboutMe />
        </React.Fragment>
      )
}

export default App;
