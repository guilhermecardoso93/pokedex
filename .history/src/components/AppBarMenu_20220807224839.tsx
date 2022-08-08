import React from "react";
import { AppBar, LinearProgress, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { listPokemon } from "../pokemon/services/listPokemon";
import Pokebola from "../assets/pokebola.png"

interface AppbarProps {
}

export const AppBarMenu: React.FC<AppbarProps> = () => {
  const { goBack } = useHistory();
  const { isRefetching } = useQuery(`pokemon`, listPokemon);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          onClick={() => {
            goBack;
          }}
        >
          <img src={Pokebola} />
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokedex
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      {isRefetching && (
        <LinearProgress variant="indeterminate" color="secondary" />
      )}
    </AppBar>
  );
};
