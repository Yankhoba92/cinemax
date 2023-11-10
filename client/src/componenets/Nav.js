import React from "react";
import cinemaxLogo from "../assets/cinemax-lg.png";
import { Link } from "react-router-dom";

// Cec composant représenete la barre de recherche
const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={cinemaxLogo} alt="" width="150" />
        </Link>
        <ul className="nav">
          <li class="nav-item">
            <Link to="/">Recherche</Link>
          </li>
          <li class="nav-item">
            <Link to="/favorites">Mes favoris</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
