import React, { useEffect, useState } from 'react';
import { getPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { listPokemon, PokemonListInterface } from '../pokemon/services/listPokemon';
import { PokemonDetail } from '../pokemon/types/PokemonDetails';
export const axios = require('axios');

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
	const [ pokemon, setPokemon ] = useState<PokemonListInterface[]>([]);
	const [ pokemonSelected, setPokemonSelected ] = useState<PokemonListInterface | undefined>(undefined);
	const [ pokemonSelectedDetails, setPokemonSelectedDetails ] = useState<PokemonDetail | undefined>(undefined);

	useEffect(() => {
		listPokemon().then((response: any) => setPokemon(response.results));
	}, []);

	useEffect(
		() => {
			if (!setPokemonSelected) return;
			getPokemonDetails(setPokemonSelected.name).then((response: any) => setPokemonSelectedDetails(response.data));
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
