import axios from "axios";

export interface PokemonListInterface {
  name: string;
  url: string;
}

export interface listPokemonInterface {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonListInterface[];
}

export async function listPokemon() {
  const endpoint = "https://pokeapi.co/api/v2/pokemon";
  const response = await axios.get(endpoint);
  return response;
}
