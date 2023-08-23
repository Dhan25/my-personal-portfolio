import HeaderImg from "../../assets/header.jpg";
import {FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import {BiLogoJavascript, BiLogoTailwindCss} from "react-icons/bi";
import {BsGit} from "react-icons/bs" ;

import "./header.css";

const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img
            src={HeaderImg}
            alt="Header Portrait"
            className="header__portrait" data-aos='fade-down' data-aos-delay='400'
          />
        </div>
        <h3 data-aos='fade-down' data-aos-delay='500'>Antony Dhan Orejas</h3>
        <p data-aos='fade-down' data-aos-delay='600'>
          <span className="about__desc">An Aspiring Front-End Developer</span>{" "}
          passionate about creating interactive applications and experiences on
          the web.
        </p>
        <div className="header__cta" data-aos='fade-up' data-aos-delay='700'> 
            <h6>Tech Stacks</h6>
            <h6>|</h6>
          {/* HTML */}
          <span className="html__logo"><FaHtml5/></span>

          {/* CSS */}
          <span className="css__logo"><FaCss3Alt/></span>

          {/* JAVASCRIPT */}
          <span className="js__logo"><BiLogoJavascript/></span>

          {/* TAILWIND CSS */}
          <span className="tailwind__logo"><BiLogoTailwindCss/></span>

          {/* REACT */}
          <span className="react__logo"><FaReact/></span>

          {/* GIT */}
          <span className="git__logo"><BsGit/></span>
        </div>
      </div>
    </section>
  );
};

export default Header;
