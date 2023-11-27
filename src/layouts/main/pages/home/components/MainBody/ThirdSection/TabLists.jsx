import React from "react";
import "./_TabLists.scss";

export default function TabLists() {
  return (
    <>
      <ul className="tablist">
        <li className="days-of-weak li-selected">
          <a href="" className="tabs-anchor">
            Today
          </a>
        </li>
        <li className="days-of-weak">
          <a href="" className="tabs-anchor">
            tue
          </a>
        </li>
        <li className="days-of-weak">
          <a href="" className="tabs-anchor">
            Wed
          </a>
        </li>
        <li className="days-of-weak">
          <a href="" className="tabs-anchor">
            Thu
          </a>
        </li>
        <li className="days-of-weak">
          <a href="" className="tabs-anchor">
            Fri
          </a>
        </li>
        <li className="days-of-weak">
          <a href="" className="tabs-anchor">
            Sat
          </a>
        </li>
        <li className="days-of-weak">
          <a href="" className="tabs-anchor">
            Sun
          </a>
        </li>
        <li className="date">
          <span>Mon, 27 November</span>
        </li>
      </ul>
    </>
  );
}
