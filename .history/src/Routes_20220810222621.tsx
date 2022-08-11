import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {FavoriteScreen} from './favorites/contexts/FavoriteScreen';
import { Pokedex } from './pokedex/Pokedex';
import { PokemonEvoDetails } from './pokemon/PokemonEvoDetails';

interface RoutesProps {

}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <Switch>
      <Route path='/pokemon/:name'>
        <PokemonEvoDetails/>
      </Route>
      <Route path='/favoritos'>
        <FavoriteScreen/>
      </Route>
      <Route path='/'>
        <Pokedex />
      </Route>
    </Switch>
  );
};

export default Routes;