import React from "react";
import Navbar from "./components/Navbar";
import Linkbar from "./components/Linkbar";
import Intro from "./components/Intro";
import About from "./components/About";
import ThreeD from "./components/3D";
import TwoD from "./components/2D";
import Animations from "./components/Animations";
import WorkExperience from "./components/WorkExperience";
import SideProjects from "./components/SideProjects";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/style.css";
import content from "./content.json";

// Note that the section.enable_section has to equal true in
// order for that specific component to load in the app.js

function App() {
  const { intro_screen, about_me, experience, projects, threeD, twoD, animations } = content;
  const isMobile = window.innerWidth<=500;
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className='Side'style={isMobile ? {visibility:'hidden'} : {visibility:'visible'}} >
                <Linkbar />
                <Navbar /> 
              </div>

              <div 
              style={isMobile ? { position: 'relative', width:'95%', overflowX:'hidden', fontSize:'2px'} : {padding:' 3%',right:'-30%', position: 'relative', width:'70%'}}>
                {intro_screen.section.enable_section && <Intro />}
                {about_me.section.enable_section && <About />}
                {projects.section.enable_section && <SideProjects />}
                {experience.section.enable_section && <WorkExperience />}
                {threeD.section.enable_section && <ThreeD />}
                {twoD.section.enable_section && <TwoD />}
                {animations.section.enable_section && <Animations />}
                <Footer />
              </div>
            </div>
          }
        ></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
