import { useEffect, useState } from "react";
import { AppBarMenu } from "../components/AppBarMenu";
import { PokemonDetail } from "./types/PokemonDetails";

interface PokemonDetailsInterface {
}

export function PokemonDetails() {
  const [pokemonSelectedDetails, setPokemonSelectedDetails] = useState<PokemonDetail | undefined>(undefined);
/*
  useEffect(
    () => {
      if (!setPokemonSelected) return;
      getPokemonDetails(setPokemonSelected.name).then((response: any) =>
        setPokemonSelectedDetails(response.data)
      );
    },
    [setPokemonSelected],
  );*/
  return (
    <>
      <AppBarMenu />
    </>
  );
}
