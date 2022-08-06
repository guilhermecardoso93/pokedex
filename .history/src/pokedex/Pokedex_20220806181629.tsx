import React, { useEffect, useState } from 'react';
import { api } from '../api';

interface PokedexProps {}

const pokemonArray: string[] = [ 'Pikachu', 'Chamander', 'Bullbasaur', 'Miau' ];

export const Pokedex: React.FC<PokedexProps> = () => {
	const [ pokemon, setPokemon ] = useState<string[]>(pokemonArray);
	const [ pokemonSelected, setPokemonSelected ] = useState<string | undefined>(undefined);

  useEffect(() => {
    api
  }, []);

  useEffect(() => {
    if(!setPokemonSelected)
    return                                                                
    alert('oi')
  }, [setPokemonSelected]);

	return (
		<div>
			<h1>Pokedex</h1>
			Pokemons:
			{pokemon.map((pokemon) => <button onClick={() => setPokemonSelected(pokemon)}>{pokemon}</button>)}
			<h2>Pokemon Selecionado:{pokemonSelected ? setPokemonSelected : 'Nenhum Pokemon Selecionado'}</h2>
		</div>
	);
};
