import React from "react";
import { Route,Switch } from "react-router-dom";
import { Pokedex } from "./pokedex/Pokedex";

interface RoutesProps {
}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <>
      <Switch>
        <Route path="/pokemon">
          <h1>Pokemon</h1>
        </Route>
        <Route path="/">
          <Pokedex />
        </Route>
      </Switch>
    </>
  );
};
