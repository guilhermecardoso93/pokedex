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
import { PokemonDetail } from "../pokemon/types/PokemonDetails";

export const axios = require("axios");

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemon, setPokemon] = useState<PokemonDetail[]>([]);
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
            spacing={1.5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {pokemon.map((pokemon) => (
              <>
                <Grid
                  item
                  xs={6}
                  lg={2}
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
