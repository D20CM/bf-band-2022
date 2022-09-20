import React from "react";
import Navbar from "../Nav/Navbar";
import css from "./header.module.css";

function Header() {
  return (
    <div className={css.topArea}>
      <div className={css.topline}>
        <span>
          <h1 className={css.title}>
            {" "}
            {/* <img
              src="img/Band Logo small.png"
              alt="Briton Ferry Band Logo"
              class="img-fluid"
              id="BF-band-logo"
            /> */}
            Briton Ferry Silver Band
          </h1>
        </span>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
