import React, { useEffect, useState } from "react";
import "./_ThirdSection.scss";
import TabLists from "./TabLists";
import MovieTabs from "./MovieTabs";

export default function ThirdSection() {
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
      <section className="third-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="fw-tabs">
                <TabLists />
                <div className="tabs-panel">
                  {data.slice(0, 3).map((product) => {
                    return <MovieTabs key={product.id} product={product} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
