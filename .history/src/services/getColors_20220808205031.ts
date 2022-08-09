enum TypeColor {
  Bug = '#08a086',
  Dragon = '#b7224b',
  Fairy = '#fddace',
  Fire = '#a00822',
  Ghost = '#e9e7e1',
  Ground = '#b19d97',
  Normal = '#655f60',
  Psychic = '#9467f9',
  Steel = '#DDDDDD',
  Dart = '#9adb54',
  Electric = '#b9bf15',
  Fighting = '#147693',
  Flying = '#cff1f8',
  Grass = '#70d0ac',
  Ice = '#b7f7ff',
  Poison = '#711493',
  Rock = '#1b0e0e',
  Water = '#0000ff',
}

export const setTypeColor = (type: string): string => {
  switch (type) {
    case 'Bug':
      return TypeColor.Bug;
    case 'Dragon':
      return TypeColor.Dragon;
    case 'Fairy':
      return TypeColor.Fairy;
    case 'Fire':
      return TypeColor.Fire;
    case 'Ghost':
      return TypeColor.Ghost;
    case 'Ground':
      return TypeColor.Ground;
    case 'Normal':
      return TypeColor.Normal;
    case 'Psychic':
      return TypeColor.Psychic;
    case 'Steel':
      return TypeColor.Steel;
    case 'Dart':
      return TypeColor.Dart;
    case 'Electric':
      return TypeColor.Electric;
    case 'Fighting':
      return TypeColor.Fighting;
    case 'Flying':
      return TypeColor.Flying;
    case 'Grass':
      return TypeColor.Grass;
    case 'Ice':
      return TypeColor.Ice;
    case 'Poison':
      return TypeColor.Poison;
    case 'Rock':
      return TypeColor.Rock;
    case 'Water':
      return TypeColor.Water;
    default:
      return '#333';
  }
};