import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Form = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("retour vers le ");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR"`
      )
      .then((res) => setMovies(res.data.results));
  }, [search]);

  const searchMovie = (e) => {
    setSearch(e.target.value);
  };

  

  return (
    <>
      <div className="form-component">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Rechercher un film"
              id="search-input"
              onChange={searchMovie}
            />
            <input type="submit" value="Annuler la recherche" onClick={()=> setSearch("retour vers le")} />
          </form>
          <div className="btn-sort-container">
            <div className="btn-sort" id="goodToBad" onClick={()=> setSortGoodBad("goodToBad")}>
              Top <span> - </span>
            </div>
            <div className="btn-sort" id="badToGood" onClick={()=> setSortGoodBad("badToGood")}>
              Flop <span> </span>
            </div>
          </div>
        </div>
        <div className="result">
          {movies
            .slice(0, 12)
            .sort((a, b) => {
              if (sortGoodBad === "goodToBad") {
                return b.vote_average - a.vote_average;
              } else if (sortGoodBad === "badToGood")
                return a.vote_average - b.vote_average;
            })
            .map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Form;
