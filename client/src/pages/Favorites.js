import React from "react";
import { useEffect, useState } from "react";

const Favorites = ({}) => {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);

  const API = "http://www.omdbapi.com/?apikey=78620d47";
  useEffect(() => {
    fetch("http://localhost:5001/api/favorites")
      .then((response) => response.json())
      .then((data) => setFavorites(data.favorites)); // On ajoute les favoris à la constante favorites
  }, []);
  favorites.forEach((item) => {
    fetch(API + "&i="+ item.movie)
    .then(res => res.json())
    .then(data => console.log(data))
  });
  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {/* {console.log(favorites)} */}
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.movie}</li>
        ))}
      </ul>
    </>
  );
};

export default Favorites;
