import React from "react";
import { useEffect, useState } from "react";

const Favorites = ({}) => {
  const [favorites, setFavorites] = useState([]);

  const apiJson = "http://localhost:5001/api/favorites";
  useEffect(() => {
    fetch(apiJson)
      .then((response) => response.json())
      .then((data) => setFavorites(data.favorites)); // On ajoute les favoris à la constante favorites
  });

  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.movie}</li>
        ))
        }
      </ul>
    </>
  );
};

export default Favorites;
