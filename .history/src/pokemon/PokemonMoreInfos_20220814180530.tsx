import { Box, Card, Container, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { setTypeColor, setTypeStatusColor } from "../services/getColorsBack";
import { getPokemonDetails } from "./services/getPokemonDetails";
import { getPokemonEnvDetails } from "./services/getPokemonEnv";
import axios from "axios";

import styles from "./styles.module.scss";
import { PokemonEnv } from "./PokemonEnv";

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
  const pokemonSelectedDetails = data;
  const pokemonStatusNumber = data?.stats.map((stat) => stat.base_stat);
  const pokemonStatus = data?.stats.map((stat) => stat.stat.name);
  const pokemonColor: any = data?.stats.map((stat) => (stat.stat.name));
  console.log(pokemonStatusNumber, pokemonStatus);

  return (
    <>
      <Container maxWidth="lg">
          <Card className={styles.PokeInfo} key={pokemonSelectedDetails?.id}  flexDirection={{ xs: "column", sm: "column", md: "row" }}>
            <Box
              display="flex"
              flexDirection='column'
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
            </Box>
            <Box display="flex" flexDirection="row">
              <Box
                display="flex"
                flexDirection="row"
                className={styles.PokemonImg}
              >
                <img
                  width="95%"
                  height="100%"
                  src={pokemonSelectedDetails?.sprites.other.home.front_shiny}
                />
              </Box>
              <Box>
                <Box className={styles.PokemonStatus}>
                  <Box display="flex" flexDirection="column" gap={0.6}>
                    <Typography variant="subtitle1" color="GrayText">
                      Battle Status:
                    </Typography>
                    <Box display="flex" flexDirection="row" gap={0.6}>
                      <Box display="flex" flexDirection="column" gap={0.6}>
                        {pokemonStatus?.map((status) => (
                          <Typography
                            className={styles.PokemonType}
                            textAlign="right"
                            style={{
                              backgroundColor: setTypeStatusColor(
                                pokemonColor[0],
                              ),
                              //color: setTypeColorText(pokemonColorBack[0]),
                            }}
                          >
                            {status}:
                          </Typography>
                        ))}
                      </Box>
                      <Box display="flex" flexDirection="column" gap={0.6}>
                        {pokemonStatusNumber?.map((move) => (
                          <Typography
                            className={styles.PokemonType}
                          >
                            {move}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
      </Container>
    </>
  );
}
