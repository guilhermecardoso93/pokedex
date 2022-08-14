import { Favorite } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AppBarMenu } from "../components/AppBarMenu";
import { FavoriteContext } from "../favorites/contexts/FavoriteContext";
import { setTypeColor } from "../services/getColorsBack";
import { setTypeColorText } from "../services/getColorsText";
import { PokemonMoreInfos } from "./PokemonMoreInfos";
import { getPokemonDetails } from "./services/getPokemonDetails";

import styles from "./styles.module.scss";
import { PokemonDetail, Type } from "./types/PokemonDetails";

interface PokemonDetailsInterface {
}

interface PokemonQueryPharms {
  name: string;
}

export function PokemonDetails() {
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const { name } = useParams<PokemonQueryPharms>();
  const { data } = useQuery(
    `getPokemonDetails-${name}`,
    () => getPokemonDetails(name),
  );
  const pokemonSelectedDetails = data;

  const addPokemonToFavorite = () => {
    if (!pokemonSelectedDetails) return;
    setFavorites([...favorites, pokemonSelectedDetails]);
  };

  const removePokemonFromFavorite = () => {
    if (!pokemonSelectedDetails) return;
    setFavorites(
      favorites.filter((pokefave) =>
        pokefave.name !== pokemonSelectedDetails.name
      ),
    );
  };

  const isFavorite = favorites.some((pokefave) =>
    pokefave.name === pokemonSelectedDetails?.name
  );

  const pokemonColor: any =
    pokemonSelectedDetails?.types.map((type) => (type.type.name))[0];
  console.log(pokemonColor);

  return (
    <>
      <AppBarMenu />
      <Container className={styles.Container}>
        <Grid
          container
          spacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        >
          <Card
            className={styles.PokemonCard}
            key={pokemonSelectedDetails?.name}
          >
            <Box
              className={styles.PokemonImgBox}
              style={{
                backgroundColor: setTypeColor(pokemonColor),
                color: setTypeColorText(pokemonColor),
              }}
            >
              <Box>
                <Box
                  display="flex"
                  position="relative"
                  zIndex={"1"}
                  justifyContent="space-between"
                >
                  <CardActions>
                    <IconButton
                      aria-label="add to favorites"
                      color={isFavorite ? "error" : "warning"}
                      onClick={() =>
                        isFavorite
                          ? removePokemonFromFavorite()
                          : addPokemonToFavorite()}
                    >
                      <Favorite color={isFavorite ? "error" : "disabled"} />
                    </IconButton>
                  </CardActions>

                  <Typography className={styles.PokemonName} variant="h4">
                    {pokemonSelectedDetails?.name}
                  </Typography>
                  <Typography className={styles.PokemonId} variant="h5">
                    {`#${pokemonSelectedDetails?.id}`}
                  </Typography>
                </Box>
              </Box>
              <img
                width="100%"
                height="100%"
                src={pokemonSelectedDetails?.sprites.other.home.front_default}
                className={styles.PokemonImg}
              />
            </Box>
          </Card>
          <PokemonMoreInfos />
        </Grid>
      </Container>
    </>
  );
}
