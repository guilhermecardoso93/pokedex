import { Box, Card, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPokemonEnvDetails } from "./services/getPokemonEnv";
import axios from "axios";

import styles from "./styles.module.scss";

interface PokemonQueryPharms {
  name: string;
  id?: number | any;
}

export function PokemonEnv() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const { name, id } = useParams<PokemonQueryPharms>();
  const { data } = useQuery(
    `getPokemonEnvDetails-${id}`,
    () => getPokemonEnvDetails(id),
  );

  const pokemonEnv = data;

  return (
    <>
      <Container maxWidth="lg">
        <Card className={styles.PokeInfo}>
          {pokemonEnv}
        </Card>
      </Container>
    </>
  );
}

