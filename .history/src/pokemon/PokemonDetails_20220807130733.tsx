import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppBarMenu } from "../components/AppBarMenu";
import { getPokemonDetails } from "./services/getPokemonDetails";
import { PokemonDetail } from "./types/PokemonDetails";

interface PokemonDetailsInterface {
}

interface PokemonQueryPharms {
  name: string;
}

export function PokemonDetails() {
  const { name } = useParams<PokemonQueryPharms>();
  const [pokemonSelectedDetails, setPokemonSelectedDetails] = useState<
    PokemonDetail | undefined
  >(undefined);

  useEffect(
    () => {
      if (!name) return;
      getPokemonDetails(name).then((response: any) =>
        setPokemonSelectedDetails(response)
      );
    },
    [name],
  );

  return (
    <>
      <AppBarMenu />
      <Container>
        <Box mt={2} key={pokemonSelectedDetails?.id}>
          <img
            width="20%"
            height="auto"
            src={pokemonSelectedDetails?.sprites.front_default}
          />
        </Box>
        <Typography>
          {pokemonSelectedDetails?.name}
        </Typography>
        {pokemonSelectedDetails?.types.map((type) => (
          <Typography>{type.type.name}</Typography>
        ))}
        <Box display="flex" flexDirection="row">
          <Typography>Especie:</Typography>
          <Typography>{pokemonSelectedDetails?.species.name}</Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          <Typography>Altura:</Typography>
          <Typography>{Number(pokemonSelectedDetails?.height)/10}cm</Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          <Typography>peso:</Typography>
          <Typography>{Number(pokemonSelectedDetails?.weight)/10}kg</Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap={2}>
          <Typography>Abilidades:</Typography>
          {pokemonSelectedDetails?.abilities.map((ability) => (
            <Typography>{ability.ability.name}</Typography>
          ))}
        </Box>
      </Container>
    </>
  );
}
