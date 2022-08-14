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
    `getPokemonDetails-${id}/`,
    () => getPokemonDetails(id),
  );

  const pokemonEnv = data;
  console.log(pokemonEnv)

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

