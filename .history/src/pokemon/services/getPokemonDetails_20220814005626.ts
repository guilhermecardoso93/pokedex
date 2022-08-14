import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";

export async function getPokemonDetails(
  name: string,
  id: number,
): Promise<PokemonDetail> {
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`;
  const endpointEnv = `${process.env.REACT_APP_POKEAPI}/evolution-chain/${id}`;
  const response = await axios.get<PokemonDetail>(endpoint);
  const responseEnv = await axios.get<PokemonDetail>(endpointEnv);
  return response.data;
  return responseEnv.data;
}
