enum TypeColor {
  Bug = '#08a086',
  Dragon = '#b7224b',
  Fairy = '#ff55e2',
  Fire = '#ff9100',
  Ghost = '#540869',
  Ground = '#b19d97',
  Normal = '#cdcdcd',
  Psychic = '#9467f9',
  Steel = '#DDDDDD',
  Dart = '#ffffff',
  Electric = '#f7ea18',
  Fighting = '#147693',
  Flying = '#cff1f8',
  Grass = '#70d0ac',
  Ice = '#b7f7ff',
  Poison = '#711493',
  Rock = '#5e5c5c',
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


enum TypeColorStatus {
  hp = '#08a086',
  attack = '#b7224b',
  defense = '#ff55e2',
  specialAttack = '#ff9100',
  specialDefense = '#540869',
  speed = '#b19d97',
}

export const setTypeStatusColor = (type: string): string => {
  switch (type) {
    case 'hp':
      return TypeColorStatus.hp;
    case 'attack':
      return TypeColorStatus.attack;
    case 'defense':
      return TypeColorStatus.defense;
    case 'special-attack':
      return TypeColorStatus.specialAttack;
    case 'special-defense':
      return TypeColorStatus.specialDefense;
    case 'speed':
      return TypeColorStatus.speed;
    default:
      return '#333';
  }
};