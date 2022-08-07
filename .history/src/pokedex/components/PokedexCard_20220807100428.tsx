import { Button, CardActions } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { PokemonListInterface } from "../../pokemon/services/listPokemon";
import { CardPokemon } from "./styles.";

interface PokedexCardProps {
  pokemon: PokemonListInterface;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  function handleClick(pokemon: PokemonListInterface) {
    const history = useHistory();
    history.push(`/pokemon/${pokemon.name}`);
  }

  return (
    <CardPokemon>
      {pokemon.name}
      <CardActions>
        <Button
          size="small"
          onClick={() => handleClick(pokemon)}
        >
          Abrir
        </Button>
      </CardActions>
    </CardPokemon>
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
