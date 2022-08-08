import { Card, CardHeader, CardMedia, Chip } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { PokemonDetail } from "../../pokemon/types/PokemonDetails";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/pokemon/${pokemon.name}`);
  }

  return (
    <Card sx={{ maxWidth: 310 }} onClick={handleClick} key={pokemon.id}>
      <CardHeader
        title={pokemon.name}
        subheader={pokemon.types.map((type) => (
          <Chip label={type.type.name} variant="outlined" />
        ))}
      />
      <CardMedia
        component="img"
        height="auto"
        width="auto"
        image={pokemon?.sprites.other.home.front_default}
        alt="Paella dish"
      />
    </Card>
  );
};
