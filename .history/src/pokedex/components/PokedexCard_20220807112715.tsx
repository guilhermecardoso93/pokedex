import { ExpandMore } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { PokemonListInterface } from "../../pokemon/services/listPokemon";
import { CardPokemon } from "./styles.";
import { PokemonDetail } from "../../pokemon/types/PokemonDetails";
import { Box } from "@mui/system";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/pokemon/${pokemon.name}`);
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
      <CardMedia
        component="img"
        height="auto"
        width='auto'
        image={pokemon.sprites.front_default}
        alt="Paella dish"
      />
      <CardHeader
        title={pokemon.name}
        subheader= {pokemon.types.map((type) => 
          <Chip label={type.type.name} variant='outlined'/>
        )}
      />
    </Card>
  );

  /*








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
  );*/
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
