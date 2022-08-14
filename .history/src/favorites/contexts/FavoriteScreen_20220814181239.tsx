import Box from "@mui/material/Box";
import { CircularProgress, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useQuery } from "react-query";
import { AppBarMenu } from "../../components/AppBarMenu";
import { listPokemon } from "../../pokemon/services/listPokemon";
import { PokedexCard } from "../../pokedex/components/PokedexCard";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";

import styles from "../App.module.scss";

interface FavoriteScreenProps {
}

export const FavoriteScreen: React.FC<FavoriteScreenProps> = () => {
  const { data, isLoading, isRefetching } = useQuery(`pokemon`, listPokemon);
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const { push } = useHistory()

  return (
    <>
      <AppBarMenu />
      <Container maxWidth="lg"  style={{marginTop: '6rem'}}  className={styles.Principal}>
        {!isLoading
          ? (
            <Box mt={2} >
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {favorites?.map((pokemon) => (
                  <>
                    <Grid
                      item
                      xs={6}
                      lg={2}
                      md={2}
                      mb={2}
                    >
                      <PokedexCard pokemon={pokemon} />
                    </Grid>
                  </>
                ))}
              </Grid>
            </Box>
          )
          : (
            <div>
              <CircularProgress />
            </div>
          )}
      </Container>
    </>
  );
};

