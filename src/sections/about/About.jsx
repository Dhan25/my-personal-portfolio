import { HiDownload } from "react-icons/hi";
import "./about.css";
import data from "./data";
import Card from "../../components/Card";
import aboutImg from "../../assets/header.jpg";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__profile">
            <img
              src={aboutImg}
              alt=""
              className="about__portrait"
              data-aos="fade-right"
              data-aos-delay="400"
            />
          </div>
        </div>
        <div className="about__right" data-aos="fade-down" data-aos-delay="600">
          <h2 className="about_me">
            About <span className="about__span">Me</span>
          </h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.key} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p className="about_info">
            Aspiring front-end developer who creates and develop web
            applications and bringing you design from the future. My expertise
            is developing websites and web applications including full frontend
            design.
          </p>
          <a id="resume_btn" target="_blank" href={resume} download="Resume" className="btn primary">
            Download Resume <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
