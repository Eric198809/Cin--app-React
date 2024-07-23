import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [favNumber, setFavNumber] = useState();
  const fav = () => {
    let moviesId = localStorage.movies
      ? localStorage.getItem("movies").split(",")
      : [];

    setFavNumber(moviesId.length);
  };

  useEffect(() => {
    fav();
  }, [favNumber]);

  return (
    <div className="header">
      <nav>
        <ul>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/coups-de-coeur">
            <li> Mes coups de coeur  <span>{favNumber}</span></li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
