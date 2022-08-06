import React, { useEffect, useState } from 'react';
export const axios = require('axios');

interface PokedexProps {}

interface PokemonList {
	name: string;
	url: string;
}

/*
async function getPokemonDetails(pokemon: PokemonList){
  await
}*/

export const Pokedex: React.FC<PokedexProps> = () => {
	const [ pokemon, setPokemon ] = useState<PokemonList[]>([]);
	const [ pokemonSelected, setPokemonSelected ] = useState<PokemonList | undefined>(undefined);
	const [ pokemonSelectedDetails, setPokemonSelectedDetails ] = useState<any | undefined>(undefined);

	useEffect(() => {
		axios.get('https://pokeapi.co/api/v2/pokemon').then((response: any) => setPokemon(response.data.results));
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
