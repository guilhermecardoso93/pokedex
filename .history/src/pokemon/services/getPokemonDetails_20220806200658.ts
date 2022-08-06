import axios from "axios";
import { PokemonDetail } from "../types/PokemonDetails";



export async function getPokemonDetails(name: string): Promise<PokemonDetail> {
  const endpoint = `${process.env.REACT_APP_API_URL}/${name}`

  const response = await axios.get<PokemonDetail>(endpoint);

  return response.data;
}
