import { Button, Card, CardActions } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { PokemonListInterface } from "../../pokemon/services/listPokemon";
import { CardPokemon } from "./styles.";

interface PokedexCardProps {
  pokemon: PokemonListInterface;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const history = useHistory();
  function handleClick() {   
    history.push(`/pokemon/${pokemon.name}`);
  }

  return (
    <Card>
      {pokemon.name}
      <CardActions>
        <Button
          size="small"
          onClick={handleClick}
        >
          Abrir
        </Button>
      </CardActions>
    </Card>
  );
};

/*
 <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {pokemon.name}
                    </Typography>
                  </CardContent>

*/
