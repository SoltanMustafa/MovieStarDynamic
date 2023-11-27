import React from "react";
import "./_MovieTabs.scss";

export default function MovieTabs({ product }) {
  return (
    <>
      <div className="row movie-tabs">
        <div className="col-md-2 col-sm-3 image-holder">
          <a href="" className="movie-image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
              alt={product.title}
            />
          </a>
        </div>
        <div className="col-md-10 col-sm-9">
          <span className="title">Thriller, Horror</span>
          <header>
            <h3 className="no-underline">{product.title}</h3>
          </header>
          <p className="movie-description">{product.overview}</p>
          <p className="arrow-button-holder">
            <a href="" className="arrow-button">
              Fully synopsis
              <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
              </svg>
            </a>
          </p>
          <div className="row">
            <div className="col-md-8 col-sm-9">
              <hr className="space-10" />
              <div className="view-times">
                <i className="fa-regular fa-clock"></i>
                Viewving times
              </div>
              <ul className="show-times">
                <li className="time-wrap">
                  <span className="time">11:00 am</span>
                  <span className="time">12:45 pm</span>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-3 running-time">
              <hr className="space-10" />
              110 mins
              <span className="certificate">18</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
