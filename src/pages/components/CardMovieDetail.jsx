import { useFavContext } from "../../Context/fav";

const CardMovieDetail = ({ movie }) => {

  const {addStorage, deleteStorage} = useFavContext();
 
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };


  let searchFav = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
      const isFavorite = movie && movie.id && searchFav.includes(movie.id.toString());



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
          <h5>Sortie le {dateFormater(movie.release_date)}</h5>
        ) : null}
        <h4>
          {movie.vote_average} /10 <span>⭐</span>
        </h4>

        {movie.overview ? <h3>Descriptif</h3> : ""}
        <p>{movie.overview}</p>

        {isFavorite ? (
          <div className="btn" onClick={() => deleteStorage(movie.id)}>
            Supprimer de la liste
          </div>
        ) : (
          <div className="btn" onClick={() => addStorage(movie.id)}>
            Ajouter au coup de cœur
          </div>
        )}
      </div>
    </div>
  );
};

export default CardMovieDetail;