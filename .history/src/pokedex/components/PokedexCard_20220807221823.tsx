import { Box, Card, CardHeader, CardMedia, Chip } from "@mui/material";
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
    <Card sx={{ maxWidth: 340 }} onClick={handleClick} key={pokemon.id} className={styles.PokemonCard}>
      <CardMedia
        component="img"
        height="auto"
        width="auto"
        image={pokemon?.sprites.other.home.front_default}
        alt="Paella dish"
      />
      <CardHeader
        title={pokemon.name}
        className={styles.PokemonName}
        subheader={pokemon.types.map((type) => (
          <Box className={styles.PokemonInfosBox}>
            <Chip label={type.type.name} variant="outlined" className={styles.PokemonType} />
          </Box>
        ))}
      />
    </Card>
  );
};
