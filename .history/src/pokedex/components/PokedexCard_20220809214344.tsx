import { Box, Card, CardMedia, Chip, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { PokemonDetail } from "../../pokemon/types/PokemonDetails";

import styles from "./styles.module.scss";
import { setTypeColor } from "../../services/getColorsBack";
import { setTypeColorText } from "../../services/getColorsText";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/pokemon/${pokemon.name}`);
  }

  const pokemonColorBack : string[] = pokemon?.types.map((
    type, 
  ) => (type.type.name));
  console.log(pokemonColorBack);

  return (
    <Card
      sx={{ maxWidth: 370 }}
      onClick={handleClick}
      key={pokemon.id}
      className={styles.PokemonCard}
    >
      <Box className={styles.Wave}>
       
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
          className={styles.PokemonInfos}
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
              style={{
                backgroundColor: setTypeColor(type.type.name),
                color: setTypeColorText(type.type.name),
              }}
            />
          ))}
        </Box>
        <CardMedia
          component="img"
          height="80%"
          width="auto"
          image={pokemon?.sprites.other.home.front_default}
          className={styles.PokemonImg}
          style={{
            backgroundColor: setTypeColor(pokemonColorBack[0]),
            color: setTypeColorText(pokemonColorBack[0]),
          }}

        />
      </Box>
    </Card>
  );
};
