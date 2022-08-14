import { Box, Card, Container, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { setTypeColor } from "../services/getColorsBack";
import { getPokemonDetails } from "./services/getPokemonDetails";
import { getPokemonEnvDetails } from "./services/getPokemonEnv";
import axios from "axios";

import styles from "./styles.module.scss";

interface PokemonQueryPharms {
  name: string;
  id?: number | any;
}

export function PokemonMoreInfos() {
  const { name, id } = useParams<PokemonQueryPharms>();
  const { data } = useQuery(
    `getPokemonDetails-${name}`,
    () => getPokemonDetails(name),
  );
  const { data } = useQuery(
    `getPokemonEnvDetails-${id}`,
    () => getPokemonEnvDetails(id),
  );


  const pokemonSelectedDetails = data;

  const envResponse = axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`,
  );

  console.log(envResponse);

  return (
    <>
      <Container maxWidth="lg">
        <Card className={styles.PokeInfo} key={pokemonSelectedDetails?.id}>
          <Box
            display="flex"
            flexDirection="column"
            className={styles.PokemonInfos}
          >
            <Box
              display="flex"
              flexDirection="column"
              gap={0.6}
              justifyContent="space-around"
            >
              <Box display="flex" flexDirection="row" gap={2}>
                <Typography variant="subtitle1" color="GrayText">
                  Tipo:
                </Typography>
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
            <Box display="flex" flexDirection="column" gap={0.6}>
              <Typography variant="subtitle1" color="GrayText">
                Abilidades:
              </Typography>
              {pokemonSelectedDetails?.moves.map((move) => (
                <Typography
                  className={styles.PokemonType}
                >
                  {move.move.name}
                </Typography>
              ))}
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
}
