import { useState } from "react";

const CardMovieDetail = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
      window.location.reload();
    }
  };

  return (
    <div className="cardmovie">
      <div className="image">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : "./img/poster.jpg"
          }
          alt={movie.title}
        />
      </div>
      <div className="content">
        <h1>{movie.title}</h1>
        {movie.release_date ? (
          <h5> Sortie le {dateFormater(movie.release_date)} </h5>
        ) : null}
        <h4>
          {movie.vote_average} /10 <span>⭐</span>
        </h4>

        {movie.overview ? <h3>Descriptif</h3> : ""}
        <p>{movie.overview}</p>
        {movie.genre_ids ? (
          <div className="btn" onClick={() => deleteStorage()}>
            Supprimer de la list
          </div>
        ) : (
          <div className="btn" onClick={() => addStorage()}>
            Ajouter au coup de coeur
          </div>
        )}
      </div>
    </div>
  );
};

export default CardMovieDetail;
