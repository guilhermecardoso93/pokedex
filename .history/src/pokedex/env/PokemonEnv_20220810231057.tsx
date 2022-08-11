import { Box, Card, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AppBarMenu } from "../../components/AppBarMenu";
import { FavoriteContext } from "../../favorites/contexts/FavoriteContext";
import { getPokemonEv } from "../../pokemon/services/getPokemonEnv";
import { setTypeColor } from "../../services/getColorsBack";


import styles from "./styles.module.scss";

interface PokemonDetailsInterface {
}

interface PokemonQueryPharmsId {
  id: string;
}

export function PokemonEvoDetails() {
  const { favorites } = useContext(FavoriteContext);
  const { id } = useParams<PokemonQueryPharmsId>();
  const { data } = useQuery(
    `getPokemonEv'/${id}`,
    () => getPokemonEv(Number(id)),
  );
  const pokemonSelectedDetails = data;
  const pokeEnv = data?.evolution.map((env) => (
    env.trigger.name
  ))

  console.log(pokeEnv)

  return (
    <>
      <AppBarMenu />
      <Container maxWidth="lg">
        <Card className={styles.PokemonCard} key={pokemonSelectedDetails?.id}>
          <Box
            className={styles.PokemonImgBox}
            mt={2}
            key={pokemonSelectedDetails?.id}
          >
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
                  {Number(pokemonSelectedDetails?.height) / 10}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" gap={0.6}>
                <Typography variant="subtitle1" color="GrayText">
                  Peso:
                </Typography>
                <Typography>
                  {Number(pokemonSelectedDetails?.weight) / 10}kg
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
      </Container>
    </>
  );
}