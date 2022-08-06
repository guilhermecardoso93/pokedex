import React, { useEffect, useState } from 'react';
import { listPokemon, PokemonListInterface } from '../pokemon/services/listPokemon';
export const axios = require('axios');

interface PokedexProps {}


/*
async function getPokemonDetails(pokemon: PokemonList){
  await
}*/

export const Pokedex: React.FC<PokedexProps> = () => {
	const [ pokemon, setPokemon ] = useState<PokemonListInterface[]>([]);
	const [ pokemonSelected, setPokemonSelected ] = useState<PokemonListInterface | undefined>(undefined);
	const [ pokemonSelectedDetails, setPokemonSelectedDetails ] = useState<any | undefined>(undefined);

	useEffect(() => {
		listPokemon().then((response: any) => setPokemon(response.data.results));
	}, []);

	useEffect(
		() => {
			if (!setPokemonSelected) return;
			axios
				.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected?.name}`)
				.then((response: any) => setPokemonSelectedDetails(response.data));
		},
		[ setPokemonSelected ]
	);

	return (
		<div>
			<h1>Pokedex</h1>
			Pokemons:
			{pokemon.map((pokemon) => <button onClick={() => setPokemonSelected(pokemon)}>{pokemon.name}</button>)}
			<h2>Pokemon Selecionado:{pokemonSelected ? setPokemonSelected : 'Nenhum Pokemon Selecionado'}</h2>
		</div>
	);
};
