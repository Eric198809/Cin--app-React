import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <ul>
          <Link to="/"><li>Accueil</li></Link>
          <Link to="/coups-de-coeur"><li>Coups de coeur</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;