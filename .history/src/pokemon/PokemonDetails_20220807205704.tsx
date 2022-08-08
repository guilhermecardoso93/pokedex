import { Box, Container, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
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

  
 
/*
  bug: '#729f3f',
  dragon: '#53a4cf',
  fairy: '#fdb9e9',
  fire: '#fd7d24',
  ghost: '#7b62a3',
  ground: '#f7de3f',
  normal: '#a4acaf',
  pyschic: '#f366b9',
  steel: '#9eb7b',
  dark: '#707070',
  electric: '#eed535',
  fighting: '#d56723',
  flying: '#3dc7ef',
  grass: '#9bcc50',
  ice: '#51c4e7',
  poison: '#b97fc9',
  rock: '#a38c21',
  water: '#4592c4'
*/

  return (
    <>
      <AppBarMenu />
      <Container>
      <Car>
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
        <Box display="flex" flexDirection="row" gap={2} >
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
        </Car>
      </Container>
    </>
  );
}
