function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

const char = new Character('Bow', 'Bowman');
const charTwo = new Character('Sword', 'Swordsman');

Character.prototype = {
  takeDamage(damage) {
    this.health -= damage * (1 - this.defence / 100);
  },
};
const { takeDamage } = Character.prototype;

takeDamage.call(char, 20);
takeDamage.call(charTwo, 80);

Character.prototype.takeDamage.call(char, 20);

export { takeDamage, Character };
