import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Reading List
      </a>

      <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-dark text-white">Search Books</button></a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-light">Saved Books</button></a>
                    </li>
                </ul>
            </div>
            
    </nav>
  );
}

export default Nav;
