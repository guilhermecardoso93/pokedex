enum TypeColor {
  Bug = '#08a086',
  Dragon = '#b7224b',
  Fairy = '#fddace',
  Fire = '#f71818',
  Ghost = '#e9e7e1',
  Ground = '#b19d97',
  Normal = '#655f60',
  Psychic = '#9467f9',
  Steel = '#DDDDDD',
  Dart = '#9adb54',
  Electric = '#f7ea18',
  Fighting = '#147693',
  Flying = '#cff1f8',
  Grass = '#70d0ac',
  Ice = '#b7f7ff',
  Poison = '#711493',
  Rock = '#1b0e0e',
  Water = '#13c9f4',
}

export const setTypeColor = (type: string): string => {
  switch (type) {
    case 'bug':
      return TypeColor.Bug;
    case 'dragon':
      return TypeColor.Dragon;
    case 'fairy':
      return TypeColor.Fairy;
    case 'fire':
      return TypeColor.Fire;
    case 'ghost':
      return TypeColor.Ghost;
    case 'ground':
      return TypeColor.Ground;
    case 'normal':
      return TypeColor.Normal;
    case 'psychic':
      return TypeColor.Psychic;
    case 'steel':
      return TypeColor.Steel;
    case 'dart':
      return TypeColor.Dart;
    case 'electric':
      return TypeColor.Electric;
    case 'fighting':
      return TypeColor.Fighting;
    case 'flying':
      return TypeColor.Flying;
    case 'grass':
      return TypeColor.Grass;
    case 'ice':
      return TypeColor.Ice;
    case 'poison':
      return TypeColor.Poison;
    case 'rock':
      return TypeColor.Rock;
    case 'water':
      return TypeColor.Water;
    default:
      return '#333';
  }
};