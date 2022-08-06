import React, { useState } from "react";

interface PokedexProps {
}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [pokemonSelected, setPokemonSelected] = useState<string | undefined>(
    "",
  );

  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Pokemon Selecionado:</h2>
    </div>
  );
};
