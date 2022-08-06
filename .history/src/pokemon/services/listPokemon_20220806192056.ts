import axios from 'axios'

export async function listPokemon() {
  const endpoint = "https://pokeapi.co/api/v2/pokemon";
  const response = await axios.get(endpoint);
  return response;
}
