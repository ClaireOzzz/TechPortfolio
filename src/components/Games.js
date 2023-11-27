import { Fade } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import contentData from "../content.json";
import { FaGithub, FaDownload, FaFilePdf } from "react-icons/fa";
import { FiExternalLink, FiFolder } from "react-icons/fi";

const iconComponents = {
  FaGithub: FaGithub,
  FaDownload: FaDownload,
  FiExternalLink: FiExternalLink,
  FiFolder: FiFolder,
  FaFilePdf: FaFilePdf,
};

const Games = () => {

  return (
    <section id="games" 
    className="games"
    // className="recentprojects-mf sect-pt4 route"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Fade triggerOnce={true}>
              <div className="title-box text-center">
                <h3 className="title-a" id="projects">
                  {contentData.games.section.title}
                  <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">
                  {contentData.games.section.description}
                </p>
              </div>
            </Fade>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="row">
            {contentData.games.games_items.map((project, index) => (
              <div className="Acol-md-4" key={index}>
                <Fade
                  delay={index * 200}
                  direction="up"
                  cascade={false}
                  triggerOnce={true}
                >
                  <div className="card card-recentprojects" >
                    <div className="card-body">
                      <div className="card-category-box"></div>
                      <a
                      href={project.imageURL}
                      target="_blank"
                      rel="noreferrer"
                      className="col-6-img-a"
                    >
                        
                        <video autoPlay muted loop  className="card-video"  key={index}>
                          <source src={project.imageURL} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                    </a>
                        
                    </div>
                    <div className="card-footer">
                      <div className="post-author">
                        <span className="author">
                          {project.name} 
                        </span>
                      </div>
                      <div className="post-date">
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
