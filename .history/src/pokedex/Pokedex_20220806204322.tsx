import { useEffect, useState } from "react";
import { getPokemonDetails } from "../pokemon/services/getPokemonDetails";
import {
  listPokemon,
  PokemonListInterface,
} from "../pokemon/services/listPokemon";
import { PokemonDetail } from "../pokemon/types/PokemonDetails";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "@mui/material";
import { Container } from "@mui/system";

export const axios = require("axios");

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemon, setPokemon] = useState<PokemonListInterface[]>([]);
  const [pokemonSelected, setPokemonSelected] = useState<
    PokemonListInterface | undefined
  >(undefined);
  const [pokemonSelectedDetails, setPokemonSelectedDetails] = useState<
    PokemonDetail | undefined
  >(undefined);

  useEffect(() => {
    listPokemon().then((response: any) => setPokemon(response.results));
  }, []);

  useEffect(
    () => {
      if (!setPokemonSelected) return;
      getPokemonDetails(setPokemonSelected.name).then((response: any) =>
        setPokemonSelectedDetails(response.data)
      );
    },
    [setPokemonSelected],
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md'>
          <h1>Pokedex</h1>
          Pokemons:
          {pokemon.map((pokemon) => (
            <button onClick={() => setPokemonSelected(pokemon)}>
              {pokemon.name}
            </button>
          ))}
          <h2>
            Pokemon Selecionado:{pokemonSelected?.name ||
              "Nenhum Pokemon Selecionado"}
          </h2>
      </Container>
    </>
  );
};
