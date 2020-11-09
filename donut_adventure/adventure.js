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
    console.log(this.health);
  }
  fight() {
    console.log(`I'm ready to rumble!`);
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
    console.log(this.health);
  }
  fight() {
    console.log(`I'm gonna flatten you like a slice of pepperoni!`);
  }
}

const dougie = new Hero("Dougie");
const pizzaRat = new Enemy("Pizza Rat");
