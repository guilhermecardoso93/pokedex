import axios from "axios";

interface PokemonList {
  name: string;
  url: string;
}

interface listPokemonInterface {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonList[];
}

export async function listPokemon() {
  const endpoint = "https://pokeapi.co/api/v2/pokemon";
  const response = await axios.get(endpoint);
  return response;
}
