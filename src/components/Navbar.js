import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  // var textcolor="dark";
  
  function f1()
  {
    if (text.color==="dark")
    {
      settc({color:"light",
    value:"LightMode"});
    }
    else{
      settc({
        color:"dark",
        value:"DarkMode"
      });
    }
  }
  const[text,settc]=useState({
    color:"dark",
    value:"DarkMode"
  });
  return (
    
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/vikash-kumar082003">{props.about}</a>
          </li>
        </ul>
        <div className={`form-check form-switch text-${text.color}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault " 
  onClick={()=>{props.toggleMode();
  f1();}}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text.value}</label>
</div>
      </div>
    </div>
  </nav>
  </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};
Navbar.defaultProps={
  title: 'Any Title',
  about: 'About the page'
};