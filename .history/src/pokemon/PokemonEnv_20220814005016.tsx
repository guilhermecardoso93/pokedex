import { Box, Card, Container, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPokemonEnvDetails } from "./services/getPokemonEnv";

import styles from "./styles.module.scss";

interface PokemonQueryPharms {
  name: string;
  id?: number | any;
}

export function PokemonEnv() {
  const { name, id } = useParams<PokemonQueryPharms>();
  const { data } = useQuery(
    `getPokemonEnvDetails-${id}`,
    () => getPokemonEnvDetails(id),
  );

  const pokemonEnv= data;
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
