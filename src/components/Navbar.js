import React from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";

/*
 * This section checks if the section_enabled is true or false
 * and if true then the item inside the navbar is
 */

const Navbar = () => {
  const sections = [
    {
      id: "skills",
      text: contentData.about_me.section.navbar_name,
      enable: contentData.about_me.section.enable_section,
    },
    {
      id: "projects",
      text: contentData.projects.section.navbar_name,
      enable: contentData.projects.section.enable_section,
    },
    {
      id: "experience",
      text: contentData.experience.section.navbar_name,
      enable: contentData.experience.section.enable_section,
    },
    {
      id: "threeD",
      text: contentData.threeD.section.navbar_name,
      enable: contentData.threeD.section.enable_section,
    },
    {
      id: "twoD",
      text: contentData.twoD.section.navbar_name,
      enable: contentData.twoD.section.enable_section,
    },
    {
      id: "animations",
      text: contentData.animations.section.navbar_name,
      enable: contentData.animations.section.enable_section,
    }
  ];

  return (
    <div className="navlist">
      <Fade cascade damping={0.2} triggerOnce={true}>
        <ul>
          <li>
            <a href="https://ClaireOudea.netlify.app/">/Home</a>
          </li>
          {sections.map((section) => {
            return (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.text}</a>
              </li>
            ) 
          })}
          <li style={{color:"#9775c2", paddingTop:'10%'}}>
          <a  style={{color:"#9775c2"}} href='https://clairesartsyportfolio.netlify.app/' target="_blank" rel="noreferrer" >My more 'Artsy' R3F Portfolio</a>
          </li>
          <li style={{paddingTop:'1%'}}>
            <a style={{color:"#9775c2"}}  href='/CV(NOV).pdf' target="_blank" rel="noreferrer" >My CV</a>
          </li>
        </ul>
      </Fade>
    </div>
  );
};

export default Navbar;
