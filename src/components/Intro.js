import React from "react";
import contentData from "../content.json";
import { FaComment } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  const aboutMe = contentData.about_me;
  const introContent = contentData.intro_screen;
  const generalContent = contentData.general;

  const introBio = introContent.intro_bio.map((paragraph) => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  return (
    <div className="container" >
      <div className="row" >
      <div className="video-container">
            <video autoPlay muted loop id="background-video">
              <source src={aboutMe.videoBG} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video autoPlay muted loop id="background-video2">
              <source src={aboutMe.videoBG2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        <div className="col-sm-12">
          <section className="intro_section">
          
            <Fade direction="down" triggerOnce={true}>
              <h1>{introContent.main_header}</h1>
              <p>
                <strong>{introContent.main_subtitle}</strong>
              </p>
            </Fade>
            <Fade triggerOnce={true}>
              <div className="introParagraph">{introBio}</div>
            </Fade>
            <Fade direction="up" triggerOnce={true}>
              <h3>
                <a href={`mailto:${generalContent.navbar_social_links.email}`}>
                  <FaComment /> {introContent.email_button}
                </a>
              </h3>
            </Fade>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Intro;
