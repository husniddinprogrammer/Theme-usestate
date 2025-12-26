import React, { Component } from 'react';
import './Navbar.css';

function Navbar({ darkTheme, setDarkTheme }) {
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
     <div className={darkTheme ? "bg-success" : "bg-dark"}>
      <div className="navbar p-2 d-flex justify-content-between">
        
        <a className="navbar-brand text-light">WhatsApp</a>

        <div className="d-flex text-light gap-3 align-items-center">
         
          <a
            style={{ cursor: "pointer" }}
            onClick={toggleTheme}
          >
            {darkTheme ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </a>

          <a><i className="fas fa-search"></i></a>
          <a><i className="fas fa-ellipsis-v"></i></a>
        </div>

      </div>
    </div>
    )
}
export default Navbar;