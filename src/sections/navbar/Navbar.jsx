import data from "./data";
import "./navbar.css";
import {useState} from "react";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <span className="navBar__title">Dhan.dev</span>
        </a>

        <ul className={`nav__menu ${menuOpen && "open"}`} >
          {data.map((item) => (
            <li onClick={() => setMenuOpen(false)} key={item.id} className="nav__menu__items">
              <a id="nav_info" className="nav__links" href={item.link}>{item.title} </a>
            </li>
          ))}
        </ul>
            
        {/* MOBILE MENU */}
        <div className={`nav__toggle ${menuOpen && "open"}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="nav__bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
