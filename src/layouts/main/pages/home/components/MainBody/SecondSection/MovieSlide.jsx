import "./_MovieSlide.scss";

export default function MovieSlide({ product }) {
  return (
    <>
      <div className="movie-slide">
        <div className="movie-poster">
          <aside>
            <div>
              <a href="" className="vbox-item">
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
            <a href="" className="read-more">
              Read more
            </a>
            <span className="date">Released: {product.release_date}</span>
          </aside>
          <a href="">
            <img
              src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
              alt={product.title}
            />
          </a>
        </div>
        <h4 className="no-underline">{product.title}</h4>
        <div className="star-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    </>
  );
}
