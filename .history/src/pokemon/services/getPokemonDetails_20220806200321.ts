import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";



export async function getPokemonDetails(name: string): Promise<PokemonDetail> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`

  const response = await axios.get<PokemonDetail>(endpoint);

  return response.data;
}
