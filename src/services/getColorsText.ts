enum TypeColor {
  Bug = '#ffffff',
  Dragon = '#ffffff',
  Fairy = '#000000',
  Fire = '#ffffff',
  Ghost = '#000000',
  Ground = '#ffffff',
  Normal = '#ffffff',
  Psychic = '#ffffff',
  Steel = '#000000',
  Dart = '#000000',
  Electric = '#ffffff',
  Fighting = '#ffffff',
  Flying = '#000000',
  Grass = '#ffffff',
  Ice = '#000000',
  Poison = '#ffffff',
  Rock = '#ffffff',
  Water = '#ffffff',
}

export const setTypeColorText = (type: string): string => {
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
      return '#ffffff';
  }
};