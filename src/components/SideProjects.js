import React, { useState, useEffect } from "react";
import contentData from "../content.json";
import { FaGithub, FaDownload, FaFilePdf } from "react-icons/fa";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";

const iconComponents = {
  FaGithub: FaGithub,
  FaDownload: FaDownload,
  FiExternalLink: FiExternalLink,
  FiFolder: FiFolder,
  FaFilePdf: FaFilePdf,
};

const SideProjects = () => {
  const [projectData, setProjectData] = useState({});
  const [projectLanguages, setProjectLanguages] = useState({});

  useEffect(() => {
    contentData.projects.project_items.forEach((project, index) => {
      if (project.use_git_api) {
        const apiUrl = project.api_github_repo_link;

        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setProjectData((prevData) => ({
              ...prevData,
              [index]: data, // Store the data with an index as the key
            }));

            // Fetch languages data
            const languagesUrl = data.languages_url;
            fetch(languagesUrl)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((languagesData) => {
                setProjectLanguages((prevLanguages) => ({
                  ...prevLanguages,
                  [index]: Object.keys(languagesData), // Store language names as an array
                }));
              })
              .catch((error) => {
                console.error("Error fetching languages data:", error);
              });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    });
  }, []);

  return (
    <section id="recentprojects" className="recentprojects-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Fade triggerOnce={true}>
              <div className="title-box text-center">
                <h3 className="title-a" id="projects">
                  {contentData.projects.section.title}
                  <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">
                  {contentData.projects.section.description}
                </p>
              </div>
            </Fade>
          </div>
        </div>
        

        <div className="col-sm-12">
          <div className="row">
            {contentData.projects.project_items.map((project, index) => (
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
                      <div>
                        <h1 className="folder-icon">
                          <FiFolder />
                        </h1>
                      </div>
                      <h3 className="card-title">
                        {project.use_git_api
                          ? projectData[index]?.name || project.project_name
                          : project.project_name}
                      </h3>
                      <p className="card-description">
                        {project.use_git_api
                          ? projectData[index]?.description ||
                            project.description
                          : project.description}
                      </p>
                      <br />
                      <p className="resources-used">
                        {project.use_git_api
                          ? [
                              ...(projectLanguages[index] || []),
                              ...project.resources_used,
                            ]
                              .filter(
                                (item) =>
                                  !(
                                    projectLanguages[index]?.includes(item) &&
                                    project.resources_used.includes(item)
                                  )
                              )
                              .join(", ")
                          : project.resources_used.join(", ")}
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="post-author">
                        <span className="author">
                          {project.start_date} - {project.end_date}
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
      </div>
    </section>
  );
};

export default SideProjects;
