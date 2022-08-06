import React, { useEffect, useState } from 'react';
import { api } from '../api';

interface PokedexProps {}

interface PokemonList {
  name: string,
  url: string
}

const axios = require('axios');

export const Pokedex: React.FC<PokedexProps> = () => {
	const [ pokemon, setPokemon ] = useState<PokemonList[]>([]);
	const [ pokemonSelected, setPokemonSelected ] = useState<PokemonList | undefined>(undefined);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response:any) => setPokemon(response.data.results))
  }, []);

  useEffect(() => {
    if(!setPokemonSelected)
    return                                                                
  }, [setPokemonSelected]);

	return (
		<div>
			<h1>Pokedex</h1>
			Pokemons:
			{pokemon.map((pokemon) => <button onClick={() => setPokemonSelected(pokemon)}>{pokemon.name}</button>)}
			<h2>Pokemon Selecionado:{pokemonSelected ? setPokemonSelected : 'Nenhum Pokemon Selecionado'}</h2>
		</div>
	);
};
