import React from 'react';

import {
    Link
  } from "react-router-dom";


function Menu() {
  return (
    /*<nav>
        <ul>
            <li><a href="/">HomePAGE</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/login.html">Login</a></li>
            <li><a href="https://google.com">Google</a></li>
        </ul>
    </nav>*/

    <nav>
    <div className="menu">
        <ul>
            <li><Link to="/">HomePAGE</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
    </nav>

  );
}

export default Menu;
