import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";
import { getPokemonDetails } from "./getPokemonDetails";

export interface PokemonListInterface {
  name: string;
  url: string;
}

export interface listPokemonInterface {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonDetail[];
}

export async function listPokemon(): Promise<listPokemonInterface> {
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon?limit=204`;

  const response = await axios.get<listPokemonInterface>(endpoint);

  const promiseAr = response.data.results.map(({ name }) =>
    getPokemonDetails(name)
  );
  const resultsPromise = await Promise.all(promiseAr);

  return { ...response.data, results: resultsPromise };
}

