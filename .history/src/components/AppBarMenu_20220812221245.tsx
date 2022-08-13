import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import { AppBar, Badge, Box,  IconButton,  LinearProgress,  Toolbar,} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { FavoriteContext } from "../favorites/contexts/FavoriteContext";
import { listPokemon } from "../pokemon/services/listPokemon";
import Pokebola from "../assets/pokebola.png";
import PokemonBAck from "../assets/pokemonbackground.jpg";



interface AppbarProps {
}

export const AppBarMenu: React.FC<AppbarProps> = () => {
  const { goBack, push } = useHistory();
  const { isRefetching } = useQuery(`pokemon`, listPokemon);
  const { favorites } = useContext(FavoriteContext);

  const favoriteCount = favorites.length;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button>
          <Link to='/'>
            <img src={Pokebola} width="15%" />
          </Link>
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokedex
        </Typography>
        <Box>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => push("/favoritos")}
          >
            <Badge color="secondary" badgeContent={favoriteCount}>
              <Favorite color={favoriteCount !== 0 ? "error" : "disabled"} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
      {isRefetching && (
        <LinearProgress variant="indeterminate" color="secondary" />
      )}
    </AppBar>
  );
};
