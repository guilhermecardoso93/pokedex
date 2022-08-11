import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";

export async function getPokemonEv(id: number): Promise<PokemonDetail> {
  const endpoint = `https://pokeapi.co/api/v2/evolution-chain`;
  const response = await axios.get<PokemonDetail>(endpoint);
  return response.data;
  console.log(response.data)
}
