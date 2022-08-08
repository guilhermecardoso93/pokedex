import { Box, Container, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AppBarMenu } from "../components/AppBarMenu";
import { getPokemonDetails } from "./services/getPokemonDetails";

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

  const pokemonType = pokemonSelectedDetails?.types
  console.log(pokemonType)

  return (
    <>
      <AppBarMenu />
      <Container>
        <Box
          mt={2}
          key={pokemonSelectedDetails?.id}
        >
          <img
            width="20%"
            height="auto"
            src={pokemonSelectedDetails?.sprites.other.home.front_default}
          />
        </Box>
        <Typography>
          {pokemonSelectedDetails?.name}
        </Typography>
        <Box display="flex" flexDirection="row" gap={2}>
          {pokemonSelectedDetails?.types.map((type) => (
            <Typography>{type.type.name}</Typography>
          ))}
        </Box>
        <Box display="flex" flexDirection="row" gap={2}>
          <Typography>Especie:</Typography>
          <Typography>{pokemonSelectedDetails?.species.name}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap={2}>
          <Typography>Altura:</Typography>
          <Typography>
            {Number(pokemonSelectedDetails?.height) / 10}cm
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap={2}>
          <Typography>peso:</Typography>
          <Typography>
            {Number(pokemonSelectedDetails?.weight) / 10}kg
          </Typography>
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
