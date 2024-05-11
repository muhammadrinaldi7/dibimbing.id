import React from "react";
import './style.css';
import fav from "./fav.png";
import fav1 from "./fav1.png";

const scrollToSection = (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('href').slice(1);
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = ({navlink}) =>{
    return (
        <>
    <nav className="navbar">
      <div className="container">
        <div className="box-navbar">
          <div className="logo">
            <img src={fav1} alt="" />
          </div>
        <ul className="menu">
          {navlink?.map((item,index) =>(
            <li><a href={`#${item}`} key={index} onClick={scrollToSection}>{item}</a></li>
          ))}        
        </ul>
        </div>
      </div>
    </nav>
        </>
    )
}
export default Navbar;