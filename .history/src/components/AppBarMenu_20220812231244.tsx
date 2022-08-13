import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  Toolbar,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import styles from "./styles.module.scss";

import { FavoriteContext } from "../favorites/contexts/FavoriteContext";
import { listPokemon } from "../pokemon/services/listPokemon";
import Pokebola from "../assets/pokebola.png";

interface AppbarProps {
}

export const AppBarMenu: React.FC<AppbarProps> = () => {
  const { goBack, push } = useHistory();
  const { isRefetching } = useQuery(`pokemon`, listPokemon);
  const { favorites } = useContext(FavoriteContext);

  const favoriteCount = favorites.length;

  return (
    <AppBar position="fixed" className={styles.Appbar}>
      <Toolbar className={styles.ToolbarProps}>
        <Box className={styles.ToolbarBoxProps}>
          <Button>
            <Link to="/">
              <img src={Pokebola} width="auto" className={styles.ToolbarBoxImgProps}/>
            </Link>
          </Button>
        </Box>
        <Box>
          <Typography
            variant="h2"
          >
            Pokedex
          </Typography>
        </Box>
        <Box>
          <IconButton
            size="large"
            sx={{ color: pink[500] }}
            onClick={() => push("/favoritos")}
          >
            <Badge color="secondary" badgeContent={favoriteCount}>
              <Favorite color={favoriteCount !== 0 ? "error" : "primary"}/>
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
