import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppBarMenu } from "../components/AppBarMenu";
import { getPokemonDetails } from "./services/getPokemonDetails";
import { PokemonDetail } from "./types/PokemonDetails";

interface PokemonDetailsInterface {
}

interface PokemonQueryPharms {
  name: string;
}

export function PokemonDetails() {
  const { name } = useParams<PokemonQueryPharms>();
  const [pokemonSelectedDetails, setPokemonSelectedDetails] = useState<
    PokemonDetail | undefined
  >(undefined);

  useEffect(
    () => {
      if (!name) return;
      getPokemonDetails(name).then((response: any) =>
        setPokemonSelectedDetails(response.data)
      );
    },
    [name],
  );
  return (
    <>
      <AppBarMenu />
    </>
  );
}
