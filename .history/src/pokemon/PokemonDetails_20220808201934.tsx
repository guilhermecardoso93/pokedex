import { Box, Card, Container, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AppBarMenu } from "../components/AppBarMenu";
import { PokemonTypeColors } from "../global.styles";
import { getPokemonDetails } from "./services/getPokemonDetails";

import styles from "./styles.module.scss";
import { Type } from "./types/PokemonDetails";

interface PokemonDetailsInterface {
}

interface PokemonQueryPharms {
  name: string;
}

export function PokemonDetails() {
  const { name } = useParams<PokemonQueryPharms>();

  const { data } = useQuery(
    `getPokemonDetails-${name}`,
    () => getPokemonDetails(name),
  );
  const pokemonSelectedDetails = data;
  const pokemonType = pokemonSelectedDetails?.types;
  const pokemonHeight =Number(pokemonSelectedDetails?.height) / 10
  //const backgroundColors = pokemonSelectedDetails?.types.map((type) => ({type.type.name} ))


  return (
    <>
      <AppBarMenu />
      <Container>
        <Card className={styles.PokemonCard} key={pokemonSelectedDetails?.id}>
          <Box
            display="flex"
            flexDirection="row"
            gap={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography className={styles.PokemonName}>
              {pokemonSelectedDetails?.name}
            </Typography>
            <Typography className={styles.PokemonId}>
              {`#${pokemonSelectedDetails?.id}`}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" gap={2}>
            {pokemonSelectedDetails?.types.map((type) => (
              <Typography className={styles.PokemonType}>
                {type.type.name}
              </Typography>
            ))}
          </Box>
          <Box
            className={styles.PokemonImgBox}
            mt={2}
            key={pokemonSelectedDetails?.id}
          >
            <img
              width="100%"
              height="100%"
              src={pokemonSelectedDetails?.sprites.other.home.front_default}
              className={styles.PokemonImg}
            />
          </Box>
          <Box display="flex" flexDirection="column" className={styles.PokemonInfos}>
            <Box display="flex" flexDirection="row" gap={0.6}>
              <Typography variant="subtitle1" color='GrayText' >Especie:</Typography>
              <Typography textTransform="uppercase">{pokemonSelectedDetails?.species.name}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={0.6} >
              <Typography variant="subtitle1" color='GrayText'>Altura:</Typography>
              <Typography>
                {pokemonHeight}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={0.6}>
              <Typography variant="subtitle1" color='GrayText'>Peso:</Typography>
              <Typography>
                {Number(pokemonSelectedDetails?.weight) / 10}kg
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={0.6}>
              <Typography variant="subtitle1" color='GrayText'>Abilidades:</Typography>
              {pokemonSelectedDetails?.abilities.map((ability) => (
                <Typography className={styles.PokemonType}>{ability.ability.name}</Typography>
              ))}
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
}
