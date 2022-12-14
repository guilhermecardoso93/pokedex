import Box from "@mui/material/Box";
import { CircularProgress, Grid } from "@mui/material";
import { Container } from "@mui/system";

import { AppBarMenu } from "../components/AppBarMenu";
import { listPokemon } from "../pokemon/services/listPokemon";
import { PokedexCard } from "./components/PokedexCard";
import { useQuery } from "react-query";

export const axios = require("axios");

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const { data, isLoading } = useQuery(`pokemon`, listPokemon);

  return (
    <>
      <AppBarMenu />
      <Container maxWidth="lg">
        {!isLoading
          ? (
            <Box mt={2}>
              <Grid
                container
                spacing={1.5}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {data?.results.map((pokemon) => (
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
          )
          : (
            <div>
              <CircularProgress />
            </div>
          )}
      </Container>
    </>
  );
};
