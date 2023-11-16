import { Fade } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import contentData from "../content.json";
import { FaGithub, FaDownload, FaFilePdf, FaArtstation } from "react-icons/fa";
import {SiSketchfab} from "react-icons/si";
import { FiExternalLink, FiFolder } from "react-icons/fi";

const iconComponents = {
  FiExternalLink: FiExternalLink,
  FiFolder: FiFolder,
  FaFilePdf: FaFilePdf,
  FaArtstation:FaArtstation,
  SiSketchfab: SiSketchfab,
};

const ThreeD = () => {
  const isSmall = window.innerWidth<=1600;

  return (
    <section id="threeD" className="threeD">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Fade triggerOnce={true}>
              <div className="title-box text-center">
                <h3 className="title-a" id="projects">
                  {contentData.threeD.section.title}
                  <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">
                  {contentData.threeD.section.description}
                </p>
              </div>
            </Fade>
          </div>
        </div>
        
      <p  style={isSmall ? { color:"#9775c2" } : { color:"#9775c2", paddingLeft:'1.8rem'}}   > ENVIRONMENT ASSETS</p>
        <div className="col-sm-12">
          <div className="row">
            {contentData.threeD.threeD_items.map((project, index) => (
              <div className="Acol-md-4" key={index}>
                <Fade
                  delay={index * 200}
                  direction="up"
                  cascade={false}
                  triggerOnce={true}
                >
                  <div className="card card-recentprojects">
                    <div className="card-body">
                      <div className="card-category-box"></div>
                        <img
                            src={project.imageURL}
                            alt=""
                            className="card-image"
                            key={index}
                        ></img>
                  
                    </div>
                    <div className="card-footer">
                      <div className="post-author">
                        <span className="author">
                          {project.name} 
                        </span>
                      </div>
                      <div className="post-date">
                        {project.links.map((link, index) => {
                          const IconComponent = iconComponents[link.icon];
                          return (
                            <a
                              key={index}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              data-tooltip={link.data_tooltip}
                            >
                              <IconComponent />{" "}
                              {/* Render the selected icon component */}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>

        <p style={isSmall ? { color:"#9775c2" } : { color:"#9775c2", paddingLeft:'1.8rem'}}  >CHARACTER & OBJECT ASSETS</p>
        <div className="col-sm-12">
          <div className="row">
            {contentData.threeD.threeD_items2.map((project, index) => (
              <div className="col-md-4" key={index}>
                <Fade
                  delay={index * 200}
                  direction="up"
                  cascade={false}
                  triggerOnce={true}
                >
                  <div className="card card-recentprojects">
                    <div className="card-body">
                      <div className="card-category-box"></div>
                        <img
                            src={project.imageURL}
                            alt=""
                            className="card-image"
                            key={index}
                        ></img>
                  
                    </div>
                    <div className="card-footer">
                      <div className="post-author">
                        <span className="author">
                          {project.name} 
                        </span>
                      </div>
                      <div className="post-date">
                        {project.links.map((link, index) => {
                          const IconComponent = iconComponents[link.icon];
                          return (
                            <a
                              key={index}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              data-tooltip={link.data_tooltip}
                            >
                              <IconComponent />{" "}
                              {/* Render the selected icon component */}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>

        <p style={isSmall ? { color:"#9775c2" } : { color:"#9775c2", paddingLeft:'1.8rem'}}  > SHADERS</p>
        <div style={isSmall ? {visibility:"visible" } : { color:"#9775c2", paddingLeft:'1.8rem'}}  >
           <p  > Coming soon...</p>
        </div>

      </div>
    </section>
  );
};

export default ThreeD;
