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
      sx={{ maxWidth: 340 }}
      onClick={handleClick}
      key={pokemon.id}
      className={styles.PokemonCard}
    >
      <CardMedia
        component="img"
        height="auto"
        width="auto"
        image={pokemon?.sprites.other.home.front_default}
      />

      <Box display="flex" flexDirection="column" padding={1}>
        <CardHeader
          title={pokemon.name}
          className={styles.PokemonName}
        />
         <Box className={styles.PokemonInfosBox} display="flex" flexDirection="row" gap={1}>
            {pokemon.types.map((type) => (
            <Chip label={type.type.name} variant="outlined" className={styles.PokemonType} />
        ))}
          </Box>
      </Box>
    </Card>
  );
};
