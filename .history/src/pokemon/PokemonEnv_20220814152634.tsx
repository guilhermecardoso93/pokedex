import { Box, Card, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPokemonEnvDetails } from "./services/getPokemonEnv";
import axios from "axios";

import styles from "./styles.module.scss";
import { getPokemonDetails } from "./services/getPokemonDetails";

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
  const pokemonStatusNumber = data?.stats.map((stat) => stat.base_stat);
  const pokemonStatus = data?.stats.map((stat) => stat.stat.name);
  console.log(pokemonStatusNumber,pokemonStatus )

  return (
    <>
      <Container maxWidth="lg">
        <Card className={styles.PokeInfo}>
        <Box display="flex" flexDirection="column" gap={0.6}>
              <Typography variant="subtitle1" color="GrayText">
                Status:
              </Typography>
              {pokemonStatusNumber?.map((move) => (
                <Typography
                  className={styles.PokemonType}
                >
                  hp:{move[0]}
                </Typography>
              ))}
            </Box>
        </Card>
      </Container>
    </>
  );
}

