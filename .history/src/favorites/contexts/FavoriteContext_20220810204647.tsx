import React, { useState } from "react";
import { PokemonDetail } from "../../pokemon/types/PokemonDetails";

interface FavoriteContextProps {
  favorites: PokemonDetail[];
  setFavorites: React.Dispatch<React.SetStateAction<PokemonDetail[]>>
}

const FavoriteContext = React.createContext<FavoriteContextProps>({
  favorites: [],
  setFavorites: () => console.warn(`Not ready`)
})

export const FavoriteProvider = () => {
  const [ favorites, setFavorites ] = useState<PokemonDetail[]>([]);

  return (
    <FavoriteContext.Provider value={{
      favorites,
      setFavorites
    }}>

    </FavoriteContext.Provider>
  );
};

