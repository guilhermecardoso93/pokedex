import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions, CardContent, Grid } from "@mui/material";
import { Container } from "@mui/system";

import { AppBarMenu } from "../components/AppBarMenu";
import {
  listPokemon,
  PokemonListInterface,
} from "../pokemon/services/listPokemon";
import { PokedexCard } from "./components/PokedexCard";

export const axios = require("axios");

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemon, setPokemon] = useState<PokemonListInterface[]>([]);
  const [pokemonSelected, setPokemonSelected] = useState<
    PokemonListInterface | undefined
  >(undefined);

  useEffect(() => {
    listPokemon().then((response: any) => setPokemon(response.results));
  }, []);

  return (
    <>
      <AppBarMenu />
      <Container maxWidth="lg">
        <Box mt={2}>
          <Grid
            container
            spacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {pokemon.map((pokemon) => (
              <>
                <Grid
                  item
                  xs={6}
                  lg={3}
                  md={3}
                >
                  <PokedexCard pokemon={pokemon} />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
