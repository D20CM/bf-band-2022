import React from "react";
import css from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={css.navbar}>
      <ul>
        <li>
          <a href="#band-history">About the band</a>
        </li>
        <li>
          <a href="performances.html">Performances</a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <a href="players.html">Meet the band</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
