import { createContext, useContext, useState } from "react";

// Création du contexte
const FavContext = createContext();

// Fournisseur de contexte
export const FavProvider = ({ children }) => {
  const addStorage = (movieId) => {
    // Récupération des données du localStorage
    let storedData = localStorage.getItem("movies")
      ? localStorage.getItem("movies").split(",")
      : [];

    // Ajout du nouvel ID de film s'il n'existe pas déjà
    if (!storedData.includes(movieId.toString())) {
      storedData.push(movieId);
      localStorage.setItem("movies", storedData.join(","));
      window.location.reload(); // Rafraîchit la page pour mettre à jour l'état des boutons
    }
  };

  const deleteStorage = (movieId) => {
    let storedData = localStorage.getItem("movies").split(",");
    let newData = storedData.filter((id) => id !== movieId.toString());
    localStorage.setItem("movies", newData.join(","));
    window.location.reload(); // Rafraîchit la page pour mettre à jour l'état des boutons
  };

  // Retourne le fournisseur du contexte avec les fonctions
  return (
    <FavContext.Provider value={{ addStorage, deleteStorage }}>
      {children}
    </FavContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useFavContext = () => {
  return useContext(FavContext);
};
