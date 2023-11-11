import React from "react";
import contentData from "../content.json";
import { FaGithub, FaLinkedin, FaArtstation } from "react-icons/fa";
import {SiSketchfab} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import aboutMeJson from "../content.json";


const Linkbar = () => {
  const isSmallscreen = window.innerWidthwidth<=1600;
  const aboutMe = aboutMeJson.about_me;
  const general = contentData.general;

  const socialLinks = [
    {
      icon: MdEmail,
      href: 'mailto:oudeaclaire@gmail.com',
      target: "_blank",
      rel: "noreferrer",
    },
    {
      icon: SiSketchfab,
      href: general.navbar_social_links.handshake,
      target: "_blank",
      rel: "noreferrer",
    },
    {
      icon: FaLinkedin,
      href: general.navbar_social_links.linkedin,
      target: "_blank",
      rel: "noreferrer",
    },
    {
      icon: FaGithub,
      href: general.navbar_social_links.github,
      target: "_blank",
      rel: "noreferrer",
    },
  ];

  return (
    <div className="linkbar">
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}  style={isSmallscreen ? { width: '100px', height: '55px' } : null}>
            <Fade delay={index * 200} triggerOnce={true}>
              <a
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="social-icon"
                style={{top:'25px'}}
              >
                <link.icon size={35}/>
              </a>
            </Fade>
          </li>
        ))}

         <Fade  triggerOnce={true}>
         <img
            src={aboutMe.headShotUrl}
            alt=""
            className="myportrait"
        ></img>
        </Fade>
         
      </ul>
    </div>
  );
};

export default Linkbar;
