import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";

export async function getPokemonEv(id: number): Promise<PokemonDetail> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon-species`;
  const response = await axios.get<PokemonDetail>(endpoint);
  return response.data;
}
