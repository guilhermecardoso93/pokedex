import { Box, Card, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AppBarMenu } from "../components/AppBarMenu";
import { getPokemonDetails } from "./services/getPokemonDetails";
import Back from "../../public/back.png";

import styles from "./styles.module.scss";

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

  return (
    <>
      <AppBarMenu />
      <Container>
        <Card className={styles.PokemonCard} key={pokemonSelectedDetails?.id}>
          <Box display="flex" flexDirection="row" gap={2} alignItems='center' justifyContent='space-between'>
            <Typography className={styles.PokemonName}>
              {pokemonSelectedDetails?.name}
            </Typography>
            <Typography className={styles.PokemonId}>
              {`#${pokemonSelectedDetails?.id}`}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" gap={2}>
            {pokemonSelectedDetails?.types.map((type) => (
              <Typography className={styles.PokemonType}>{type.type.name}</Typography>
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

          <Box display="flex" flexDirection="row" gap={1}>
            <Typography>Especie:</Typography>
            <Typography>{pokemonSelectedDetails?.species.name}</Typography>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <Typography>Altura:</Typography>
            <Typography>
              {Number(pokemonSelectedDetails?.height) / 10}cm
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <Typography>peso:</Typography>
            <Typography>
              {Number(pokemonSelectedDetails?.weight) / 10}kg
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <Typography>Abilidades:</Typography>
            {pokemonSelectedDetails?.abilities.map((ability) => (
              <Typography>{ability.ability.name}</Typography>
            ))}
          </Box>
        </Card>
      </Container>
    </>
  );
}
