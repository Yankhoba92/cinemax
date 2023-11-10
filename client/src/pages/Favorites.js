import React from "react";
import { useEffect, useState } from "react";
import Movies from "../componenets/Movies";

const Favorites = ({}) => {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);

  const API = "http://www.omdbapi.com/?apikey=78620d47";

  const fetchFavorites = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/favorites");
      const data = await response.json();
      if (data.favorites) {
        setFavorites(data.favorites);
      }
    } catch (error) {
      console.log(
        "Une erreur est survenue lors de la récupération des favoris :" + error
      );
    }
  };

  const fetchMovies = async () => {
    const moviesArray = [];
    try {
      for (const item of favorites) {
        const response = await fetch(API + "&i=" + item.movie);
        const data = await response.json();
        moviesArray.push({
          imdbID: data.imdbID,
          Title: data.Title,
          Poster: data.Poster,
        });
      }
      if (moviesArray.length > 0) {
        // Vérifie que le ableau n'est pas vide
        setMovies(moviesArray);
      }
    } catch (error) {
      console.log(
        "Une erreur est survenue lors de la récupération des films :" + error
      );
    }
  };
  useEffect(() => {
    fetchFavorites();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [favorites]);
  return (
    <>
      <h1>Favorites</h1>
      <div>
        <Movies movies={movies} />
      </div>
    </>
  );
};

export default Favorites;
