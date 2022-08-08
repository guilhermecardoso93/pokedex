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
      <CardMedia
        component="img"
        height="80%"
        width="auto"
        image={pokemon?.sprites.other.home.front_default}
        className={styles.PokemonImg}
      />

      <Box
        display="flex"
        flexDirection="column"
        padding={1}
        bgcolor="ghostwhite"
      >
        <Typography className={styles.PokemonName}>
        {pokemon.name}
        </Typography>
        
        <Box
          className={styles.PokemonInfosBox}
          display="flex"
          flexDirection="row"
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
      </Box>
    </Card>
  );
};
