import React from 'react';
import {  Link } from "react-router-dom";

const Nav=() => {
  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/"> About me
            </Link>
          </li>
          <li class="mx-2 contact">
            <Link to="/Contact">Contact</Link>
          </li>
          <li class="mx-2 Portfolio">
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li class="mx-2 Resume">
            <Link to="/Resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
