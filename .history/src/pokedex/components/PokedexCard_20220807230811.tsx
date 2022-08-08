import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { PokemonDetail } from "../../pokemon/types/PokemonDetails";
import Wave from "../../assets/wave.svg";

import styles from "./styles.module.scss";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/pokemon/${pokemon.name}`);
  }

  return (
    <Card
      sx={{ maxWidth: 370 }}
      onClick={handleClick}
      key={pokemon.id}
      className={styles.PokemonCard}
    >
      <Box className={styles.Wave}>
        <CardMedia
          component="img"
          height="80%"
          width="auto"
          image={pokemon?.sprites.other.home.front_default}
          className={styles.PokemonImg}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        padding={1}
        bgcolor="#f3f4f5"
      >
        <Typography className={styles.PokemonName}>
          {pokemon.name}
        </Typography>

        <Box
          className={styles.PokemonInfosBox}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          gap={1}
        >
          {pokemon.types.map((type) => (
            <Chip
              label={type.type.name}
              variant="outlined"
              className={styles.PokemonType}
            />
          ))}
        </Box>
        
        <Box display="flex" flexDirection="column" className={styles.PokemonInfos}>
            <Box display="flex" flexDirection="row" gap={0.6}>
              <Typography variant="subtitle1" color='GrayText' >Especie:</Typography>
              <Typography textTransform="uppercase">{pokemon?.species.name}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={0.6} >
              <Typography variant="subtitle1" color='GrayText'>Altura:</Typography>
              <Typography>
                {Number(pokemon?.height) / 10}cm
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={0.6}>
              <Typography variant="subtitle1" color='GrayText'>Peso:</Typography>
              <Typography>
                {Number(pokemon?.weight) / 10}kg
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={0.6}>
              <Typography variant="subtitle1" color='GrayText'>Abilidades:</Typography>
              {pokemon?.abilities.map((ability) => (
                <Typography className={styles.PokemonType}>{ability.ability.name}</Typography>
              ))}
            </Box>
          </Box>
      </Box>
    </Card>
  );
};
