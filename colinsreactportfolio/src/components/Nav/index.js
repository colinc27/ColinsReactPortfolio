import React from 'react';
import { Link } from "react-router-dom";

const Nav=() => {
  return (
    <header className="flex-row d-flex justify-content-center px-1 bg-dark">
      <nav>
      <h2>Colin Christoph's Portfolio Website</h2>
        <ul className="flex-row d-flex justify-content-between nav my-2">
          <li className="mx-1 px-1 bg-info">
            <Link to="/"> About me
            </Link>
          </li>
          <li class="mx-1 px-1 Contact bg-info">
            <Link to="/Contact">Contact</Link>
          </li>
          <li class="mx-1 px-1 Portfolio bg-info">
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li class="mx-1 px-1 Resume bg-info">
            <Link to="/Resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
