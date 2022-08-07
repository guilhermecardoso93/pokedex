import React from "react";
import { AppBar, LinearProgress, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { listPokemon } from "../pokemon/services/listPokemon";

interface AppbarProps {
}

export const AppBarMenu: React.FC<AppbarProps> = () => {
  const { goBack } = useHistory();
  const {isRefetching } = useQuery(`pokemon`, listPokemon)

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() =>{goBack}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokedex
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      { isRefetching && <LinearProgress variant='indeterminate' color='secondary'/> }
    </AppBar>
  );
};
