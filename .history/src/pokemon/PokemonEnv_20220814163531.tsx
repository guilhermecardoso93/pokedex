import { Box, Card, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPokemonEnvDetails } from "./services/getPokemonEnv";
import axios from "axios";

import styles from "./styles.module.scss";
import { getPokemonDetails } from "./services/getPokemonDetails";
import { setTypeStatusColor } from "../services/getColorsBack";
import { setTypeColorText } from "../services/getColorsText";

interface PokemonQueryPharms {
  name: string;
  id?: number | any;
}

export function PokemonEnv() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
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
      <Container>
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
                        backgroundColor: setTypeStatusColor(pokemonColor[0]),
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
          <Box
            className={styles.PokemonCard}
          >
            <img
              width="100%"
              height="100%"
              src={pokemonSelectedDetails?.sprites.other.home.front_shiny}
              className={styles.PokemonImg}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}
