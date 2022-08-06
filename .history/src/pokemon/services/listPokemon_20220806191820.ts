export const axios = require("axios");

export function listPokemon() {
  const endpoint = "https://pokeapi.co/api/v2/pokemon";

  const response = axios.get(endpoint);
  return response;
}
