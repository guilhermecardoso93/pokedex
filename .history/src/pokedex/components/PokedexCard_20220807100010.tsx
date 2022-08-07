import React from "react";
import { PokemonListInterface } from "../../pokemon/services/listPokemon";
import { Card } from "./styles.";

interface PokedexCardProps {
  pokemon: PokemonListInterface;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  return (
    <Card>
      {pokemon.name}
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
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => handleClick(pokemon)}
                    >
                      Abrir
                    </Button>
                  </CardActions>
*/
