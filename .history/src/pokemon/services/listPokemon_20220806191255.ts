export const axios = require("axios");

export function listPokemon() {
  return axios.get("https://pokeapi.co/api/v2/pokemon");
}
