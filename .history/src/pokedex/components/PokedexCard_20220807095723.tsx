import React from 'react';
import { Card } from './styles.';


interface PokedexCardProps {
  
}


export const PokedexCard: React.FC<PokedexCardProps> = () => {
  return (
    <Card>
      <h1>Oi</h1>
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