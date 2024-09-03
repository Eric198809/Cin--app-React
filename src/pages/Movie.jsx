import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CardMovieDetail from "./components/CardMovieDetail";


const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
      )
      .then((res) => setMovie(res.data));
  }, []);

  return (
    <>
      <CardMovieDetail movie={movie} />
    </>
  );
};

export default Movie;
