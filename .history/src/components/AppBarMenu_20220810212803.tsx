import React from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  Toolbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { listPokemon } from "../pokemon/services/listPokemon";
import Pokebola from "../assets/pokebola.png";
import { Favorite } from "@mui/icons-material";

interface AppbarProps {
}

export const AppBarMenu: React.FC<AppbarProps> = () => {
  const { goBack, push } = useHistory();
  const { isRefetching } = useQuery(`pokemon`, listPokemon);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          onClick={() => {
            goBack;
          }}
        >
          <img src={Pokebola} width="15%" />
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokedex
        </Typography>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Badge color='secondary'>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => push("/favoritos")}
            >
              <Favorite />
            </IconButton>
          </Badge>
        </Box>
      </Toolbar>
      {isRefetching && (
        <LinearProgress variant="indeterminate" color="secondary" />
      )}
    </AppBar>
  );
};
