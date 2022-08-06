import React, { useState } from "react";

interface PokedexProps {}

const pokemonsArray: string[] = ["Pikachu", "Chamander", "Bullbasaur", "Miau"];

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<string[]>(pokemonsArray);
  const [pokemonSelected, setPokemonSelected] = useState<string | undefined>(
    undefined,
  );

  return (
    <div>
      <h1>Pokedex</h1>
      Pokemons:
      {pokemons.map((pokemon) => (
        <button onClick={() => setPokemonSelected(pokemon)}>{pokemon}</button>
      ))}
      <h2>Pokemon Selecionado:{pokemonSelected}</h2>
    </div>
  );
};
