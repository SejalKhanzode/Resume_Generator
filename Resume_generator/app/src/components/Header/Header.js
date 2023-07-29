import React from "react";
import resume from "../../assets/resume.png";
import hat from "../../assets/hat.png";
import search from "../../assets/search.png";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className='left'>
        <p className='heading'>
        Create Your Perfect <span>Resume</span> effortlessly.
        </p>
        <p className='heading'>
        Try it <span>for Free...</span>
        </p>
      </div>
      <div className='right'>
      <img src={resume} alt="Resume" className="user-image"/>
        <img src={hat} alt="hat" className="icons icon-hat" />
        {/* <img src={search} alt="search" className="icons icon-search"/> */}
      </div>
    </div>
  );
}

export default Header;
