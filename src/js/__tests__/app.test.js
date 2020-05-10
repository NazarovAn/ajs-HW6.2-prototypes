import { takeDamage, Character } from '../app';

describe('Character takes damage', () => test.each([
  ['20', 20, {
    name: 'Bow',
    type: 'Bowman',
    health: 88,
    attack: 10,
    defence: 40,
  }],
  ['80', 80, {
    name: 'Bow',
    type: 'Bowman',
    health: 52,
    attack: 10,
    defence: 40,
  }],
])(
  ('damage points = %s'),
  (level, amount, result) => {
    const char = new Character('Bow', 'Bowman');
    takeDamage.call(char, amount);

    expect(char).toEqual(result);
  },
));
