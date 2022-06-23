const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);

const warriorAttack = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1) + warrior.strength);

const mageAttack = () => {
  const damageAndMana = {
    damage: Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) + mage.intelligence),
    mana: mage.mana < 15 ? 'Não possui mana o suficiente' : mage.mana -= 15,
  }
  return damageAndMana;
}

const gameActions = {
  warriorTurn: () => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: () => {
    const mageTurnStats = mageAttack();
    const mageDamage = mageTurnStats.damage;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.mana;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: () => {
    const dragonDamage = dragonAttack();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn();
gameActions.mageTurn();
gameActions.dragonTurn();
console.log(gameActions.turnResults());
