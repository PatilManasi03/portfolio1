import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
      
  }, []);
  return (
    <>
      <NavBar/>
      <div className="container">
        <Home/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
