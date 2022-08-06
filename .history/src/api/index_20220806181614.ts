export const api = require("axios").default;

api.get("https://pokeapi.co/api/v2/pokemon")
  .then((response:any) => console.log(response));
