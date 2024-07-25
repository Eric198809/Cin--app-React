import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const LikePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let movieArray = [];
      let moviesId = localStorage.movies
        ? localStorage.getItem("movies").split(",")
        : [];

      try {
        const promises = moviesId.map((id) =>
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
          )
        );
        console.log(promises);
        const results = await Promise.all(promises);
        movieArray = results.map((res) => res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des films", error);
      }

      setListData(movieArray);
    };

    fetchMovies();
  }, []);

  return (
    <div className="user-list-page">
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2 style={{ marginTop: "100px" }}>Aucun coup de coeur</h2>
        )}
      </div>
    </div>
  );
};

export default LikePage;
