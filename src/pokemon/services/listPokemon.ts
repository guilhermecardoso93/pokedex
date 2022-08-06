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

export async function listPokemon(): Promise<listPokemonInterface> {
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;

  const response = await axios.get<listPokemonInterface>(endpoint);

  return response.data;
}
