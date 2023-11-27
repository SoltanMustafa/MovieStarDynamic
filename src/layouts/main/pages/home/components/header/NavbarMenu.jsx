import React from "react";
import "./_navbarMenu.scss";

export default function NavbarMenu() {
  return (
    <>
      <ul id="menu-main-navigation" className="nav navbar-menu">
        <li className="menu-list active-li">
          <a href="">Home</a>
        </li>
        <li className="menu-list">
          <a href="">What's on</a>
        </li>
        <li className="menu-list">
          <a href="">News</a>
        </li>
        <li className="menu-list">
          <a href="">Shorcodes</a>
        </li>
        <li className="menu-list">
          <a href="">Contact us</a>
        </li>
      </ul>
    </>
  );
}
