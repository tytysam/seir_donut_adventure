// console.log("JS file is connected!");

// ==========================================================
// The Adventure of Dougie the Donut on the Streets of NYC
// ==========================================================

// Randomization Function
const randomization = (limit) => {
  return Math.floor(Math.random() * limit);
};

// Hero Class
class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
    };
    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories",
    ];
  }
  talkSass() {
    console.log(this.catchPhrases[randomization(this.catchPhrases.length)]);
  }
  announceHealth() {
    console.log(`Dougie currently has ${this.health} hitpoints.`);
  }
  fight(enemy) {
    if (Math.random() > 0.5) {
      enemy.health = enemy.health - this.weapons.sprinkleSpray;
      console.log(
        `${enemy.name} got hit by Sprinkle Spray! His hitpoints have dropped to ${enemy.health}.`
      );
    } else {
      enemy.health = enemy.health - this.weapons.sugarShock;
      console.log(
        `${enemy.name} got hit by Sugar Shock! His hitpoints have dropped to ${enemy.health}.`
      );
    }
  }
}

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    };
    this.catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer",
    ];
  }
  talkSmack() {
    console.log(this.catchPhrases[randomization(this.catchPhrases.length)]);
  }
  announceHealth() {
    console.log(`Pizza Rat currently has ${this.health} hitpoints.`);
  }
  fight(enemy) {
    if (Math.random() > 0.5) {
      enemy.health = enemy.health - this.weapons.pepperoniStars;
      console.log(
        `${enemy.name} got hit by Pepperoni Stars! His hitpoints have dropped to ${enemy.health}.`
      );
    } else {
      enemy.health = enemy.health - this.weapons.cheeseGrease;
      console.log(
        `${enemy.name} got hit by Cheese Grease! His hitpoints have dropped to ${enemy.health}.`
      );
    }
  }
}

const dougie = new Hero("Dougie");
const pizzaRat = new Enemy("Pizza Rat");

dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

dougie.fight(pizzaRat);
pizzaRat.fight(dougie);

dougie.announceHealth();
pizzaRat.announceHealth();
