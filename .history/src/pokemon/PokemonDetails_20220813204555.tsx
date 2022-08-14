import { Favorite } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  Container,
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

  /* const pokemonColorBack: string[] = pokemonSelectedDetails?.types.map((
    type,
  ) => (type.type.name));*/

  return (
    <>
      <AppBarMenu />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Card
            className={styles.PokemonCard}
            key={pokemonSelectedDetails?.name}
          >
            <Box
              className={styles.PokemonImgBox}
              mt={2}
              /*style={{
              backgroundColor: setTypeColor(pokemonColorBack[0]),
            }}*/
            >
              <Box display="flex" position="relative" zIndex={"1"}>
                <CardActions>
                  <IconButton
                    aria-label="add to favorites"
                    color={isFavorite ? "error" : "warning"}
                    onClick={() => isFavorite
                      ? removePokemonFromFavorite()
                      : addPokemonToFavorite()}
                  >
                    <Favorite color={isFavorite ? "error" : "disabled"} />
                  </IconButton>
                </CardActions>
              </Box>
              <Box display="flex" justifyContent="center" gap={4}>
                <Typography className={styles.PokemonName} variant="h5">
                  {pokemonSelectedDetails?.name}
                </Typography>
                <Typography className={styles.PokemonId} variant="h6">
                  {`#${pokemonSelectedDetails?.id}`}
                </Typography>
              </Box>
              <img
                width="100%"
                height="100%"
                src={pokemonSelectedDetails?.sprites.other.home.front_default}
                className={styles.PokemonImg}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              className={styles.PokemonInfos}
            >
              <Box
                display="flex"
                flexDirection="row"
                gap={0.6}
                justifyContent="space-around"
              >
                <Box display="flex" flexDirection="row" gap={2}>
                  {pokemonSelectedDetails?.types.map((type) => (
                    <Typography
                      className={styles.PokemonType}
                      style={{ backgroundColor: setTypeColor(type.type.name) }}
                    >
                      {type.type.name}
                    </Typography>
                  ))}
                </Box>
                <Box display="flex" flexDirection="row" gap={0.6}>
                  <Typography variant="subtitle1" color="GrayText">
                    Altura:
                  </Typography>
                  <Typography>
                    {(Number(pokemonSelectedDetails?.height) / 10).toFixed(2)}
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" gap={0.6}>
                  <Typography variant="subtitle1" color="GrayText">
                    Peso:
                  </Typography>
                  <Typography>
                    {(Number(pokemonSelectedDetails?.weight) / 10).toFixed(2)}kg
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" gap={0.6}>
                <Typography variant="subtitle1" color="GrayText">
                  Abilidades:
                </Typography>
                {pokemonSelectedDetails?.abilities.map((ability) => (
                  <Typography
                    className={styles.PokemonType}
                    style={{
                      backgroundColor: setTypeColor(ability.ability.name),
                    }}
                  >
                    {ability.ability.name}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Card>
          <PokemonMoreInfos />
        </Grid>
      </Container>
    </>
  );
}
