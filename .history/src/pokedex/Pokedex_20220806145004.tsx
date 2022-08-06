import React, { useState } from 'react';

interface PokedexProps {
  
}

const pokemonsArray: string[] = [
  'Pikachu',
  'Chamander',
  'Bullbasaur',
  'Miau'
]

export const Pokedex: React.FC<PokedexProps> = () => {
  const [ pokemons, setPokemons] = useState<string[]>([]);
  const [ pokemonSelected, setPokemonSelected] = useState<string | undefined>('Pikachu');
  

  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Pokemon Selecionado:{pokemonSelected}</h2>
    </div>
  );
};

