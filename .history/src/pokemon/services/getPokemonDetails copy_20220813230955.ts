import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";

export async function getPokemonDetails(id: number): Promise<PokemonDetail> {
  const endpoint = `${process.env.REACT_APP_POKEPIENV}/${id}`;
  const response = await axios.get<PokemonDetail>(endpoint);
  return response.data;
}
