import React from "react";
import "./_ItemButtons.scss";

export default function ItemButtons() {
  return (
    <>
      <div className="buttons">
        <span className="certificate">PG</span>
        <a href="" className="venobox">
          <i className="fa-solid fa-play"></i>
          <span>Play Trailer</span>
        </a>
      </div>
    </>
  );
}
