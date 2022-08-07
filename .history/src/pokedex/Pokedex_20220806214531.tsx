import { useEffect, useState } from "react";
import {
  listPokemon,
  PokemonListInterface,
} from "../pokemon/services/listPokemon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions, CardContent, Grid } from "@mui/material";
import { Container } from "@mui/system";

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
          <h1>Pokedex</h1>

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
                  style={{ backgroundColor: "gray" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {pokemon.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => setPokemonSelected(pokemon)}
                    >
                      Abrir
                    </Button>
                  </CardActions>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
