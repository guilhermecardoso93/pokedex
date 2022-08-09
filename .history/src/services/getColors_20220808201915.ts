import { PokemonTypeColors } from "../global.styles";
import { Type } from "../pokemon/types/PokemonDetails";

export const getBackgroundColors = (
  type: Type[],
): { light: string; medium: string }[] => {
  return type.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
      ([key, _]) => key === type.name,
    );

    return backgroundColor;
    console.log(backgroundColor)
  });
};
