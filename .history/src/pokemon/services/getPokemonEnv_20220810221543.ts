import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";

export async function getPokemonDetails(id: number): Promise<PokemonDetail> {
  const endpoint = `https://pokeapi.co/api/v2/evolution-chain/${id}`;
  const response = await axios.get<PokemonDetail>(endpoint);
  return response.data;
}
