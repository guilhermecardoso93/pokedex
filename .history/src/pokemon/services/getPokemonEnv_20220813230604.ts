import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";

export async function getPokemonEv(id: number): Promise<PokemonDetail> {
  const endpoint = `https://pokeapi.co/api/v2/evolution-chain/4}/`;
  const response = await axios.get<PokemonDetail>(endpoint);
  console.log(response.data)
  return response.data;
}
