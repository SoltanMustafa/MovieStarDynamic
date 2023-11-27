import React, { useEffect, useState } from "react";
import "./_SecondSection.scss";
import MovieSlide from "./MovieSlide";

export default function SecondSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function getMovies() {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=b37b47bc20084742d186b1d166dd12b1"
      )
        .then((res) => res.json())
        .then((responseData) => setData(responseData.results))
        .catch((error) => console.error("Error fetching data:", error));
    }

    getMovies();
  }, []);

  return (
    <>
      <section className="fw-main-row">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <header>
                <h2 className="left">New in</h2>
              </header>
              <div className="slick-carousel">
                <div className="slick-list">
                  <div className="slick-track">
                    {data.slice(0, 3).map((product) => {
                      return <MovieSlide key={product.id} product={product} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
