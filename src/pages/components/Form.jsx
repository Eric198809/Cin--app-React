import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";


const Form = () => {
const [movies, setMovies]= useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"`).then
      ((res) => setMovies(res.data.results));
  }, [])
  return (
    <>
      <div className="form-component">
        <div className="form-container">
          <form>
            <input type="text" placeholder="Rechercher un film" id="search-input" />
            <input type="submit" value="Rechercher" />
          </form>
          <div className="btn-sort-container">
            <div className="btn-sort" id="goodToBad">
              Top <span> - </span>
            </div>
            <div className="btn-sort" id="badToGood">
              Flop <span> - </span>
            </div>
          </div>
        </div>
        <div className="result">
          {movies.slice(0,12).map((movie)=> (
           <Card movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Form;