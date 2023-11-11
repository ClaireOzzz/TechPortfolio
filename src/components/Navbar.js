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
            <a href="https://claireoudea.netlify.app/">/Home</a>
          </li>
          {sections.map((section) => {
            return (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.text}</a>
              </li>
            ) 
          })}
          <li style={{paddingTop:'10%'}}>
          <a href='https://clairesartsyportfolio.netlify.app/' target="_blank" rel="noreferrer" >A more Artsy R3F Portfolio</a>
          </li>
          <li style={{paddingTop:'1%'}}>
            <a href='/cv.pdf' target="_blank" rel="noreferrer" >My CV</a>
          </li>
        </ul>
      </Fade>
    </div>
  );
};

export default Navbar;
