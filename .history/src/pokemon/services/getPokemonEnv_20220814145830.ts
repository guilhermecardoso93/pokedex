import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";

export async function getPokemonEnvDetails(id: number): Promise<PokemonDetail> {
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon-species/${id}`;
  const response = await axios.get<PokemonDetail>(endpoint);
  return response.data;
}

