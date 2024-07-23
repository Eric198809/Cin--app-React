import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const LikePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let movieArray = [];
    let moviesId = localStorage.movies
      ? localStorage.getItem("movies").split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
        )
        .then((res) => movieArray.push(res.data))
        .then(() => setListData(movieArray));
    }
  }, []);
  return (
    <div className="user-list-page">
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2 style={{ marginTop: "100px" }}>Aucun coup de coeur </h2>
        )}
      </div>
    </div>
  );
};

export default LikePage;
